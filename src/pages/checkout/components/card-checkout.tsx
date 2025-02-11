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
import imgEx from '@/assets/product1.png'

export function CardCheckout() {
  return (
    <Card className="max-w-auto w-full min-w-[300px] max-w-[500px] border border-input">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Seu pedido</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 text-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 py-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <img src={imgEx} alt="" className="max-w-10" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <img src={imgEx} alt="" className="max-w-10" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <img src={imgEx} alt="" className="max-w-10" />
            </div>
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link to="/cart">Editar carrinho</Link>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total</span>
          <span>R$ 90,00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Frete</span>
          <span>Grátis</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Descontos</span>
          <span>-R$ 40,00</span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center justify-between">
          <span>Total</span>
          <span>R$ 50,00</span>
        </div>
      </CardContent>
      <CardFooter className="flex w-full flex-col gap-3">
        <Button className="w-full" size="lg" asChild>
          <Link to="/after-payment">Confirmar compra</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
