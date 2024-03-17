"use client";

import GetStarted from "./_components/get-started";
import HeroPage from "./_components/hero";
import Testimonials from "./_components/testimonials";
import VideoFunnel from "./_components/video-funnel";

const ProductPage = () => {
  return (
    <div>
      <HeroPage />
      <Testimonials />
      <VideoFunnel />
      <GetStarted />
      <hr className=" border-[#383238]" />
    </div>
  );
};

export default ProductPage;
