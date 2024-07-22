"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "../lib/utils";

export function Nav() {
  const pathname = usePathname();
  return (
    <div className="flex gap-8">
      {links.map((link, index) => {
        //   @ts-ignore
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "border-b-2 border-accent text-accent"
            } transition-all hover:text-accent`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
