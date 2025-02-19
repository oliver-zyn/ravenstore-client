import { useCart } from '@/hooks/use-cart'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Link } from 'react-router'

export function SummaryCard() {
  const { cartItems, getCartTotal } = useCart()

  return (
    <Card className="max-w-auto w-full min-w-[300px] border border-input lg:max-w-[380px]">
      <CardHeader>
        <CardTitle className="text-xl">Resumo da compra</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pt-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total</span>
          <span>R$ {getCartTotal().toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Frete</span>
          <span>Grátis</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Descontos</span>
          <span>-R$ 0,00</span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>R$ {getCartTotal().toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex w-full flex-col gap-3">
        <Button
          className="w-full"
          size="lg"
          disabled={cartItems.length === 0}
          asChild
        >
          <Link to="/checkout">Confirmar compra</Link>
        </Button>
        <Button className="w-full" size="lg" variant="link">
          <Link to="/products">Continuar comprando</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
