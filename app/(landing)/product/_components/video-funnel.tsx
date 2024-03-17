import { useState } from "react";
import FunnelCard from "./funnel-card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { RadioIcon } from "lucide-react";
import { funnelData } from "@/data/data";

const VideoFunnel = () => {
  const [index, setIndex] = useState(0);

  console.log(index);

  return (
    <div className=" px-8 lg:px-12 py-32 bg-black">
      <div className=" lg:w-1/2 lg:pr-16 pb-24">
        <h6>BUILD A VIDEO FUNNEL</h6>
        <h2 className=" pt-6">Create a video funnel to drive up engagements</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 min-h-[600px]">
        <div className=" lg:flex-1 order-2 lg:order-1">
          <div className=" flex flex-col gap-6 ">
            {funnelData.map((funnel, funnelIndex) => (
              <FunnelCard
                key={funnelIndex}
                funnelIndex={funnelIndex}
                index={index}
                setIndex={setIndex}
                title={funnel.title}
                subtitle={funnel.subtitle}
                Icon={funnel.icon}
              />
            ))}
          </div>
        </div>
        <div className=" lg:flex-1 order-1 lg:order-2 ">
          {/* <AspectRatio ratio={1 / 1} className=" "> */}
          <div className=" bg-red-300 w-full h-full min-h-[400px]"></div>
          {/* </AspectRatio> */}
        </div>
      </div>
    </div>
  );
};

export default VideoFunnel;
