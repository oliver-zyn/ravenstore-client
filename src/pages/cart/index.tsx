import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SummaryCard } from './components/summary-card'
import { CartCard } from './components/cart-card'

export function Cart() {
  return (
    <>
      <PageBreadcrumb
        title="Carrinho"
        pages={[{ text: 'Home', link: '/home' }, { text: 'Carrinho' }]}
      />
      <ContainerDefault className="pb-44 pt-14">
        <h2 className="pb-5 text-xl font-semibold">Seu carrinho</h2>
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-28">
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
