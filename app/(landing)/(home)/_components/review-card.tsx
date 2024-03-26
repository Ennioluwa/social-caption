import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ArrowCircleRight2 } from "iconsax-react";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import GetStartedButton from "../../_components/get-started";

interface ReviewCardProps {
  image: string;
  heading: string;
  subHeading: string;
  button: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  image,
  heading,
  subHeading,
  button,
}) => {
  return (
    <div className="p-6 flex flex-col gap-4 border border-[#383238] max-w-96 rounded-lg">
      <AspectRatio ratio={1220 / 801}>
        <Image
          src={image}
          alt={heading}
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>

      <h4 className=" mt-8">{heading}</h4>
      <p>{subHeading}</p>
      <GetStartedButton className=" gap-4 w-fit mt-8" variant="secondary">
        {button} <ArrowCircleRight2 size={16} variant="Bold" />
      </GetStartedButton>
    </div>
  );
};

export default ReviewCard;
