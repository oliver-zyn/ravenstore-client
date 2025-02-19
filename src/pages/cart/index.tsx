import { useCart } from '@/hooks/use-cart'
import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { Separator } from '@/components/ui/separator'
import { SummaryCard } from './components/summary-card'
import { CartCard } from './components/cart-card'

export function Cart() {
  const { cartItems } = useCart()

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
              {cartItems.length > 0 ? (
                cartItems.map((item) => <CartCard key={item.id} item={item} />)
              ) : (
                <p className="text-muted-foreground">
                  Seu carrinho está vazio.
                </p>
              )}
            </div>
          </div>
          <SummaryCard />
        </div>
      </ContainerDefault>
    </>
  )
}
