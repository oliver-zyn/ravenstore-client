import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'

export function AfterPayment() {
  return (
    <>
      <PageBreadcrumb
        title="Compra realizada com sucesso"
        pages={[
          { text: 'Home', link: '/home' },
          { text: 'Pedido realizado' },
        ]}
      />
      <ContainerDefault className="pb-44 pt-14">aaa</ContainerDefault>
    </>
  )
}
