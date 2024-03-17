import { pricingData } from "@/data/data";
import PlansCard from "./plans-card";

const Plans = () => {
  return (
    <div className="relative px-8 lg:px-12 py-28  w-full overflow-clip bg-[#080708]">
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
