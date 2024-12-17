import { Bird } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from 'react-router'

export function LoginForm() {
  return (
    <div className="flex flex-col gap-6">
      <form>
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
              <Input
                id="email"
                type="email"
                placeholder="m@exemplo.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Ao clicar em continuar, você concorda com nossos{' '}
        <a href="#">Termos de Uso</a> e <a href="#">Política de privacidade</a>.
      </div>
    </div>
  )
}
