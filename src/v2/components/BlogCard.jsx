import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const previewText =
    blog?.content
      ?.find((block) => block.type === "paragraph")
      ?.children?.map((child) => child.text)
      .join(" ") || "";

  const imageUrl = blog?.cover_image?.url;

  return (
    <Link
      to={`/blogs/${blog.slug}?id=${blog.documentId}`}
      className="overflow-hidden rounded-xl bg-gray-800/60 p-3 shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="w-full md:h-[400px]">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={blog?.cover_image?.alternativeText || blog?.title}
            className="h-full w-full rounded-lg object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-3">
        <p className="text-xs text-gray-500">
          {new Date(blog?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h2 className="font-sans text-xl font-bold tracking-wide text-white md:text-2xl">
          {blog?.title}
        </h2>
        <p className="line-clamp-3 text-sm text-gray-600">{previewText}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
