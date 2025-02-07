import { Award, ShieldCheck, Truck } from 'lucide-react'
import { FeatureCard } from './feature-card'
import { ContainerDefault } from '../../../components/container-default'

export function Features() {
  return (
    <ContainerDefault className="mt-20">
      <div className="mt-20 flex w-full flex-wrap items-center justify-center gap-10">
        <FeatureCard
          icon={<Truck className="h-6 w-6" />}
          title="Frete Grátis"
          description="Atualize seu estilo hoje e aproveite frete grátis em todos os pedidos! Não perca!"
        />
        <FeatureCard
          icon={<Award className="h-6 w-6" />}
          title="Garantia de Satisfação"
          description="Compre com nossa garantia de satisfação: Ame ou receba seu dinheiro de volta."
        />
        <FeatureCard
          icon={<ShieldCheck className="h-6 w-6" />}
          title="Pagamento Seguro"
          description="Sua segurança é nossa prioridade. Seus pagamentos estão protegidos conosco."
        />
      </div>
    </ContainerDefault>
  )
}
