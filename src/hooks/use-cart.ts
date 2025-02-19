import { CartContext } from '@/contexts/cart-context'
import { useContext } from 'react'

export function useCart() {
  const context = useContext(CartContext)

  return context
}
