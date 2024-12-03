import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="max-w-96">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center bg-accent w-12 h-12 rounded-full mb-3">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-primary/80">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
