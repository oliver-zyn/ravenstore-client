import imgEx from '@/assets/product1.png'
import { Badge } from './ui/badge'
import { X } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { CartCounter } from './cart-counter'

export function CartSheetCard() {
  const [productCount, setProductCount] = useState(1)

  function handleUpdateCounter(productCount: number) {
    setProductCount(productCount)
  }

  return (
    <div className="flex items-center gap-5">
      <div className="relative flex h-20 w-20 items-center justify-center bg-accent">
        <img src={imgEx} alt="" className="max-w-16" />
        <Button variant="link" size="small" className="absolute right-0 top-0">
          <X className="h-1 w-1" />
        </Button>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <p>Raw Black T-Shirt Lineup</p>
          <Badge variant="secondary">M</Badge>
        </div>
        <div className="flex items-center gap-5 pt-3">
          <CartCounter productCount={productCount} onUpdateCounter={handleUpdateCounter} size="normal" />
          <span className="text-sm">R$ 40,00</span>
        </div>
      </div>
    </div>
  )
}
