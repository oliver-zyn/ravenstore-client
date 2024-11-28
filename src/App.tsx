import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "./components/navbar"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  )
}