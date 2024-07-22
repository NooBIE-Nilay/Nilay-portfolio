"use client";

import { usePathname } from "next/navigation";
import { links } from "../lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/" className="text-4xl font-semibold">
            <h1>
              NooBiE<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                className={`${
                  link.path == pathname &&
                  "border-b-2 border-accent text-accent"
                } text-xl transition-all hover:text-accent`}
                href={link.path}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
