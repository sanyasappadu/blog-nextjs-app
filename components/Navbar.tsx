"use client";

import Link from "next/link";
import * as React from "react";
import { ModeToggle } from "./ModeToggle";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
function Navbar() {
  return (
    <nav className="h-20 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center">
      <div className="font-bold md:text-3xl text-2xl w-full space-y-6">Wild Fire</div>
      <ul className="hidden md:flex w-full justify-end space-x-4 items-center">
        <li >
          <Link href={"/"}>Home</Link>
        </li>
        <li >
          <Link href={"/blog"}>Blogs</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      <div className="md:hidden">
        <Sheet>
      <SheetTrigger asChild>
      <HamburgerMenuIcon className="size-8"/>
      </SheetTrigger>
      <SheetContent>
          <div className="flex flex-col space-y-4 items-center ">
          <Link href={"/"}>Home</Link>
 
          <Link href={"/about"}>About</Link>
          </div>

      </SheetContent>
    </Sheet>
      </div>
      <div className="flex justify-end ml-4 items-center">
      <ModeToggle/>
      </div>
    </nav>
  );
}

export default Navbar;
