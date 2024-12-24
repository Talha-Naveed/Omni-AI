import React from "react";
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

const Navbar = () => {
  return (
    <>
      <nav className="bg-black w-screen text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold xl:mx-60 lg:mx-44 md:mx-20 sm:mx-0">
          Omni AI
        </h1>
        <div className="flex space-x-5 text-xl xl:mx-60 lg:mx-44 md:mx-20 sm:mx-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
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
      <div className="">
        {/* This is where the main content will go */}

        <div className="container mx-auto sm:px-8 md:px-16 lg:px-24">
          {/* CHange this background to transparent so the image */}

          {/* Content */}
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold">Welcome to Omni AI</h2>
            <p className="mt-4 text-lg">Here’s some interesting content.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
