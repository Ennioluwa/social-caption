"use client";

import { NoteText } from "iconsax-react";
import EngagementCard from "./engagement-card";

const Engagements = () => {
  return (
    <section className=" pt-32">
      <h2 className=" pb-4 text-center">Boost your engagements</h2>
      <p className=" pb-20 text-center ">
        Leverage the power of AI enhanced real-life video testimonials
      </p>
      <div className=" flex flex-col gap-12">
        <EngagementCard
          title="Better data collection with our video forms"
          subTitle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus."
          Icon={NoteText}
          image="/images/hero.png"
        />
        <EngagementCard
          title="Save your time with automated reviews"
          subTitle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus."
          Icon={NoteText}
          image="/images/hero.png"
        />
        <EngagementCard
          title="Enhance your marketing with AI"
          subTitle="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus."
          Icon={NoteText}
          image="/images/hero.png"
        />
      </div>
    </section>
  );
};

export default Engagements;
