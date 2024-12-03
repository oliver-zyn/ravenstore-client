import heroImg from '@/assets/Hero Image.png'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-accent">
      <div className="m-auto max-w-screen-2xl h-[36rem] px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-4 items-center h-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-semibold">
              Fresh Arrivals Online
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Simplify team collaboration with CloudMaster, the ultimate tool
              for efficient project management.
            </p>
            <Button size="lg" className="mt-7">
              Ver coleção
              <ArrowRight />
            </Button>
          </div>
          <div className="relative justify-self-end self-end hidden md:flex">
            <span className="w-[26rem] h-[26rem] bottom-4 right-4 absolute rounded-full bg-accent-foreground/5"></span>
            <img
              src={heroImg}
              className="z-10 relative max-w-[22rem]"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  )
}