import { useEffect, useState } from 'react'
import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { OrderCard } from './components/order-card'
import { api } from '@/lib/axios'
import { toast } from '@/hooks/use-toast'
import { Skeleton } from '@/components/ui/skeleton'

interface OrderItem {
  id: number
  quantity: number
  price: number
  productSku: {
    id: number
    imageUrl: string
    price: number
    sizeAttribute: { attributeValue: string }
    colorAttribute: { attributeValue: string }
  }
}

interface Order {
  id: number
  paymentMethod: string
  status: string
  total: number
  items: OrderItem[]
  created_at: string
}

export function Profile() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchOrders() {
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

        const response = await api.get(`/api/orders/user/${userId}`)
        setOrders(response.data)
      } catch {
        toast({
          variant: 'destructive',
          description: 'Erro ao carregar pedidos. Tente novamente mais tarde.',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  return (
    <>
      <PageBreadcrumb
        title="Minha conta"
        pages={[{ text: 'Home', link: '/home' }, { text: 'Minha conta' }]}
      />
      <ContainerDefault className="py-24">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl font-semibold">Pedidos realizados</h2>
          {loading ? (
            <Skeleton className="h-20 w-full rounded-md" />
          ) : orders.length > 0 ? (
            <div className="flex flex-col gap-10">
              {orders.map((order) =>
                order.items.map((item) => (
                  <OrderCard key={item.id} order={order} item={item} />
                )),
              )}
            </div>
          ) : (
            <p className="text-muted-foreground">Nenhum pedido encontrado.</p>
          )}
        </div>
      </ContainerDefault>
    </>
  )
}
