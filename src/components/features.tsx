import { Award, ShieldCheck, Truck } from "lucide-react";
import { FeatureCard } from "./feature-card";
import { ContainerDefault } from "./container-default";

export function Features() {
  return (
    <ContainerDefault className="mt-20">
      <div className="flex flex-wrap items-center justify-center mt-20 w-full gap-10">
        <FeatureCard icon={<Truck className="w-6 h-6" />} title="Frete Grátis" description="Atualize seu estilo hoje e aproveite frete grátis em todos os pedidos! Não perca!" />
        <FeatureCard icon={<Award className="w-6 h-6" />} title="Garantia de Satisfação" description="Compre com nossa garantia de satisfação: Ame ou receba seu dinheiro de volta." />
        <FeatureCard icon={<ShieldCheck className="w-6 h-6" />} title="Pagamento Seguro" description="Sua segurança é nossa prioridade. Seus pagamentos estão protegidos conosco." />
      </div>
    </ContainerDefault>
  )
}