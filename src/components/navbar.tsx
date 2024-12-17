import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "./ui/input"
import { Bird, SearchIcon, User } from "lucide-react"
//import { ModeToggle } from "./mode-toggle"
import { NavbarMobile } from "./navbar-mobile"
import { cn } from "@/lib/utils"
import { ContainerDefault } from "./container-default"
import { Cart } from "./cart"
import { Link } from "react-router"
import AuthService from "@/service/AuthService"
import { Button } from "./ui/button"

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

export function Navbar() {
  const isAuthenticated = AuthService.isAuthenticated()

  return (
    <ContainerDefault className="flex h-20 w-full items-center justify-between">
      <NavbarMobile />

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem >
            <NavigationMenuLink href="/" className={"mr-6 hidden lg:flex"}>
              <Bird className="h-6 w-6"/>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col w-[400px] gap-3 p-2 md:w-[500px] lg:w-[200px]">
                {categories.map(category => {
                  return (
                    <NavigationMenuLink key={category.id} href="/" className="block text-sm font-medium space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      {category.name}
                    </NavigationMenuLink>
                  )
                })}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              Sobre
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <div className="relative">
              <SearchIcon className="absolute top-1/2 right-3 -translate-y-1/2 h-4 w-4" />
              <Input type="text" placeholder="Buscar..." className="pr-10" />
            </div>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Cart />
          </NavigationMenuItem>
          {isAuthenticated ? (
            <NavigationMenuItem >
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "px-2")} asChild>
              <Link to="/login">
                <User className="h-6 w-6" />
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          ) : (
            <>
            <NavigationMenuItem >
            <Button variant="ghost" asChild>
              <Link to="/login">
                Sign in
              </Link>
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem >
            <Button asChild>
              <Link to="/signup">
                Sign up
              </Link>
            </Button>
          </NavigationMenuItem>
            </>
          )}
          {/* <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </ContainerDefault>
  )
}