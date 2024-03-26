import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "iconsax-react";
import { FaEllipsisV } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className=" h-full border border-input rounded-lg flex flex-col gap-6 pt-6 pb-2 px-2">
      <h4 className=" pl-4 font-semibold">Contacts</h4>
      <div className="  flex flex-col gap-2">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div
            key={index}
            className=" bg-[#151415]  py-2 px-4 flex items-center gap-2 rounded-lg "
          >
            <Avatar className=" size-10">
              <AvatarImage src={""} />
              <AvatarFallback className="bg-[#383238] ">
                <User size={24} variant="Bold" className="text-white" />
              </AvatarFallback>
            </Avatar>
            <p>Oluwatosin Bukola</p>
            <div className=" ml-auto">
              <FaEllipsisV />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
