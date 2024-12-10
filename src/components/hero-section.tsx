import heroImg from '@/assets/hero-image.png'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { ContainerDefault } from './container-default'

export function HeroSection() {
  return (
    <section className="bg-accent">
      <ContainerDefault className="h-[36rem]">
        <div className="grid md:grid-cols-2 gap-4 items-center h-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-semibold">
              Fresh Arrivals Online
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Discover Our Newest Collection Today.
            </p>
            <Button size="lg" className="mt-16">
              Ver coleção
              <ArrowRight />
            </Button>
          </div>
          <div className="relative justify-self-end self-end hidden md:flex">
            <span className="w-[26rem] h-[26rem] bottom-4 right-4 absolute rounded-full bg-accent-foreground/5"></span>
            <img
              src={heroImg}
              className="z-10 relative max-w-[22rem]"
            />
          </div>
        </div>
      </ContainerDefault>
    </section>
  )
}