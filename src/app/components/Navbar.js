import * as React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "LinkedIn Script Gen",
    href: "/llm/linkedin-script",
    description: "A compact generator for your post captions",
  },

  {
    title: "YouTube Script Gen",
    href: " /llm/yt-script",
    description: "Need some script to start your YT journey.",
  },

  {
    title: "Likh do yahan kuch",
    href: "/",
    description: "Batman",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="bg-black w-screen text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold xl:mx-60 lg:mx-44 md:mx-20 sm:mx-0">
          Omni AI
        </h1>
        <div className="flex space-x-5 text-xl xl:mx-60 lg:mx-44 md:mx-20 sm:mx-0">
          <NavigationMenu className="">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-inherit text-xl">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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

          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/login" className="hover:underline">
            Login
          </a>
        </div>
      </nav>
      {/* <div className=""> */}
      {/* This is where the main content will go */}

      {/* <div className="container mx-auto sm:px-8 md:px-16 lg:px-24"> */}
      {/* CHange this background to transparent so the image */}

      {/* Content */}
      {/* <div className="mt-8 text-center"> */}
      {/* <h2 className="text-3xl font-bold">Welcome to Omni AI</h2> */}
      {/* <p className="mt-4 text-lg">Here’s some interesting content.</p> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
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
