import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";

const HomePage = async () => {
  const user = await currentUser();

  console.log(user, "current user");

  return <div className=" relative w-full h-full"></div>;
};

export default HomePage;
