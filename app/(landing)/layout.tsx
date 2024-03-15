import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import { Footer, Navbar } from "./(home)/_components";

export const metadata: Metadata = {
  title: "Social Caption",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container px-0 overflow-clip w-full h-full flex flex-col">
      <Navbar />
      <div className=" ">{children}</div>
      <Footer />
    </div>
  );
}
