"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// import Logo from "../../../public/img/logo.svg";
import { ThemeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import NavbarMobile from "./NavbarMobile";
import {
  EarthIcon,
  Languages,
  LanguagesIcon,
  LucideLanguages,
} from "lucide-react";

const links = [
  { name: "About", href: "/", description: "" },
  { name: "Projects", href: "/about", description: "" },
  { name: "Blog", href: "/blog", description: "" },
  { name: "Contact", href: "/contact", description: "" },
];

const languages = [
  { name: "Norsk", code: "no" },
  { name: "English", code: "en" },
];
// test
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-evenly border-b border-gray-200 bg-slate-50 px-4 py-4 pl-4 dark:border-gray-600 dark:bg-background md:overflow-visible md:px-6 md:pl-0 lg:px-12">
      <div className="flex justify-center">
        <Link href="/" className="flex items-center">
          Samuel
        </Link>
      </div>
      <div className="flex flex-row-reverse items-center md:flex-row">
        <div className="hidden md:flex">
          {links.map((link, index) => (
            <Button key={index} variant={"link"}>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
