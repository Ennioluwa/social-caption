"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import GetStartedButton from "../../_components/get-started";

const Hero = () => {
  return (
    <div className="container  px-8  flex flex-col w-full overflow-clip">
      <div className="flex flex-col gap-8 items-center justify-center text-center w-full overflow-clip lg:w-[80%] mx-auto py-10 md:py-20">
        <h1>Boost your business with AI enhanced videos</h1>
        <p className=" lg:px-20">
          Leverage the power of AI enhanced real-life video testimonials to
          boost audience engagements and effectively grow your business.
        </p>
        <div className=" flex items-center justify-center flex-wrap gap-8">
          <GetStartedButton>Get Started for Free</GetStartedButton>
          <Button variant={"ghost"}>
            Learn More <ArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="w-full pt-8">
        <AspectRatio ratio={1220 / 801}>
          <Image
            src="/images/hero.png"
            alt="Image"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default Hero;
