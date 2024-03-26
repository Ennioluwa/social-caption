"use client";

import Logo from "@/components/logo";
import Link from "next/link";
import { sidebarData, foldersData, accountHelpData } from "./sidebarData";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-full overflow-auto w-full bg-[#151415] px-4 py-10 flex flex-col gap-10 justify-between">
      <Link href="/dashboard/home" className="">
        <Logo className=" px-4" />
      </Link>
      <div className="flex flex-col gap-4">
        {sidebarData.map((data, index) => (
          <Link href={data.href}>
            <Button
              className=" gap-4 p-4 text-white font-normal text-base w-full text-left justify-start"
              variant={pathname.includes(data.href) ? "default" : "ghost"}
              key={index}
            >
              <data.icon size={24} variant={"Linear"} />
              {data.label}
            </Button>
          </Link>
        ))}
      </div>
      <Link href={foldersData.href}>
        <Button
          className=" gap-4 p-4 text-white font-normal text-base w-full text-left justify-start"
          variant={pathname.includes(foldersData.href) ? "default" : "ghost"}
        >
          <foldersData.icon size={24} variant={"Linear"} />
          {foldersData.label}
        </Button>
      </Link>
      <div className="flex flex-col gap-4">
        {accountHelpData.map((data, index) => (
          <Link href={data.href}>
            <Button
              className=" gap-4 p-4 text-white font-normal text-base w-full text-left justify-start"
              variant={pathname.includes(data.href) ? "default" : "ghost"}
              key={index}
            >
              <data.icon size={24} variant={"Linear"} />
              {data.label}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Sidebar };
