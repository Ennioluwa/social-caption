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
    <section className=" -mt-20 pt-52 pb-20 px-8  bg-white ">
      <h2 className=" pb-4 text-center text-[#080708]">
        Get reviews with ease
      </h2>
      <p className=" pb-20 text-center text-[#151415] ">
        Leverage the power of AI enhanced real-life video testimonials
      </p>

      <div className=" max-h-[800px]  lg:max-h-[640px] overflow-clip rounded-lg bg-[#0F0D0F] flex flex-col md:flex-row gap-10 md:gap-0">
        <div className=" flex flex-col gap-12 p-8 justify-center flex-1">
          <div className=" flex gap-4">
            <Notification
              variant="Bold"
              color="#A732AA"
              size={20}
              className=" shrink-0"
            />
            <div className=" flex flex-col gap-4">
              <h5>Create Request</h5>
              <p className=" text-white">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec. Qorem ipsum dolor sit amet, ilcom consectetur
                adipiscing elit. Etiam eu turpis molestie,.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <MouseCircle
              variant="Bold"
              color="#C6BAC6"
              size={20}
              className=" shrink-0"
            />
            <h5 className=" text-gray">Select An Option</h5>
          </div>
          <div className="flex gap-4 items-center pt-4">
            <DirectSend
              variant="Bold"
              color="#C6BAC6"
              size={20}
              className=" shrink-0"
            />
            <h5 className=" text-gray">Share Your Link</h5>
          </div>
          <div className="flex gap-4 items-center pt-4">
            <ProfileAdd
              variant="Bold"
              color="#C6BAC6"
              size={20}
              className=" shrink-0"
            />
            <h5 className=" text-gray">Create Testimonial</h5>
          </div>
        </div>
        <div className="flex-1 pl-8 pt-8 bg-[#151415] w-full">
          <AspectRatio ratio={1 / 1.3} className=" overflow-clip w-full h-full">
            <Image
              src="/images/hero.png"
              alt="Testimonial image"
              fill
              className="object-left-top object-cover rounded-lg border border-[#383238]  flex-1"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
