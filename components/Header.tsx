import Link from "next/link";

// Components

import { Button } from "./ui/button";
import { Nav } from "./Nav";
import MobileNav from "./MobileNav";

export function Header() {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            NooBiE<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
