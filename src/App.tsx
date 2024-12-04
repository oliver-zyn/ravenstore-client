import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { Features } from "./components/features"
import { BestSeller } from "./components/best-seller"
import { BrowseSection } from "./components/browse-section"

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Navbar />
      <HeroSection />
      <Features />
      <BestSeller />
      <BrowseSection />
    </ThemeProvider>
  )
}