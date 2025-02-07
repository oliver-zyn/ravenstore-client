import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function SummaryCard() {
  return (
    <Card className="min-w-[300px] lg:max-w-[380px] max-w-auto w-full border border-input">
      <CardHeader>
        <CardTitle className="text-xl">Resumo da compra</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5 pt-4 text-sm">
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
        <Button className="w-full" size="lg">
          Confirmar compra
        </Button>
        <Button className="w-full" size="lg" variant="link">
          Continuar comprando
        </Button>
      </CardFooter>
    </Card>
  )
}
