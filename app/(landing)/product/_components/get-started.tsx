import { Button } from "@/components/ui/button";

const GetStarted = () => {
  return (
    <div className="bg-[#151415]">
      <div className="container py-32 px-8 lg:px-12  ">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-40 items-center justify-between">
          <div className="  lg:flex-1">
            <h1>Get started for free with Socialcaption</h1>
          </div>
          <div className=" flex-1 space-y-10 lg:space-y-20">
            <p>
              Leverage the power of AI enhanced real-life video testimonials to
              boost audience engagements and effectively grow your business.
              Leverage the power of AI enhanced real-life video testimonials.{" "}
            </p>
            <Button>Get Started for Free</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
