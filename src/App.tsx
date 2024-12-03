import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { Features } from "./components/features"

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar />
      <HeroSection />
      <Features />
    </ThemeProvider>
  )
}