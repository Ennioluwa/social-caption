import BlogCard from "./blog-card";

const Blog = () => {
  return (
    <div className="relative px-8 lg:px-12 py-28  w-full overflow-clip container">
      <div className="flex flex-col gap-8 lg:pt-12">
        <div className="flex lg:items-center justify-between gap-5 lg:gap-20 flex-col lg:flex-row">
          <h1 className=" text-nowrap">Socialcaption Blog</h1>
          <p className="">
            Stories, insights, and advice that will transform how you design and
            build for the web.
          </p>
        </div>
        <hr />
        <h2>Top Insights</h2>
        <div className="flex gap-6">
          <div className="flex-1 flex flex-col gap-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="flex-1 border rounded-lg p-6 h-fit relative w-full bg-transparent">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <svg
                width="638"
                height="388"
                viewBox="0 0 638 388"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.88">
                  <circle cx="579.999" cy="254" r="606" fill="#0B090B" />
                  <circle cx="579.999" cy="254" r="497.322" fill="#0D0A0D" />
                  <circle cx="579.999" cy="254" r="409.906" fill="#0F0C0F" />
                  <circle cx="579.999" cy="254" r="281.146" fill="#110E11" />
                  <circle cx="580" cy="254" r="159.474" fill="#131013" />
                </g>
              </svg>
            </div>
            <div className=" flex flex-col gap-5">
              <h6>INSIDE SOLCAPTION</h6>
              <h3>
                Socialcaption&apos;s new look: Designing a product for small
                businesses and pros
              </h3>
              <p>
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                dictum est a, mattis.
              </p>
              <p>by Williams Oluwaseun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
