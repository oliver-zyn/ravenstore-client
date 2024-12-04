import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

import { Badge } from "./ui/badge"
import { formatToBrazilianCurrency } from "@/lib/utils"

interface ProductCardProps {
  imgUrl: string
  title: string
  inStock: boolean
  price: number
}

export function ProductCard({ imgUrl, title, inStock, price }: ProductCardProps) {
  return (
    <Card className="max-w-96 flex-1 min-w-80">
      <CardHeader className="pb-3">
        <div className="bg-accent flex items-center justify-center rounded-md mb-5">
          <img src={imgUrl} />
        </div>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <Badge variant="outline">{inStock ? "EM ESTOQUE" : "FORA DE ESTOQUE"}</Badge>
        <span className="text-sm ml-4">{formatToBrazilianCurrency(price)}</span>
      </CardContent>
    </Card>
  )
}