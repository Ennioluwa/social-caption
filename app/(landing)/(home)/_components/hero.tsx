"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" px-8 pt-28 flex flex-col">
      <div className="flex flex-col gap-8 items-center justify-center text-center lg:w-[80%] mx-auto py-20">
        <h1>Boost your business with AI enhanced videos</h1>
        <p className=" lg:px-20">
          Leverage the power of AI enhanced real-life video testimonials to
          boost audience engagements and effectively grow your business.
        </p>
        <div className=" flex items-center gap-8">
          <Button>Get Started for Free</Button>
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
