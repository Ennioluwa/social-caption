import { pricingData } from "@/data/data";
import PlansCard from "./plans-card";

const Plans = () => {
  return (
    <div className="relative px-8 lg:px-12 py-28  w-full overflow-clip container">
      <div className="absolute inset-0 -z-30 flex items-center justify-center">
        <svg
          width="1440"
          height="1584"
          viewBox="0 0 1440 1584"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="720" cy="792" r="792" fill="#0B090B" />
          <circle cx="720" cy="792" r="649.965" fill="#0D0A0D" />
          <circle cx="720" cy="792" r="535.719" fill="#0F0C0F" />
          <circle cx="720" cy="792" r="367.439" fill="#110E11" />
          <circle cx="720" cy="792" r="208.421" fill="#131013" />
        </svg>
      </div>
      <div className="flex flex-col gap-8 lg:pt-12">
        <h6>PRICING</h6>
        <h1>
          Find the right plan <br />
          for your needs
        </h1>
        <div>Billed Monthly</div>
        <div className=" flex flex-col lg:flex-row gap-5 justify-between">
          {pricingData.map((pricing, index) => (
            <PlansCard {...pricing} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
