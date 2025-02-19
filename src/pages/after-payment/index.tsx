import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'

import successImg from '@/assets/success-order.svg'
import failImg from '@/assets/fail-order.svg'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'

export function AfterPayment() {
  const [searchParams] = useSearchParams()
  const isSuccessOrder = searchParams.get('status') === 'success' // Captura o status da URL

  const orderStatus = isSuccessOrder
    ? {
        title: 'Pedido bem-sucedido',
        image: successImg,
        message: 'Compra realizada com sucesso!',
        description:
          'Estamos preparando tudo para que sua compra chegue o mais rápido possível.',
        breadcrumbColor: 'bg-green-400/25',
      }
    : {
        title: 'Falha no pedido',
        image: failImg,
        message: 'Ops! Algo deu errado...',
        description:
          'Não conseguimos processar seu pagamento. Tente novamente mais tarde.',
        breadcrumbColor: 'bg-red-400/25',
      }

  return (
    <>
      <PageBreadcrumb
        title={orderStatus.title}
        pages={[{ text: 'Home', link: '/home' }, { text: orderStatus.title }]}
        className={orderStatus.breadcrumbColor}
      />
      <ContainerDefault className="py-36">
        <div className="flex flex-col items-center justify-center">
          <img
            src={orderStatus.image}
            className="w-full max-w-52"
            alt={orderStatus.title}
          />
          <h2 className="pt-3 text-center text-2xl font-semibold">
            {orderStatus.message}
          </h2>
          <p className="max-w-[400px] pb-10 pt-5 text-center text-muted-foreground">
            {orderStatus.description}
          </p>
          <Button size="lg" asChild>
            <Link to={"/profile"}>
              Ver meus pedidos
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </ContainerDefault>
    </>
  )
}
