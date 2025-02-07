import { BaseRoutes } from "./routes/base-routes"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./contexts/auth-context"

export function App() {
  return (
    <AuthProvider>
      <BaseRoutes />

      <Toaster />
    </AuthProvider>
  )
}