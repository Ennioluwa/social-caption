"use client";

import { UserButton } from "@/components/auth/user-button";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import { Notification, SearchNormal } from "iconsax-react";

const Navbar = () => {
  return (
    <div className="">
      <nav className=" flex justify-between items-center gap-10 flex-col md:flex-row">
        <SearchInput
          className=" lg:max-w-[400px] w-full "
          placeholder="Search..."
        />
        <div className="flex w-full gap-4 items-center justify-between md:justify-end">
          <div className="shrink-0 size-14 grid place-items-center rounded-lg bg-[#383238]">
            <Notification variant="Bold" size={24} color="#FCDDEC" />
          </div>
          <UserButton />
        </div>
      </nav>
    </div>
  );
};

export { Navbar };
