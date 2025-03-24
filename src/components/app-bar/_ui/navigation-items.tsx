import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui";

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
        <MenuIcon className="te"/>
      </SheetTrigger>
      <SheetContent>
        <nav>ViewMobile</nav>
      </SheetContent>
    </Sheet>
  );
}

export function ViewDesktop() {
  return <nav className="hidden lg:flex ">links</nav>;
}
