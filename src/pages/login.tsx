import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { Bird } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router'
import { ErrorMessage } from '@/components/error-message-input'
import { AuthService } from '@/service/AuthService'
import { useToast } from '@/hooks/use-toast'

type FormValues = {
  email: string
  password: string
}

export function LoginPage() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormValues>()

  async function onSubmit(data: FormValues) {
    const response = await AuthService.login(data)

    if (response?.status === 200) {
      toast({
        variant: "success",
        description: "Login realizado com sucesso!",
      })

      setTimeout(() => {
        navigate('/home')
      }, 2000);
    } else if (response?.status === 401) {
      toast({
        variant: "destructive",
        description: "Email ou senha inválidos",
      })

      setError('email', {
        type: 'manual',
        message: "",
      });

      setError('password', {
        type: 'manual',
        message: "",
      });
    } else {
      toast({
        variant: "destructive",
        description: "Ops! Algo deu errado na conexão com o servidor. Tente novamente mais tarde",
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
            <h1 className="text-xl font-bold">Bem vindo a Ravenstore!</h1>
            <div className="text-center text-sm">
              Ainda não possui uma conta?{' '}
              <Link to="/signup" className="underline underline-offset-4">
                Cadastre-se
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@exemplo.com"
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
                  })}
                  className={errors.password ? 'border-red-500' : ''}
                />
                <ErrorMessage message={errors.password?.message} />
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? 'Entrando...' : 'Login'}
            </Button>
          </div>
        </div>

        {errors.root && (
          <div className="mt-4 text-sm text-red-500">{errors.root.message}</div>
        )}
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Ao clicar em login, você concorda com nossos{' '}
        <a href="#">Termos de Uso</a> e <a href="#">Política de privacidade</a>.
      </div>
    </div>
  )
}
