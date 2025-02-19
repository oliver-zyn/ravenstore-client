import { Badge } from '@/components/ui/badge'

interface OrderCardProps {
  order: {
    id: number
    paymentMethod: string
    status: string
    created_at: string
  }
  item: {
    id: number
    quantity: number
    price: number
    productSku: {
      id: number
      imageUrl: string
      price: number
      sizeAttribute: { attributeValue: string }
      colorAttribute: { attributeValue: string }
    }
  }
}

export function OrderCard({ order, item }: OrderCardProps) {
  return (
    <div className="flex justify-between border-b border-gray-200 pb-5">
      <div className="flex items-center gap-5">
        <div className="flex h-24 w-24 items-center justify-center rounded-lg bg-accent">
          <img src={item.productSku.imageUrl} alt="" className="max-w-20" />
        </div>
        <div>
          <p className="font-semibold">{`Pedido #${order.id}`}</p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Tamanho:</span>{' '}
            {item.productSku.sizeAttribute.attributeValue} -{' '}
            <span className="font-medium">Cor:</span>{' '}
            {item.productSku.colorAttribute.attributeValue}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Quantidade:</span> {item.quantity}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Data do Pedido:</span>{' '}
            {new Date(order.created_at).toLocaleDateString()}
          </p>
          <p className="mt-2 text-sm font-semibold">
            R$ {item.price.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <Badge variant="secondary">
          {order.status === 'Pending' ? 'Pendente' : 'Concluído'}
        </Badge>
      </div>
    </div>
  )
}
