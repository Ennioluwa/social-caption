import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
import Overview from "./_components/overview";
import Recents from "./_components/recents";
import Contacts from "./_components/contacts";

const HomePage = async () => {
  const user = await currentUser();

  console.log(user, "current user");

  return (
    <div className=" flex flex-col gap-6">
      <Overview />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" col-span-1 md:col-span-2">
          <Recents />
        </div>
        <div className=" col-span-1">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
