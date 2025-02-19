import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Bird, Menu } from 'lucide-react'
import { api } from '@/lib/axios'
import { toast } from '@/hooks/use-toast'
import { Skeleton } from '@/components/ui/skeleton'

interface Category {
  id: number
  name: string
  imgUrl: string
}

export function NavbarMobile() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/api/categories')
        setCategories(response.data)
      } catch {
        toast({
          variant: 'destructive',
          description: 'Erro ao carregar categorias.',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-3 lg:hidden">
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
          <a
            href="#"
            className="block space-y-1 p-6 text-lg font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Home
          </a>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="space-y-1 px-6 py-6 text-lg leading-none no-underline outline-none hover:bg-accent hover:text-accent-foreground hover:no-underline focus:bg-accent focus:text-accent-foreground">
                Categorias
              </AccordionTrigger>
              <AccordionContent>
                {loading ? (
                  <Skeleton className="h-10 w-full rounded-md" />
                ) : categories.length > 0 ? (
                  categories.map((category) => (
                    <a
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="block space-y-1 bg-foreground p-6 text-base font-medium leading-none text-background no-underline outline-none transition-colors hover:bg-accent-foreground hover:text-accent focus:bg-accent-foreground focus:text-accent-foreground"
                    >
                      {category.name}
                    </a>
                  ))
                ) : (
                  <p className="p-6 text-sm text-muted-foreground">
                    Nenhuma categoria encontrada.
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <a
            href="#"
            className="block space-y-1 p-6 text-lg font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Sobre
          </a>
          <a
            href="#"
            className="block space-y-1 p-6 text-lg font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Contato
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
