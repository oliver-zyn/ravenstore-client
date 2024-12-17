import { ThemeProvider } from "@/components/theme-provider"
import { BaseRoutes } from "./routes/base-routes"

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BaseRoutes />
    </ThemeProvider>
  )
}