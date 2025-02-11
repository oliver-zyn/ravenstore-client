import { ContainerDefault } from '@/components/container-default'
import { PageBreadcrumb } from '@/components/page-breadcrumb'
import { FormCheckout } from './components/form-checkout'
import { CardCheckout } from './components/card-checkout'
import { AddressCardCheckout } from './components/address-card-checkout'

import { RadioGroup } from '@/components/ui/radio-group'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Plus } from 'lucide-react'

export function Checkout() {
  const [step, setStep] = useState<'list' | 'form'>('list')

  return (
    <>
      <PageBreadcrumb
        title="Checkout"
        pages={[
          { text: 'Home', link: '/home' },
          { text: 'Carrinho', link: '/cart' },
          { text: 'Checkout' },
        ]}
      />
      <ContainerDefault className="pb-44 pt-14">
        <h2 className="pb-5 text-xl font-semibold">Endereço de entrega</h2>
        <div className="flex items-start justify-between gap-40">
          <div className="flex w-full flex-col gap-10">
            {step === 'list' ? (
              <div>
                <RadioGroup
                  className="flex flex-col gap-5"
                  defaultValue="comfortable"
                >
                  <AddressCardCheckout
                    title="Rua 01 - 23302"
                    radioId="address1"
                    radioValue="address1"
                  />
                  <AddressCardCheckout
                    title="Rua 02 - 23302"
                    radioId="address2"
                    radioValue="address2"
                  />
                  <AddressCardCheckout
                    title="Rua 03 - 23302"
                    radioId="address3"
                    radioValue="address3"
                  />
                </RadioGroup>
                <Button className="mt-5" size="lg" onClick={() => setStep('form')}>
                  <Plus />
                  Adicionar novo endereço
                </Button>
              </div>
            ) : (
              <div>
                <FormCheckout />
                <Button
                  className="mt-5"
                  size="lg"
                  onClick={() => setStep('list')}
                >
                  <ArrowLeft />
                  Voltar para meus endereços
                </Button>
              </div>
            )}
          </div>
          <CardCheckout />
        </div>
      </ContainerDefault>
    </>
  )
}
