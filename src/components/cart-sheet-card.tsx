import { Badge } from './ui/badge'
import { X } from 'lucide-react'
import { Button } from './ui/button'
import { CartCounter } from './cart-counter'
import { useCart } from '@/hooks/use-cart'

interface CartSheetCardProps {
  item: {
    id: number
    name: string
    imageUrl: string
    price: number
    quantity: number
    size: string
  }
}

export function CartSheetCard({ item }: CartSheetCardProps) {
  const { updateItemQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center gap-5">
      <div className="relative flex h-20 w-20 items-center justify-center bg-accent">
        <img src={item.imageUrl} alt={item.name} className="max-w-16" />
        <Button
          variant="link"
          size="small"
          className="absolute right-0 top-0"
          onClick={() => removeFromCart(item.id)}
        >
          <X className="h-1 w-1" />
        </Button>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <p>{item.name}</p>
          <Badge variant="secondary">{item.size}</Badge>
        </div>
        <div className="flex items-center gap-5 pt-3">
          <CartCounter
            productCount={item.quantity}
            onUpdateCounter={(value) => updateItemQuantity(item.id, value)}
            size="normal"
          />
          <span className="text-sm">R$ {item.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}
