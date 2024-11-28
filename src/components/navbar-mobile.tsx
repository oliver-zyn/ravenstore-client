import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { Bird, Menu } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: "Camisetas",
    imgUrl: "https://example.com/category_camisetas.png"
  },
  {
    id: 2,
    name: "Moletons",
    imgUrl: "https://example.com/category_camisetas.png"
  },
  {
    id: 3,
    name: "Jaquetas",
    imgUrl: "https://example.com/category_camisetas.png"
  },
  {
    id: 4,
    name: "Regatas",
    imgUrl: "https://example.com/category_camisetas.png"
  }
]

export function NavbarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden mr-3">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-0" side="left">
        <SheetHeader className="px-6">
          <SheetTitle>
            <Bird className="h-6 w-6" />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col py-6">
          <a href="#" className="block space-y-1 p-6 no-underline outline-none transition-colors text-lg font-medium leading-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            Home
          </a>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="px-6 py-6 space-y-1 text-lg leading-none no-underline outline-none hover:no-underline hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                Categorias
              </AccordionTrigger>
              <AccordionContent>
                {categories.map(category => {
                  return (
                    <a key={category.id} href="#" className="block text-background bg-foreground space-y-1 p-6 no-underline outline-none transition-colors text-base font-medium leading-none hover:bg-accent-foreground hover:text-accent focus:bg-accent-foreground focus:text-accent-foreground">
                      {category.name}
                    </a>
                  )
                })}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <a href="#" className="block space-y-1 p-6 no-underline outline-none transition-colors text-lg font-medium leading-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            Sobre
          </a>
          <a href="#" className="block space-y-1 p-6 no-underline outline-none transition-colors text-lg font-medium leading-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            Contato
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}