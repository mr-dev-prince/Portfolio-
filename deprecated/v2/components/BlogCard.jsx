import { Link } from "react-router-dom";

const BlogCard = ({ blog, size = "large" }) => {
  const previewText =
    blog?.content
      ?.find((block) => block.type === "paragraph")
      ?.children?.map((child) => child.text)
      .join(" ") || "";

  const imageUrl = blog?.cover_image?.url;

  return (
    <Link
      to={`/blogs/${blog.slug}?id=${blog.documentId}`}
      className={`overflow-hidden rounded-xl bg-gray-800/60 shadow-md transition-shadow duration-300 hover:shadow-lg 
        ${size === "small" ? "flex p-2" : "p-3"}`}
    >
      <div
        className={`${
          size === "small"
            ? "w-1/3 h-full flex-shrink-0"
            : "w-full md:h-[400px]"
        }`}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={blog?.cover_image?.alternativeText || blog?.title}
            className="h-full w-full rounded-lg object-cover"
          />
        )}
      </div>

      <div
        className={`flex flex-col gap-2 ${
          size === "small" ? "p-2 w-2/3" : "p-3"
        }`}
      >
        <p className="text-xs text-gray-500">
          {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h2
          className={`font-sans font-bold tracking-wide text-white 
            ${size === "small" ? "text-lg" : "text-xl md:text-2xl"}`}
        >
          {blog?.title}
        </h2>
        <p
          className={`line-clamp-3 text-sm text-gray-600 ${
            size === "small" ? "hidden" : ""
          }`}
        >
          {previewText}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
