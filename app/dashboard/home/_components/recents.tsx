import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Recents = () => {
  return (
    <div className=" p-4 bg-[#0F0D0F] border border-input rounded-lg flex flex-col gap-4 ">
      <h4 className=" font-semibold">Recent Testvid</h4>
      <div className=" border border-input bg-transparent rounded-lg flex flex-col pb-4 sm:pb-0 sm:flex-row gap-y-4 items-center overflow-clip">
        <div className=" relative w-full h-[216px]">
          <Image
            src={"/images/recent.png"}
            alt="Image"
            fill
            className=" object-cover"
          />
        </div>
        <div className=" flex flex-col gap-5 p-3 px-6">
          <h5>Book keeping</h5>
          <p>
            Qorem ipsum dolor sit amet, consectetur iles editas adipiscing elit.
            Etiam eu turpis molestie, dictu.
          </p>
          <Button className=" w-fit" variant={"secondary"}>
            Continue
          </Button>
        </div>
      </div>
      <div className=" bg-[#080708]  rounded-lg flex flex-col sm:flex-row pb-4 sm:pb-0 gap-y-4 items-center overflow-clip">
        <div className=" relative w-full h-[236px]">
          <Image
            src={"/svgs/response.svg"}
            alt="Image"
            fill
            className=" object-cover"
          />
        </div>
        <div className=" flex flex-col gap-5 p-3 px-6">
          <h5>No Responses Yet</h5>
          <p>Request for a testimonial video from your customers/users</p>
        </div>
      </div>
    </div>
  );
};

export default Recents;
