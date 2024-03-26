import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface GetStartedButtonProps {
  children: ReactNode;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

const GetStartedButton: FC<GetStartedButtonProps> = ({
  children,
  className,
  variant,
}) => {
  return (
    <Link href={"/auth/register"}>
      <Button variant={variant || "default"} className={className}>
        {children}
      </Button>
    </Link>
  );
};

export default GetStartedButton;
