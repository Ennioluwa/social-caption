"use client";

import Logo from "@/components/logo";

const Footer = () => {
  return (
    <section className=" px-8 py-20 w-full bg-[#151415]">
      <div className="container  flex justify-between items-start gap-20 flex-wrap">
        <div className=" flex flex-col gap-6 flex-[1]">
          <Logo />
          <div>
            <p className=" text-nowrap">© 2024 Socialcaption, Inc.</p>
            <p className=" text-nowrap">All rights reserved</p>
          </div>
        </div>
        <div className=" flex flex-col gap-6 flex-[1]">
          <h5>Features</h5>
          <p className=" text-nowrap">Testimonials</p>
          <p className=" text-nowrap">AI Enhancements</p>
          <p className=" text-nowrap">Video Funnels</p>
        </div>
        <div className=" flex flex-col gap-6 flex-[1] shrink-0">
          <h5>Company</h5>
          <p className=" text-nowrap">About Us</p>
          <p className=" text-nowrap">Blog</p>
          <p className=" text-nowrap">Terms & Conditions</p>
          <p className=" text-nowrap">Privacy Policy</p>
        </div>
        <div className=" flex flex-col gap-6 flex-[1]">
          <h5>Support</h5>
          <p className=" text-nowrap">Get Help</p>
          <p className=" text-nowrap">FAQs</p>
          <p className=" text-nowrap">Contact Us</p>
          <p className=" text-nowrap">Developer&apos;s API</p>
        </div>
        <div className=" flex flex-col gap-6 flex-[1]">
          <h5>Social</h5>
          <div className="flex gap-4 items-center">
            <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#737373]"></div>
            <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#737373]"></div>
            <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#737373]"></div>
            <div className=" grid place-items-center h-8 w-8 rounded-full bg-[#737373]"></div>
          </div>
          <p>support@socialcaption.io</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
