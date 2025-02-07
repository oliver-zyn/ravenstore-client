import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

import { LogOut, MapPinHouse, ShoppingBag, User } from 'lucide-react'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { useNavigate } from 'react-router'
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/use-auth'

export function UserProfile() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  function handleLogout() {
    logout()

    toast({
      variant: 'success',
      description: 'Logout realizado com sucesso!',
    })

    navigate('/login')
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), 'cursor-pointer px-2')}
        >
          <User className="h-6 w-6" />
        </NavigationMenuLink>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User /> Perfil
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MapPinHouse /> Endereços
        </DropdownMenuItem>
        <DropdownMenuItem>
          <ShoppingBag /> Compras
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
