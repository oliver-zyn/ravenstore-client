import { Award, ShieldCheck, Truck } from "lucide-react";
import { FeatureCard } from "./feature-card";
import { ContainerDefault } from "./container-default";

export function Features() {
  return (
    <ContainerDefault className="mt-20">
      <div className="flex flex-wrap items-center justify-center mt-20 w-full">
        <FeatureCard icon={<Truck className="w-6 h-6" />} title="Free Shipping" description="Upgrade your style today and get FREE shipping on all orders! Don't miss out." />
        <FeatureCard icon={<Award className="w-6 h-6" />} title="Satisfaction Guarantee" description="Shop confidently with our Satisfaction Guarantee: Love it or get a refund." />
        <FeatureCard icon={<ShieldCheck className="w-6 h-6" />} title="Secure Payment" description="Your security is our priority. Your payments are secure with us." />
      </div>
    </ContainerDefault>
  )
}