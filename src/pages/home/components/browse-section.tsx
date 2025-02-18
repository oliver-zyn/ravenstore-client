import { ArrowRight } from 'lucide-react'
import { ContainerDefault } from '../../../components/container-default'
import { Button } from '../../../components/ui/button'

import productImg from '@/assets/product2.png'

export function BrowseSection() {
  return (
    <section className="mt-44 mb-32 py-36 md:py-10">
      <ContainerDefault>
        <div className="grid items-center justify-center gap-4 md:grid-cols-2">
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-3xl font-semibold">
              Explore Nossos Melhores Produtos!
            </h1>
            <p className="mt-5 text-base text-muted-foreground">
              Entre em um mundo de estilo e descubra nossa diversa coleção de
              categorias de roupas.
            </p>
            <Button size="lg" className="mt-16">
              Ver coleção
              <ArrowRight />
            </Button>
          </div>
          <div className="hidden justify-self-end md:flex">
            <img src={productImg} className="max-w-md" />
          </div>
        </div>
      </ContainerDefault>
    </section>
  )
}
