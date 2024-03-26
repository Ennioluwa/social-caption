import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import Image from "next/image";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="flex w-dvw h-dvh overflow-clip">
      <div className=" shrink-0 w-[350px] h-full hidden lg:block ">
        <Sidebar />
      </div>
      <div className=" relative grow w-full h-full overflow-auto flex flex-col gap-10 container ml-0 py-8">
        <Navbar />
        <div className="absolute inset-0 -z-30 flex items-center justify-center">
          <Image
            src={"/svgs/background.svg"}
            alt=" background image"
            fill
            className=" object-cover "
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
