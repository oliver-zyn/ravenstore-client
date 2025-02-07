import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SummaryCard } from './components/summary-card'
import { CartCard } from './components/cart-card'

export function Cart() {
  return (
    <>
      <PageBreadcrumb />
      <ContainerDefault className="pb-44 pt-14">
        <h2 className="pb-5 text-xl font-semibold">Seu carrinho</h2>
        <div className="flex items-start lg:flex-row flex-col justify-between lg:gap-28 gap-10">
          <div className="w-full">
            <Separator />
            <div className="flex max-h-[55vh] flex-col gap-y-6 overflow-auto border-b border-input py-6 pr-5 [&::-webkit-scrollbar-thumb]:bg-muted-foreground [&::-webkit-scrollbar]:w-2">
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
          </div>
          <SummaryCard />
        </div>
      </ContainerDefault>
    </>
  )
}
