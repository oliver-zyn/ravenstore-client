import { BestSeller } from "@/components/best-seller";
import { BrowseSection } from "@/components/browse-section";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";

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