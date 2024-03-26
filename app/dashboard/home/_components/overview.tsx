import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { Check, Profile2User } from "iconsax-react";
import { Mail } from "lucide-react";

const Overview = () => {
  return (
    <div className=" border border-input rounded-lg p-4 flex flex-col gap-4">
      <h3 className=" md:text-[2.5rem]">Overview</h3>
      <div className=" flex flex-col md:flex-row gap-4 ">
        <div className=" md:flex-1 rounded-lg bg-[#151415] flex gap-4 p-4 ">
          <div className=" bg-[#C8F3D9] rounded-full size-10 grid place-items-center">
            <Mail color="#17AC53" />
          </div>
          <div className=" flex flex-col gap-3">
            <p>Landed</p>
            <h3>2134</h3>
          </div>
          <div className=" ml-auto bg-[#FCDDEC] size-5 rounded-full grid place-items-center ">
            <QuestionMarkIcon className=" h-4 w-4 text-dark" />
          </div>
        </div>
        <div className=" md:flex-1 rounded-lg bg-[#151415] flex gap-4 p-4 ">
          <div className=" bg-[#CECEF4] rounded-full size-10 grid place-items-center">
            <Check color="#5D5FEF" />
          </div>
          <div className=" flex flex-col gap-3">
            <p>Completed</p>
            <h3>476</h3>
          </div>
          <div className=" ml-auto bg-[#FCDDEC] size-5 rounded-full grid place-items-center ">
            <QuestionMarkIcon className=" h-4 w-4 text-dark" />
          </div>
        </div>
        <div className=" md:flex-1 rounded-lg bg-[#151415] flex gap-4 p-4 ">
          <div className=" bg-[#E5B5E7] rounded-full size-10 grid place-items-center">
            <Profile2User color="#A732AA" />
          </div>
          <div className=" flex flex-col gap-3">
            <p>Contacts</p>
            <h3>1260</h3>
          </div>
          <div className=" ml-auto bg-[#FCDDEC] size-5 rounded-full grid place-items-center ">
            <QuestionMarkIcon className=" h-4 w-4 text-dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
