"use client";

import { FaUser } from "react-icons/fa";
import { ExitIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentUser } from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";
import { User } from "iconsax-react";
import { ChevronDown } from "lucide-react";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" border-none outline-none">
        <div className=" flex gap-4 items-center border-none">
          <Avatar className=" size-14">
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-[#383238] ">
              <User size={24} variant="Bold" className="text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left gap-1">
            <p className=" text-white capitalize">{user?.name}</p>
            <p className=" text-xs">{user?.email}</p>
          </div>
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="end">
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
