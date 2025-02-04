import { ThemeProvider } from "@/components/theme-provider"
import { BaseRoutes } from "./routes/base-routes"
import { Toaster } from "./components/ui/toaster"

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BaseRoutes />

      <Toaster />
    </ThemeProvider>
  )
}