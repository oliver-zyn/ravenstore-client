import { BaseRoutes } from './routes/base-routes'
import { Toaster } from './components/ui/toaster'
import { AuthProvider } from './contexts/auth-context'
import { CartProvider } from './contexts/cart-context'

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BaseRoutes />

        <Toaster />
      </CartProvider>
    </AuthProvider>
  )
}
