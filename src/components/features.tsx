import { Award, ShieldCheck, Truck } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function Features() {
  return (
    <section className="m-auto max-w-screen-2xl mt-20 px-4 md:px-6">
      <div className="grid md:grid-cols-3 gap-4 md:gap-1 w-full justify-items-center">
        <FeatureCard icon={<Truck className="w-6 h-6" />} title="Free Shipping" description="Upgrade your style today and get FREE shipping on all orders! Don't miss out." />
        <FeatureCard icon={<Award className="w-6 h-6" />} title="Satisfaction Guarantee" description="Shop confidently with our Satisfaction Guarantee: Love it or get a refund." />
        <FeatureCard icon={<ShieldCheck className="w-6 h-6" />} title="Secure Payment" description="Your security is our priority. Your payments are secure with us." />
      </div>
    </section>
  )
}