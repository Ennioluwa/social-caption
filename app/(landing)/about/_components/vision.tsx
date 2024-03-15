import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

interface CardProps {
  name: string;
  image: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ name, image, title }) => {
  return (
    <div className=" bg-[#151415] p-6 flex items-center gap-6 rounded-lg">
      <div className="relative h-32 w-32">
        <Image
          src={image}
          alt={name}
          fill
          className=" rounded-full  bg-black object-cover"
        />
      </div>
      <div className=" space-y-2">
        <h3>{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

const Vision = () => {
  return (
    <section className=" px-8 pt-32 w-full overflow-clip">
      <div className=" space-y-6">
        <h6>VISION</h6>
        <h2>
          Our vision is to build an easy to use video marketing tool for
          businesses in Africa.
        </h2>
      </div>
      <div className="relative p-5 lg:p-10 rounded-lg flex flex-col lg:flex-row gap-6 items-start my-36">
        <div className="absolute inset-0 -z-30">
          <svg
            width="1300"
            height="680"
            viewBox="0 0 1300 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.88">
              <circle cx="650" cy="340" r="806" fill="#0B090B" />
              <circle cx="650" cy="340" r="661.454" fill="#0D0A0D" />
              <circle cx="650" cy="340" r="545.189" fill="#0F0C0F" />
              <circle cx="650" cy="340" r="373.934" fill="#110E11" />
              <circle cx="650" cy="340" r="212.105" fill="#131013" />
            </g>
          </svg>
        </div>
        <div className=" space-y-4 flex-1">
          <h3>The Leadership</h3>
          <p>
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, dictum
            est a, mattis tellus. Sed dignissim.
          </p>
        </div>
        <div className=" space-y-6 w-full flex-1">
          <Card
            name="Olamide Samuel"
            image="/images/hero.png"
            title="Founder & Chief Product Officer"
          />
          <Card
            name="Olamide Samuel"
            image="/images/hero.png"
            title="Founder & Chief Product Officer"
          />
          <Card
            name="Olamide Samuel"
            image="/images/hero.png"
            title="Founder & Chief Product Officer"
          />
        </div>
      </div>
    </section>
  );
};

export default Vision;
