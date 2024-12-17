import { Bird } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Link, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from './error-message-input'
import { Input } from './ui/input'

type FormValues = {
  name: string
  cpf: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUpForm() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setError,
  } = useForm<FormValues>()

  const password = watch('password')

  async function onSubmit(data: FormValues) {
    try {
      console.log('Dados enviados:', data)
      navigate('/login')
    } catch {
      setError('root', {
        type: 'manual',
        message: 'Erro ao cadastrar usuário!',
      })
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              to="/home"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex items-center justify-center rounded-md">
                <Bird className="h-8 w-8" />
              </div>
            </Link>
            <h1 className="text-xl font-bold">Crie sua conta</h1>
            <div className="text-center text-sm">
              Já possui uma conta?{' '}
              <Link to="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome completo</Label>
              <div>
                <Input
                  id="name"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className={errors.name ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.name?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="cpf">CPF</Label>
              <div>
                <Input
                  id="cpf"
                  {...register('cpf', {
                    required: 'CPF é obrigatório',
                    pattern: {
                      value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                      message: 'CPF inválido',
                    },
                  })}
                  className={errors.cpf ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.cpf?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div>
                <Input
                  id="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: 'Email inválido',
                    },
                  })}
                  className={errors.email ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.email?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <div>
                <Input
                  id="password"
                  type="password"
                  {...register('password', {
                    required: 'Senha é obrigatória',
                    minLength: {
                      value: 6,
                      message: 'A senha deve ter no mínimo 6 caracteres',
                    },
                  })}
                  className={errors.password ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.password?.message} />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirme sua senha</Label>
              <div>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register('confirmPassword', {
                    required: 'Confirme sua senha',
                    validate: (value) =>
                      value === password || 'As senhas não coincidem',
                  })}
                  className={errors.confirmPassword ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.confirmPassword?.message} />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Cadastrando...' : 'Cadastrar-se'}
            </Button>
          </div>
        </div>
        {errors.root && (
          <div className="mt-4 text-sm text-red-500">{errors.root.message}</div>
        )}
      </form>
    </div>
  )
}
