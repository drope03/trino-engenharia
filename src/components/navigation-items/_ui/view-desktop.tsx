import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui";
import Link from "next/link";
import { additionalItems } from "@/constants";

export function ViewDesktop() {
  return (
    <NavigationMenu className="hidden lg:flex gap-12 w-full px-8 py-3 bg-custom-gray/45 rounded-full">
      <NavigationMenuList className="flex gap-12 w-full justify-center">
        <NavigationMenuItem>
          <Link
            href="#"
            className="text-sm font-medium text-text-primary hover:text-primary-dark"
          >
            Início
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-sm font-medium text-text-primary hover:text-primary-dark bg-transparent hover:bg-transparent checked:bg-transparent">
            Serviços
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[350px] max-w-[400px] p-4 shadow-xl rounded-md z-10 bg-background outline-none mt-0 border-t-none">
            <ul className="grid gap-3">
              {additionalItems.map((item) => (
                <li key={item.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="block text-sm text-text-primary hover:text-primary-dark py-2 px-4 rounded-md transition duration-200 ease-in-out hover:bg-gray-100"
                    >
                      <div className="font-medium">{item.name}</div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href="#"
            className="text-sm font-medium text-text-primary hover:text-primary-dark"
          >
            Contato
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}