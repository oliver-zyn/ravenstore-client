import { ContainerDefault } from './container-default'
import { ListLinks } from './list-links'

import visaIcon from '@/assets/visa-icon.svg'
import amexIcon from '@/assets/amex-icon.svg'
import mastercardIcon from '@/assets/mastercard-icon.svg'
import { Separator } from './ui/separator'

export function Footer() {
  return (
    <ContainerDefault className="my-20 flex flex-col">
      <div className="grid grid-cols-2 items-center gap-y-20 md:grid-cols-4">
        <ListLinks
          title="SUPORTE"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Termos de uso', href: '#' },
            { text: 'Política de privacidade', href: '#' },
          ]}
        />
        <ListLinks
          title="EMPRESA"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Termos de uso', href: '#' },
            { text: 'Política de privacidade', href: '#' },
          ]}
        />
        <ListLinks
          title="LOJA"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Termos de uso', href: '#' },
            { text: 'Política de privacidade', href: '#' },
          ]}
        />
        <ListLinks
          title="ENDEREÇO"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Termos de uso', href: '#' },
            { text: 'Política de privacidade', href: '#' },
          ]}
        />
      </div>
      <Separator className="my-20" />
      <div className="flex items-center justify-center gap-6 saturate-0">
        <img src={mastercardIcon} alt="mastercard" />
        <img src={amexIcon} alt="amex" />
        <img src={visaIcon} alt="visa" />
      </div>
    </ContainerDefault>
  )
}
