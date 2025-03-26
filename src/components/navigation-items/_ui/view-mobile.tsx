import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { navigationMobile } from "@/constants";

export function ViewMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <MenuIcon className="text-white cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <nav className="lg:hidden flex flex-col gap-4">
          {navigationMobile.map((item) => (
            <Link
              key={item?.id}
              href={item?.href}
              className="text-sm font-medium hover:text-primary-dark"
            >
              {item?.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
