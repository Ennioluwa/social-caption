import { InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

export type SearchProps = React.InputHTMLAttributes<HTMLInputElement>;

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex relative h-14 items-center border border-[#383238] bg-[#151415] text-sm ring-offset-background focus-within:border-gray focus-within:ring-offset-2 rounded-lg overflow-clip",
          className
        )}
      >
        <div className="absolute left-3 inset-y-0 grid place-items-center h-full">
          <SearchIcon className="h-[16px] w-[16px]" />
        </div>

        <input
          {...props}
          type="search"
          ref={ref}
          className="w-full h-full p-2 pl-9 placeholder:text-[#C6BAC6] border-[#383238] bg-[#151415] rounded-lg placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);

SearchInput.displayName = "Search";

export { SearchInput };
