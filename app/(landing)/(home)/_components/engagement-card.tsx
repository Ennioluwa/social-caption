import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Icon as IconsaxIcon } from "iconsax-react";
import Image from "next/image";
import { FC } from "react";
import GetStartedButton from "../../_components/get-started";

interface EngagementCardProps {
  Icon: IconsaxIcon;
  title: string;
  subTitle: string;
  image: string;
}

const EngagementCard: FC<EngagementCardProps> = ({
  Icon,
  image,
  title,
  subTitle,
}) => {
  return (
    <div className=" max-h-[800px] lg:max-h-[560px] overflow-clip z-20 rounded-lg bg-[#151415] flex flex-col lg:flex-row gap-8">
      <div className=" flex flex-col gap-12 p-8 justify-center ">
        <div className=" h-14 w-14 rounded-full bg-[#130513] border-primary grid place-items-center">
          <Icon variant="Bold" color="#A732AA" size={18} />
        </div>
        <div className=" flex flex-col gap-4">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        <GetStartedButton className=" w-fit">
          Get Started for Free
        </GetStartedButton>
      </div>
      <AspectRatio
        ratio={1.3 / 1}
        className=" ml-8 mr-0 lg:m-0 lg:mt-16 overflow-clip h-full"
      >
        <Image
          src={image}
          alt={title}
          //   height={1440}
          //   width={945}
          fill
          className="object-left-top object-cover rounded-lg border border-[#383238]"
        />
      </AspectRatio>
    </div>
  );
};

export default EngagementCard;
