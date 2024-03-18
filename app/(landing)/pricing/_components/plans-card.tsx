import { Button } from "@/components/ui/button";
import { PricingData } from "@/data/data";
import { InfoCircle } from "iconsax-react";
import { FC } from "react";

const PlansCard: FC<PricingData> = ({
  name,
  description,
  price,
  billingCycle,
  features,
  time,
  inclusion,
}) => {
  return (
    <div className=" max-w-lg lg:max-w-full rounded-lg lg:flex-1 flex flex-col gap-10 items-center p-6 border border-[#383238] text-center">
      <Button variant="secondary" size="sm">
        {name}
      </Button>
      <h2>{price}</h2>
      <p>{description}</p>
      <div className=" text-left mb-5">
        <div className="flex items-center justify-between gap-5 py-4 border-y mb-12 border-[#383238]  ">
          <p className="">
            <span className=" text-primary">{time}</span> of video or audio
            processing
          </p>
          <InfoCircle size={20} />
        </div>

        <p>{inclusion}</p>
        <ul className=" border-t border-[#383238] mt-6 ">
          {features.map((feature, index) => (
            <li
              className="flex items-center justify-between gap-5 py-4 border-b border-[#383238] "
              key={index}
            >
              <span>{feature}</span> <InfoCircle size={20} />
            </li>
          ))}
        </ul>
      </div>
      <Button className=" w-full mt-auto">Get Started with Plan</Button>
    </div>
  );
};

export default PlansCard;
