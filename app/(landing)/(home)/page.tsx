import {
  Connect,
  Engagements,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Review,
  Testimonials,
} from "./_components";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-clip w-full h-full">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 -z-30 mt-20">
          <svg
            width="1440"
            height="1584"
            viewBox="0 0 1440 1584"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="720" cy="792" r="792" fill="#0B090B" />
            <circle cx="720" cy="792" r="649.965" fill="#0D0A0D" />
            <circle cx="720" cy="792" r="535.719" fill="#0F0C0F" />
            <circle cx="720" cy="792" r="367.439" fill="#110E11" />
            <circle cx="720" cy="792" r="208.421" fill="#131013" />
          </svg>
        </div>
        <Review />
        <Engagements />
      </div>
      <Testimonials />
      <Connect />
      <GetStarted />
    </div>
  );
};

export default HomePage;
