import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", description: "pfierjpoiwjefipoj" },
  { name: "Blog", href: "/blog", description: "pfierjpoiwjefipoj" },
  // { name: "Contact", href: "/contact", description: "pfierjpoiwjefipoj" },
];

function NavbarMobile() {
  return (
    <NavigationMenu className="border-none p-0">
      <Sheet>
        <SheetTrigger className="border-none px-2.5">
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="m-auto flex h-screen w-screen items-center justify-center border-none">
          <SheetHeader>
            <SheetTitle className="relative grid gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {links.map(({ name, href }) => (
                // Make it so it the user can click a link and it automatically closes
                <Link href={href} key={href}>
                  {name}
                </Link>
              ))}
            </SheetTitle>
            <SheetDescription>Samuel Ismael Gonzalez Ampuero</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </NavigationMenu>
  );
}

export default NavbarMobile;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
