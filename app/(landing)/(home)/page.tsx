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
      <Review />
      <Engagements />
      <Testimonials />
      <Connect />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;
