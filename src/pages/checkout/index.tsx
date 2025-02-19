import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/hooks/use-cart'
import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { FormCheckout } from './components/form-checkout'
import { CardCheckout } from './components/card-checkout'
import { AddressCardCheckout } from './components/address-card-checkout'
import { api } from '@/lib/axios'
import { toast } from '@/hooks/use-toast'

import { RadioGroup } from '@/components/ui/radio-group'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus, CreditCard, Banknote, DollarSign } from 'lucide-react'

interface Address {
  id: number
  state: string
  city: string
  street: string
  number: string
  complement?: string
  zipCode: string
}

export function Checkout() {
  const navigate = useNavigate()
  const { cartItems, clearCart } = useCart()

  const [step, setStep] = useState<'list' | 'form'>('list')
  const [addresses, setAddresses] = useState<Address[]>([])
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [processingOrder, setProcessingOrder] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<
    'credit' | 'debit' | 'cash'
  >('credit')

  useEffect(() => {
    async function fetchAddresses() {
      try {
        const storedUser = localStorage.getItem('user')
        const userId = storedUser ? JSON.parse(storedUser).id : null

        if (!userId) {
          toast({
            variant: 'destructive',
            description: 'Erro ao obter usuário autenticado.',
          })
          return
        }

        const response = await api.get(`/api/address/user/${userId}`)
        setAddresses(response.data)

        if (response.data.length > 0) {
          setSelectedAddress(response.data[0].id)
        }
      } catch {
        toast({
          variant: 'destructive',
          description:
            'Erro ao carregar endereços. Tente novamente mais tarde.',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchAddresses()
  }, [])

  async function handleAddressAdded() {
    setLoading(true)

    try {
      const storedUser = localStorage.getItem('user')
      const userId = storedUser ? JSON.parse(storedUser).id : null

      if (!userId) {
        toast({
          variant: 'destructive',
          description: 'Erro ao obter usuário autenticado.',
        })
        return
      }

      const response = await api.get(`/api/address/user/${userId}`)
      setAddresses(response.data)
      setStep('list')
    } catch {
      toast({
        variant: 'destructive',
        description: 'Erro ao atualizar lista de endereços.',
      })
    } finally {
      setLoading(false)
    }
  }

  async function handleCheckout() {
    if (!selectedAddress) {
      toast({
        variant: 'destructive',
        description: 'Selecione um endereço para entrega!',
      })
      return
    }

    setProcessingOrder(true)

    const orderData = {
      paymentMethod:
        paymentMethod === 'credit'
          ? 'Credit Card'
          : paymentMethod === 'debit'
            ? 'Debit Card'
            : 'Cash',
      status: 'Pending',
      shippingAddressId: selectedAddress,
      orderItems: cartItems.map((item) => ({
        productSkuId: item.id,
        quantity: item.quantity,
      })),
    }

    try {
      const response = await api.post('/api/orders/checkout', orderData)

      if (response.status === 201 || response.status === 200) {
        toast({
          variant: 'success',
          description: 'Pedido realizado com sucesso!',
        })
        clearCart()
        navigate('/after-payment?status=success')
      } else {
        navigate('/after-payment?status=fail')
      }
    } catch {
      toast({
        variant: 'destructive',
        description: 'Erro ao finalizar pedido. Tente novamente.',
      })
      navigate('/after-payment?status=fail')
    } finally {
      setProcessingOrder(false)
    }
  }

  return (
    <>
      <PageBreadcrumb
        title="Checkout"
        pages={[
          { text: 'Home', link: '/home' },
          { text: 'Carrinho', link: '/cart' },
          { text: 'Checkout' },
        ]}
      />
      <ContainerDefault className="pb-44 pt-14">
        <h2 className="pb-10 text-xl font-semibold">
          Informações para entrega
        </h2>
        <div className="flex items-start justify-between gap-40">
          <div className="flex w-full flex-col gap-5">
            <div className="rounded-lg border border-input p-5">
              <h3 className="flex items-center gap-2 text-lg font-semibold">
                <DollarSign className="text-primary" />
                Pagamento
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar:
              </p>
              <ToggleGroup
                type="single"
                value={paymentMethod}
                onValueChange={(value) =>
                  value &&
                  setPaymentMethod(value as 'credit' | 'debit' | 'cash')
                }
                className="mt-5 flex justify-start gap-2"
              >
                <ToggleGroupItem
                  value="credit"
                  className="border text-sm hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <CreditCard size={16} />
                  Cartão de crédito
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="debit"
                  className="border text-sm hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <Banknote size={16} />
                  Cartão de débito
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="cash"
                  className="border text-sm hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-white"
                >
                  <DollarSign size={16} />
                  Dinheiro
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {step === 'list' ? (
              <div>
                {loading ? (
                  <p>Carregando endereços...</p>
                ) : addresses.length > 0 ? (
                  <RadioGroup
                    className="flex flex-col gap-5"
                    value={String(selectedAddress)}
                  >
                    {addresses.map((address) => (
                      <AddressCardCheckout
                        key={address.id}
                        state={address.state}
                        city={address.city}
                        street={address.street}
                        number={address.number}
                        complement={address.complement}
                        zipCode={address.zipCode}
                        radioId={`address-${address.id}`}
                        radioValue={String(address.id)}
                        onSelect={() => setSelectedAddress(address.id)}
                      />
                    ))}
                  </RadioGroup>
                ) : (
                  <p className="text-muted-foreground">
                    Nenhum endereço cadastrado.
                  </p>
                )}

                <Button
                  className="mt-5"
                  size="lg"
                  onClick={() => setStep('form')}
                >
                  <Plus />
                  Adicionar novo endereço
                </Button>
              </div>
            ) : (
              <div>
                <FormCheckout onAddressAdded={handleAddressAdded} />
                <Button
                  className="mt-5"
                  size="lg"
                  onClick={() => setStep('list')}
                >
                  <ArrowLeft />
                  Voltar para meus endereços
                </Button>
              </div>
            )}
          </div>

          <CardCheckout
            onConfirm={handleCheckout}
            isLoading={processingOrder}
          />
        </div>
      </ContainerDefault>
    </>
  )
}
