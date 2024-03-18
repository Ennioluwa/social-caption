const BlogCard = () => {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-6">
      <div className="flex-1 bg-gray rounded-lg h-[200px] w-full"></div>
      <div className="flex-1">
        <h6>INSIDE SOCIALCAPTION</h6>
        <h4 className=" hover:underline mt-4">
          How to integrate socialcaption into business tools
        </h4>
      </div>
    </div>
  );
};

export default BlogCard;
