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

const LandingPage = () => {
  return (
    <div className=" container flex flex-col">
      <Navbar />
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

export default LandingPage;
