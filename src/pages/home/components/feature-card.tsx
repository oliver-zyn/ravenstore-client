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
    <Card className="max-w-96 min-w-80 flex-1 shadow-none">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-center bg-accent w-12 h-12 rounded-full mb-3">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}
