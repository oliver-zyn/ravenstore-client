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

export function UserProfile() {
  return (
    <NavigationMenuLink
      className={cn(navigationMenuTriggerStyle(), 'px-2')}
      asChild
    >
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
          <DropdownMenuItem>
            <LogOut /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </NavigationMenuLink>
  )
}
