import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { ShoppingCartIcon } from 'lucide-react'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { cn } from '@/lib/utils'

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), 'px-2 cursor-pointer')}
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </NavigationMenuLink>
      </SheetTrigger>
      <SheetContent className="px-0" side="right">
        <SheetHeader className="px-6">
          <SheetTitle>Carrinho de compras</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col p-6">
          <h1>carrinho</h1>
        </div>
      </SheetContent>
    </Sheet>
  )
}
