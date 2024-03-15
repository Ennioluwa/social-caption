"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div className="relative px-8 pt-28  w-full overflow-clip">
      <div className="absolute inset-0 -z-30 flex items-center justify-center">
        <svg
          width="1440"
          height="880"
          viewBox="0 0 1440 880"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full h-full"
        >
          <g opacity="0.88">
            <circle cx="720" cy="440" r="896" fill="#0B090B" />
            <circle cx="720" cy="440" r="735.314" fill="#0D0A0D" />
            <circle cx="720" cy="440" r="606.066" fill="#0F0C0F" />
            <circle cx="720" cy="440" r="415.688" fill="#110E11" />
            <circle cx="720" cy="440" r="235.79" fill="#131013" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:py-40">
        <div className="flex flex-col gap-8 items-start justify-center text-left w-full overflow-clip  mx-auto py-10 md:py-20">
          <h6>ABOUT SOCIALCAPTION</h6>
          <h1 className="">
            We are simplifying marketing for all business owners.
          </h1>
        </div>
        <div className="w-full">
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
    </div>
  );
};

export default HeroPage;
