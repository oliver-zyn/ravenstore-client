import { ArrowRight } from "lucide-react";
import { ContainerDefault } from "./container-default";
import { Button } from "./ui/button";

import productImg from '@/assets/product2.png'

export function BrowseSection() {
  return (
    <section className="bg-accent py-36 md:py-10 mt-44">
      <ContainerDefault >
        <div className="grid md:grid-cols-2 gap-4 items-center justify-center">
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-3xl font-semibold">
              Explore Nossos Melhores Produtos!
            </h1>
            <p className="mt-5 text-base text-muted-foreground">
              Entre em um mundo de estilo e descubra nossa diversa coleção de categorias de roupas.
            </p>
            <Button size="lg" className="mt-16">
              Ver coleção
              <ArrowRight />
            </Button>
          </div>
          <div className="justify-self-end hidden md:flex">
            <img
              src={productImg}
              className="max-w-md"
            />
          </div>
        </div>
      </ContainerDefault>
    </section>
  )
}