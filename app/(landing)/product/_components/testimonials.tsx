"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  DirectSend,
  MouseCircle,
  Notification,
  ProfileAdd,
} from "iconsax-react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className=" py-32 pb-20 bg-white text-dark ">
      <div className="flex flex-col gap-20  container">
        <div className=" space-y-6 px-8 lg:px-12">
          <h6 className=" text-dark">VIDEO TESTIMONIAL</h6>
          <h2 className=" text-dark">
            Build a powerful business <br />
            tool to boost engagement
          </h2>
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 pl-8 lg:pl-12">
          <div className=" space-y-2 flex-1">
            <h3 className=" text-dark">Optimize your leads</h3>
            <p className=" text-[#615861]">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              dictum est a, mattis tellus. Sed dignissim. eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, dictum est a, mattis
              tellus. Sed dignissim.
            </p>
          </div>
          <div className=" bg-[#151415] flex-1 pt-12 pl-12">
            <AspectRatio ratio={10 / 7} className=" overflow-clip h-full">
              <Image
                src="/images/hero.png"
                alt="Image"
                fill
                className="object-left-top object-cover border-l border-t border-[#383238] rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 pr-8 lg:pr-12">
          <div className=" bg-[#151415] flex-1 pt-12 pr-12">
            <AspectRatio ratio={10 / 7} className=" overflow-clip h-full">
              <Image
                src="/images/hero.png"
                alt="Image"
                fill
                className="object-left-top object-cover border-l border-t border-[#383238] rounded-lg"
              />
            </AspectRatio>
          </div>
          <div className=" space-y-2 flex-1">
            <h3 className=" text-dark">Generate more sales</h3>
            <p className=" text-[#615861]">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              dictum est a, mattis tellus. Sed dignissim. eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, dictum est a, mattis
              tellus. Sed dignissim.
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-8 pl-8 lg:pl-12">
          <div className=" space-y-2 flex-1">
            <h3 className=" text-dark">Collect testimonials</h3>
            <p className=" text-[#615861]">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              dictum est a, mattis tellus. Sed dignissim. eu turpis molestie,
              dictum est a, mattis tellus. Sed dignissim, dictum est a, mattis
              tellus. Sed dignissim.
            </p>
          </div>
          <div className=" bg-[#151415] flex-1 pt-12 pl-12">
            <AspectRatio ratio={10 / 7} className=" overflow-clip h-full">
              <Image
                src="/images/hero.png"
                alt="Image"
                fill
                className="object-left-top object-cover border-l border-t border-[#383238] rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
