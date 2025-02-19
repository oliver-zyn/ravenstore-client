import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroupItem } from '@/components/ui/radio-group'

interface AddressCardCheckoutProps {
  state: string
  city: string
  street: string
  number: string
  complement?: string
  zipCode: string
  radioId: string
  radioValue: string
  onSelect: () => void
}

export function AddressCardCheckout({
  state,
  city,
  street,
  number,
  zipCode,
  radioId,
  radioValue,
  onSelect,
}: AddressCardCheckoutProps) {
  return (
    <label htmlFor={radioId} className="w-full cursor-pointer">
      <Card className="flex w-full items-center border border-input transition hover:bg-accent">
        <div className="pl-6">
          <RadioGroupItem value={radioValue} id={radioId} onClick={onSelect} />
        </div>
        <div>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">
              {street} - {number}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p>{city}, {state} - {zipCode}</p>
          </CardContent>
        </div>
      </Card>
    </label>
  )
}
