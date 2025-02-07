import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { formatToBrazilianCurrency } from '@/lib/utils'
import { Button } from '../../../components/ui/button'
import { ShoppingBag } from 'lucide-react'

interface ProductCardProps {
  imgUrl: string
  title: string
  price: number
}

export function ProductCard({ imgUrl, title, price }: ProductCardProps) {
  return (
    <Card className="min-w-80 max-w-96 flex-1">
      <CardHeader className="pb-3">
        <div className="relative mb-5 flex items-center justify-center rounded-md bg-accent">
          <img src={imgUrl} />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <Button size="sm">
          Comprar
          <ShoppingBag />
        </Button>
        <span className="ml-4 text-sm">{formatToBrazilianCurrency(price)}</span>
      </CardContent>
    </Card>
  )
}
