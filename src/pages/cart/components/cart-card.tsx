import imgEx from '@/assets/product1.png'
import { CartCounter } from '@/components/cart-counter'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'
import { useState } from 'react'

export function CartCard() {
  const [productCount, setProductCount] = useState(1)

  function handleUpdateCounter(productCount: number) {
    setProductCount(productCount)
  }

  return (
    <div className="flex flex-col justify-between sm:flex-row md:items-center">
      <div className="flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center bg-accent">
          <img src={imgEx} alt="" className="max-w-20" />
        </div>
        <div>
          <p className="font-semibold">Raw Black T-Shirt Lineup</p>
          <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Cor: </span>
              <span className="block h-3 w-3 rounded-full bg-black"></span>
            </div>
            <Separator className="w-3 bg-muted-foreground" />
            <div className="flex items-center gap-2">
              <span>Tamanho:</span>
              <span>M</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <span>R$ 75.00</span>
        </div>
        <CartCounter
          onUpdateCounter={handleUpdateCounter}
          productCount={productCount}
          size="lg"
        />
        <Button variant="secondary" size="icon">
          <X />
        </Button>
      </div>
    </div>
  )
}
