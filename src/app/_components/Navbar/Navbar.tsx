"use client";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { TiShoppingCart } from "react-icons/ti";
import { useSession } from "next-auth/react";
import { useCart, cartContextType } from "@/app/_context/cartContext";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavigationMenuDemo() {
  const session = useSession();
  const userName = session.data?.user?.name;

  const isUserAuthenticated = session.status === "authenticated";

  const { numberOfCartItems } = useCart() as cartContextType;

  return (
    <NavigationMenu className=" z-50 bg-white max-w-none sticky top-0 justify-between mp-6 px-9 p-2 shadow ">
      <h2 className="flex items-center">
        {" "}
        <TiShoppingCart size={40} className="text-green-600" />
        Fresh Cart
      </h2>

      <NavigationMenuList>
        {/* <NavigationMenuItem className="flex md:hidden">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className="bg-transparent">
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="bg-transparent">
              <Link href="/shop">Shop</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenu>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="w-60 bg-white p-4 rounded-lg shadow-lg">
                  <ListItem href="/categories" title="All Categories" />
                  <ListItem href="/categories" title="Women's Fashion" />
                  <ListItem href="/categories" title="Men's Fashion" />
                  <ListItem href="/categories" title="Electronics" />
                  <ListItem href="/categories" title="All Products" />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="bg-transparent">
              <Link href="/brand">Brands</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild className="bg-transparent">
              <Link href="/">Support</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            {/* <Link href="/wishlist">
            <FaRegHeart />
            
            </Link> */}
            <Link
              href="/wishlist"
              className="relative flex items-center justify-center"
            >
              <span className="cursor-pointer">
                <FaRegHeart size={24} color="red" />
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-400 text-red-500 font-bold text-xs px-2 py-0.5 rounded-full">
                  {numberOfCartItems}
                </span>
              </span>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuLink>
            <Link
              href="/cart"
              className="relative flex items-center justify-center"
            >
              <FaCartShopping className="text-2xl" />
              {isUserAuthenticated && numberOfCartItems > 0 && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white font-bold text-xs px-2 py-0.5 rounded-full">
                  {numberOfCartItems}
                </span>
              )}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className="bg-transparent">
            {isUserAuthenticated ? (
              <Link href="/Login">{userName}</Link>
            ) : (
              <Link href="/Login">Sign in</Link>
            )}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
