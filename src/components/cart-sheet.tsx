import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet'

import { ShoppingCartIcon } from 'lucide-react'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { CartSheetCard } from './cart-sheet-card'
import { useNavigate } from 'react-router'

export function CartSheet() {
  const navigate = useNavigate()

  function handleRedirectToCart() {
    navigate('/cart')
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), 'cursor-pointer px-2')}
        >
          <ShoppingCartIcon className="h-6 w-6" />
        </NavigationMenuLink>
      </SheetTrigger>
      <SheetContent className="px-0" side="right">
        <SheetHeader className="px-6 text-left">
          <SheetTitle>Carrinho de compras</SheetTitle>
        </SheetHeader>
        <div className="mx-6 flex max-h-[70vh] flex-col gap-y-6 overflow-auto border-b border-input py-6 [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar]:w-2">
          <CartSheetCard />
          <CartSheetCard />
          <CartSheetCard />
          <CartSheetCard />
        </div>
        <SheetFooter className="absolute bottom-0 flex w-full flex-col justify-center p-6 sm:flex-col">
          <Separator />
          <div className="flex items-center justify-between py-6">
            <span>Total</span>
            <span>R$ 90,00</span>
          </div>
          <SheetClose asChild>
            <Button className="w-full" size="lg" onClick={handleRedirectToCart}>
              Confirmar compra
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
