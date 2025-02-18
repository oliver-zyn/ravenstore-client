import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { formatToBrazilianCurrency } from '@/lib/utils'
import { Button } from './ui/button'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router'

interface ProductCardProps {
  id: number
  imgUrl: string
  title: string
  price: number
}

export function ProductCard({ id, imgUrl, title, price }: ProductCardProps) {
  return (
    <Card className="w-full min-w-80 max-w-96 flex-1 shadow-none">
      <CardHeader className="pb-3 pt-0">
        <div className="relative mb-5 flex items-center justify-center rounded-md bg-accent">
          <img className="w-full max-w-72" src={imgUrl} />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <Button size="sm" asChild>
          <Link to={`/product/${id}`}>
            Comprar
            <ShoppingBag />
          </Link>
        </Button>
        <span className="ml-4 text-sm">{formatToBrazilianCurrency(price)}</span>
      </CardContent>
    </Card>
  )
}
