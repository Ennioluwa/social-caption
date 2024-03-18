import { Button } from "@/components/ui/button";
import { ArrowRight } from "iconsax-react";

const Subscribe = () => {
  return (
    <section className=" px-8 lg:px-12 pt-32 w-full overflow-clip">
      <div className="flex">
        <h2 className="flex-1">Subscribe to socialcaptions </h2>
        <p className="flex-1">
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, dictum
          est a, mattis.
        </p>
      </div>
      <div className="flex">
        <h3 className="flex-1">Enter your email address </h3>
        <Button variant={"ghost"}>
          Learn More <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default Subscribe;
