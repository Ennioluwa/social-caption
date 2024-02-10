"use client";

import { Button } from "@/components/ui/button";
import { ArrowCircleRight2, ArrowRight } from "iconsax-react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const Connect = () => {
  return (
    <section className=" px-8 pt-32 w-full overflow-clip">
      <div className="grid place-items-center relative w-full overflow-clip">
        <div className=" text-center max-w-xl py-20 lg:py-40 flex flex-col gap-12 p-4 w-full">
          <h3>Connect with your favourite business tools </h3>
          <p>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus.
          </p>
          <div className=" flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 flex-wrap">
            <Button className="gap-4" variant="secondary">
              Integrate
              <ArrowCircleRight2 size={16} variant="Bold" />
            </Button>
            <Button variant={"ghost"}>
              Learn More <ArrowUpRight />
            </Button>
          </div>
        </div>
        <Image
          src={"/svgs/connect-image.svg"}
          fill
          alt="background image"
          className=" -z-10 rounded-lg object-cover h-full"
        />
      </div>
    </section>
  );
};

export default Connect;
