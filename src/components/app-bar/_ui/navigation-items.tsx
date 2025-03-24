import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import Link from "next/link";
import { navigation } from "@/constants";

export function NavigationItems() {
  return (
    <section>
      <ViewMobile />
      <ViewDesktop />
    </section>
  );
}

export function ViewMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <MenuIcon className="te" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <nav className="lg:hidden flex flex-col gap-4">
          {navigation.map((item) => (
            <Link key={item?.id} href={item?.href}>
              {item?.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export function ViewDesktop() {
  return (
    <nav className="hidden lg:flex gap-4">
      {navigation.map((item) => (
        <Link key={item?.id} href={item?.href}>
          {item?.name}
        </Link>
      ))}
    </nav>
  );
}
