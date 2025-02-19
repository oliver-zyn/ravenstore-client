import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router-dom'
import { useCart } from '@/hooks/use-cart'

interface CardCheckoutProps {
  onConfirm: () => Promise<void>
  isLoading: boolean
}

export function CardCheckout({
  onConfirm,
  isLoading
}: CardCheckoutProps) {
  const { cartItems, getCartTotal } = useCart()

  return (
    <Card className="max-w-auto w-full min-w-[300px] max-w-[500px] border border-input">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Seu pedido</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 py-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent"
              >
                <img src={item.imageUrl} alt={item.name} className="max-w-10" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                  {item.quantity}
                </span>
              </div>
            ))}
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/cart">Editar carrinho</Link>
          </Button>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span>R$ {getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Frete</span>
          <span>Grátis</span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>
          <span>R$ {getCartTotal().toFixed(2)}</span>
        </div>
      </CardContent>

      <CardFooter className="flex w-full flex-col gap-3">
        <Button
          className="w-full"
          size="lg"
          onClick={onConfirm}
          disabled={isLoading}
        >
          {isLoading ? 'Processando...' : 'Confirmar compra'}
        </Button>
      </CardFooter>
    </Card>
  )
}
