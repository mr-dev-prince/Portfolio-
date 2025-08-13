const BlogCard = ({ blog }) => {
  const previewText =
    blog?.content
      ?.find((block) => block.type === "paragraph")
      ?.children?.map((child) => child.text)
      .join(" ") || "";

  const imageUrl = blog?.cover_image?.url;

  return (
    <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800/60 p-3">
      <div className="h-[400px] w-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={blog?.cover_image?.alternativeText || blog?.title}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-gray-500 text-xs">
          {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h2 className="text-2xl font-bold font-sans tracking-wide text-white">{blog?.title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{previewText}</p>
      </div>
    </div>
  );
};

export default BlogCard;
