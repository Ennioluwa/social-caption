import GetStarted from "../product/_components/get-started";
import Plans from "./_components/plans";

const PricingPage = () => {
  return (
    <div>
      <Plans />
      <GetStarted />
      <hr className=" border-[#383238]" />
    </div>
  );
};

export default PricingPage;
