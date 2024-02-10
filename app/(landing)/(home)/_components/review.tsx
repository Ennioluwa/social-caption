"use client";

import ReviewCard from "./review-card";

const Review = () => {
  return (
    <section className=" px-8 pt-32">
      <h2 className=" pb-4 text-center">Review. Engage. Grow</h2>
      <p className=" pb-20 text-center ">
        Leverage the power of AI enhanced real-life video testimonials{" "}
      </p>
      <div className=" flex flex-col lg:flex-row gap-6 items-center justify-center">
        <ReviewCard
          heading="Testimonials"
          subHeading="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec."
          image="/images/hero.png"
          button="Learn More"
        />
        <ReviewCard
          heading="Marketing"
          subHeading="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec."
          image="/images/hero.png"
          button="Get Started"
        />
        <ReviewCard
          heading="Customer Support"
          subHeading="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec."
          image="/images/hero.png"
          button="Get Started"
        />
      </div>
    </section>
  );
};

export default Review;
