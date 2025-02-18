import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Input } from './ui/input'
import { Bird, SearchIcon } from 'lucide-react'
import { NavbarMobile } from './navbar-mobile'
import { ContainerDefault } from './container-default'
import { CartSheet } from './cart-sheet'
import { Link } from 'react-router'
import { Button } from './ui/button'
import { UserProfile } from './user-profile'
import { useAuth } from '@/hooks/use-auth'

interface Category {
  id: number
  name: string
}

export function Navbar() {
  const { isAuthenticated } = useAuth()
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await api.get('/api/categories')
        setCategories(response.data)
      } catch (error) {
        console.error('Erro ao buscar categorias:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <ContainerDefault className="flex h-20 w-full items-center justify-between">
      <NavbarMobile />

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={'mr-6 hidden lg:flex'} asChild>
              <Link to="/">
                <Bird className="h-6 w-6" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex w-[400px] flex-col gap-3 p-2 md:w-[500px] lg:w-[200px]">
                {categories.map((category) => (
                  <NavigationMenuLink
                    key={category.id}
                    className="block cursor-pointer space-y-1 rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    asChild
                  >
                    <Link to={`/products?categoryIds=${category.id}`}>
                      {category.name}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className={navigationMenuTriggerStyle()}
            >
              Contato
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <div className="relative">
              <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <Input type="text" placeholder="Buscar..." className="pr-10" />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CartSheet />
          </NavigationMenuItem>
          {isAuthenticated ? (
            <NavigationMenuItem>
              <UserProfile />
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign in</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </NavigationMenuItem>
            </>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </ContainerDefault>
  )
}
