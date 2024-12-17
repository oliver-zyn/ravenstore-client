type Link = {
  text: string
  href: string
}

interface ListLinksProps {
  title: string
  links: Link[]
}

export function ListLinks({ title, links }: ListLinksProps) {
  return (
    <div className="flex flex-col gap-9 justify-self-center md:justify-self-start">
      <h3 className="font-semibold">{title}</h3>
      <div className="flex flex-col gap-4 text-muted-foreground">
        {links.map(({ text, href }, index) => (
          <a
            key={index}
            href={href}
            className="outline-none transition-colors hover:text-primary hover:underline focus:text-primary focus:underline"
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  )
}
