"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "LinkedIn Script Gen",
    href: "/llm/linkedin-script",
    description: "A compact generator for your post captions",
  },
  {
    title: "YouTube Script Gen",
    href: "/llm/yt-script",
    description: "Need some script to start your YT journey.",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black w-full text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Omni AI</h1>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleMenu}
        className="block lg:hidden p-2 rounded text-gray-400 hover:text-white focus:outline-none"
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <div
        className={cn("w-full lg:flex lg:items-center lg:w-auto lg:space-x-5", {
          "hidden lg:flex": !menuOpen,
          "block lg:flex": menuOpen,
        })}
      >
        {/* Services Dropdown */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-inherit text-xl hover:underline">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-full sm:w-[300px] md:w-[400px] lg:w-[500px]">
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
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Other Links */}
        <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-2 lg:space-y-0">
          <Link href="/" className="hover:underline text-xl">
            Home
          </Link>
          <Link href="/about" className="hover:underline text-xl">
            About
          </Link>
          <Link href="/contact" className="hover:underline text-xl">
            Contact
          </Link>
          <Link href="/auth/login" className="hover:underline text-xl">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export default Navbar;
