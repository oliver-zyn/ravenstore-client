import { ContainerDefault } from "./container-default";
import { ProductCard } from "./product-card";

import productImg from '@/assets/product1.png'

export function BestSeller() {
  return (
    <ContainerDefault className="mt-44">
      <div className="flex items-center flex-col">
        <div>
          <h2 className="text-sm text-primary/60 font-semibold">SHOP NOW</h2>
          <h1 className="text-2xl font-bold mt-2">Best Selling</h1>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-20">
        <ProductCard imgUrl={productImg} title="Classic Monochrome Tees" price={35.00} />
        <ProductCard imgUrl={productImg} title="Monochromatic Wardrobe" price={35.00} />
        <ProductCard imgUrl={productImg} title="Essential Neutrals" price={35.00} />
        <ProductCard imgUrl={productImg} title="UTRAANET Black" price={35.00} />
      </div>
    </ContainerDefault>
  )
}