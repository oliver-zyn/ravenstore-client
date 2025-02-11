import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function FormCheckout() {
  return (
    <form>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label htmlFor="zipcode">CEP</Label>
          <Input id="zipcode" />
        </div>
        <div>
          <Label htmlFor="city">Cidade</Label>
          <Input id="city" />
        </div>
        <div>
          <Label htmlFor="state">Estado</Label>
          <Input id="state" max="2" />
        </div>
        <div>
          <Label htmlFor="street">Rua</Label>
          <Input id="street" />
        </div>
        <div>
          <Label htmlFor="number">Número</Label>
          <Input id="number" type="number" />
        </div>
        <div>
          <Label htmlFor="complement">Complemento</Label>
          <Input id="complement" />
        </div>
      </div>
    </form>
  )
}
