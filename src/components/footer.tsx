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
          title="SUPPORT"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' },
          ]}
        />
        <ListLinks
          title="COMPANY"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' },
          ]}
        />
        <ListLinks
          title="SHOP"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' },
          ]}
        />
        <ListLinks
          title="ADDRESS"
          links={[
            { text: 'FAQ', href: '#' },
            { text: 'Terms of Use', href: '#' },
            { text: 'Privacy Policy', href: '#' },
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
