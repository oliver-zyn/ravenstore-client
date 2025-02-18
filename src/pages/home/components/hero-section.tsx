import heroImg from '@/assets/hero-image.png'
import { Button } from '../../../components/ui/button'
import { ArrowRight } from 'lucide-react'
import { ContainerDefault } from '../../../components/container-default'
import { Link } from 'react-router'

export function HeroSection() {
  return (
    <section className="bg-accent">
      <ContainerDefault className="h-[36rem]">
        <div className="grid h-full items-center gap-4 md:grid-cols-2">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-semibold">
              Novidades Imperdíveis Online
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Descubra Nossa Nova Coleção Hoje.
            </p>
            <Button size="lg" className="mt-16" asChild>
              <Link to="/products">
                Ver coleção
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative hidden self-end justify-self-end md:flex">
            <span className="absolute bottom-4 right-4 h-[26rem] w-[26rem] rounded-full bg-accent-foreground/5"></span>
            <img src={heroImg} className="relative z-10 max-w-[22rem]" />
          </div>
        </div>
      </ContainerDefault>
    </section>
  )
}
