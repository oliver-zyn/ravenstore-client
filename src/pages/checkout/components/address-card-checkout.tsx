import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface AddressCardCheckoutProps {
  title: string
  radioId: string
  radioValue: string
}

export function AddressCardCheckout({
  title,
  radioId,
  radioValue,
}: AddressCardCheckoutProps) {
  return (
    <label htmlFor={radioId} className="w-full cursor-pointer">
      <Card className="flex w-full items-center border border-input transition hover:bg-accent">
        <div className="pl-6">
          <RadioGroupItem value={radioValue} id={radioId} />
        </div>
        <div>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">{title}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>Pato Branco, Paraná - CEP 98472384</p>
          </CardContent>
        </div>
      </Card>
    </label>
  )
}
