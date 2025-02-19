import { api } from '@/lib/axios'

interface OrderItem {
  productSkuId: number
  quantity: number
}

interface CreateOrderRequest {
  paymentMethod: 'Credit Card' | 'Debit Card' | 'Cash'
  status: 'Pending'
  shippingAddressId: number
  orderItems: OrderItem[]
}

export const OrderService = {
  async createOrder(orderData: CreateOrderRequest) {
    return api.post('/api/orders/checkout', orderData)
  },
}
