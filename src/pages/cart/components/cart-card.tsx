import { CartCounter } from '@/components/cart-counter'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'

interface CartCardProps {
  item: {
    id: number
    name: string
    imageUrl: string
    price: number
    quantity: number
    size: string
  }
}

export function CartCard({ item }: CartCardProps) {
  const { updateItemQuantity, removeFromCart } = useCart()

  return (
    <div className="flex flex-col justify-between sm:flex-row md:items-center">
      <div className="flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center bg-accent">
          <img src={item.imageUrl} alt={item.name} className="max-w-20" />
        </div>
        <div>
          <p className="font-semibold">{item.name}</p>
          <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>Tamanho:</span>
              <span>{item.size}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div>
          <span>R$ {item.price.toFixed(2)}</span>
        </div>
        <CartCounter
          onUpdateCounter={(quantity) => updateItemQuantity(item.id, quantity)}
          productCount={item.quantity}
          size="lg"
        />
        <Button
          variant="secondary"
          size="icon"
          onClick={() => removeFromCart(item.id)}
        >
          <X />
        </Button>
      </div>
    </div>
  )
}
