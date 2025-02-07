import { ContainerDefault } from '../../../components/container-default'
import { ProductCard } from './product-card'

import productImg from '@/assets/product1.png'

export function BestSeller() {
  return (
    <ContainerDefault className="mt-44">
      <div className="flex flex-col items-center">
        <div>
          <h2 className="text-sm font-semibold text-primary/60">
            COMPRE AGORA
          </h2>
          <h1 className="mt-2 text-2xl font-bold">Mais Vendidos</h1>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center">
        <ProductCard
          imgUrl={productImg}
          title="Classic Monochrome Tees"
          price={35.0}
        />
        <ProductCard
          imgUrl={productImg}
          title="Monochromatic Wardrobe"
          price={35.0}
        />
        <ProductCard
          imgUrl={productImg}
          title="Essential Neutrals"
          price={35.0}
        />
        <ProductCard imgUrl={productImg} title="UTRAANET Black" price={35.0} />
      </div>
    </ContainerDefault>
  )
}
