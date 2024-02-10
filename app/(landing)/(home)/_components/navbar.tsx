"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" fixed inset-x-0 h-auto top-0 bg-background  z-50 shadow">
      <div className="container flex items-center justify-between gap-5 w-full overflow-clip py-8">
        <Link href="/">
          <Logo className=" shrink-0" />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/product">Product</Link>
          <Link href="/about">Company</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Support</Link>
        </div>
        <div className="flex gap-4 items-center shrink-0">
          <Button variant="outline">Log In</Button>
          <Button variant="default">Get Started for Free</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
