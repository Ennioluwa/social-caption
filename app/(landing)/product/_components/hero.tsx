"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import GetStartedButton from "../../_components/get-started";

const HeroPage = () => {
  return (
    <div className="relative pl-8   w-full overflow-clip container">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:pt-12">
        <div className="flex flex-col gap-8 items-start justify-center text-left w-full overflow-clip  mx-auto py-10 md:py-20">
          <h1 className="">
            Experience growth <br /> based on your own <br /> business standards
          </h1>
          <p className="">
            Leverage the power of AI enhanced real-life video testimonials to
            boost audience engagements and effectively grow your business.
          </p>
          <div className=" flex items-center justify-center flex-wrap gap-8">
            <GetStartedButton>Get Started for Free</GetStartedButton>
            <Button variant={"ghost"} className=" gap-2">
              Learn More <ArrowDown />
            </Button>
          </div>
        </div>
        <AspectRatio
          ratio={1.3 / 1}
          className=" ml-8 mr-0 lg:m-0 lg:mt-16 overflow-clip h-full"
        >
          <Image
            src="/images/hero.png"
            alt="Image"
            fill
            className="object-left-top object-cover rounded-lg "
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default HeroPage;
