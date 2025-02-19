/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/axios'
import { useForm } from 'react-hook-form'
import { toast } from '@/hooks/use-toast'
import { ErrorMessage } from '@/components/error-message-input' // Importando o mesmo componente usado no SignUp

interface FormValues {
  state: string
  city: string
  street: string
  number: string
  complement: string
  zipCode: string
}

interface FormCheckoutProps {
  onAddressAdded: () => void
}

export function FormCheckout({ onAddressAdded }: FormCheckoutProps) {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>()

  async function handleSubmitForm(data: FormValues) {
    let response

    try {
      response = await api.post('/api/address', data)
    } catch (err: any) {
      response = err.response || { status: 500 }
    }

    if (response?.status === 200 || response?.status === 201) {
      toast({
        variant: 'success',
        description: 'Endereço cadastrado com sucesso!',
      })

      reset()
      onAddressAdded()
    } else {
      const validationErrors = response.data?.validationErrors

      if (validationErrors) {
        Object.entries(validationErrors).forEach(([field, message]) => {
          setError(field as keyof FormValues, {
            type: 'manual',
            message: message as string,
          })
        })
      } else {
        toast({
          variant: 'destructive',
          description:
            'Ops! Algo deu errado na conexão com o servidor. Tente novamente mais tarde',
        })
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label htmlFor="zipCode">CEP</Label>
          <Input
            id="zipCode"
            {...register('zipCode', { required: 'CEP é obrigatório' })}
            className={errors.zipCode ? 'border-red-500' : ''}
          />
          <ErrorMessage message={errors.zipCode?.message} />
        </div>
        <div>
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            {...register('city', { required: 'Cidade é obrigatória' })}
            className={errors.city ? 'border-red-500' : ''}
          />
          <ErrorMessage message={errors.city?.message} />
        </div>
        <div>
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            maxLength={2}
            {...register('state', { required: 'Estado é obrigatório' })}
            className={errors.state ? 'border-red-500' : ''}
          />
          <ErrorMessage message={errors.state?.message} />
        </div>
        <div>
          <Label htmlFor="street">Rua</Label>
          <Input
            id="street"
            {...register('street', { required: 'Rua é obrigatória' })}
            className={errors.street ? 'border-red-500' : ''}
          />
          <ErrorMessage message={errors.street?.message} />
        </div>
        <div>
          <Label htmlFor="number">Número</Label>
          <Input
            id="number"
            type="number"
            {...register('number', { required: 'Número é obrigatório' })}
            className={errors.number ? 'border-red-500' : ''}
          />
          <ErrorMessage message={errors.number?.message} />
        </div>
        <div>
          <Label htmlFor="complement">Complemento</Label>
          <Input id="complement" {...register('complement')} />
        </div>
      </div>
      <Button type="submit" className="mt-5 w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Salvando...' : 'Salvar Endereço'}
      </Button>
    </form>
  )
}
