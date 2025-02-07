import { BestSeller } from '@/pages/home/components/best-seller'
import { BrowseSection } from '@/pages/home/components/browse-section'
import { Features } from '@/pages/home/components/features'
import { HeroSection } from '@/pages/home/components/hero-section'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <BestSeller />
      <BrowseSection />
    </>
  )
}
