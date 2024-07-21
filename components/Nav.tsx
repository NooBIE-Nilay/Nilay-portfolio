"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

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
              link.path === pathname && "text-accent border-b-2 border-accent"
            }  hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
