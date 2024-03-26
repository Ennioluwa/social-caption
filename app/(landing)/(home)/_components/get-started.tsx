"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import GetStartedButton from "../../_components/get-started";

const GetStarted = () => {
  return (
    <section className="container px-8 pt-32 w-full overflow-clip">
      <div className=" flex flex-col gap-20">
        <div className=" flex flex-col md:flex-row gap-x-20 gap-y-10">
          <div className="flex-1">
            <h2>Get started for free with Socialcaption</h2>
          </div>
          <div className=" flex-1 flex flex-col gap-12">
            <p>
              Leverage the power of AI enhanced real-life video testimonials to
              boost audience engagements and effectively grow your business.
              Leverage the power of AI enhanced real-life video testimonials.
            </p>
            <GetStartedButton className=" w-fit">
              Get Started for Free
            </GetStartedButton>
          </div>
        </div>
        <div className=" max-h-96">
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
    </section>
  );
};

export default GetStarted;
