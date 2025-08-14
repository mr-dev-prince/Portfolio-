import { Link } from "react-router-dom";
import { useBlogs } from "../../queries/blogs";
import BlogCard from "./BlogCard";
import CardShimmer from "./Shimmers/CardShimmer";
import ErrorCard from "./Shimmers/ErrorCard";

const RecentBlogs = () => {
  const { data, isLoading, error } = useBlogs();

  if (error) {
    return (
      <ErrorCard text="The blogs took an unexpected coffee break. Try again later!" />
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        {Array.from({ length: 3 }, (_, index) => (
          <CardShimmer key={index} />
        ))}
      </div>
    );
  }

  if (!data?.length) {
    return (
      <ErrorCard text="No blogs found. Maybe it's time to write the first one?" />
    );
  }

  return (
    <section>
      <div className="flex w-full items-center justify-between">
        <p className="font-slabo text-4xl text-white">Recent Blogs</p>
        <Link
          to="/work"
          className="cursor-pointer rounded-md bg-gray-600 px-3 py-1 font-mono text-xs text-gray-300 transition-transform duration-200 hover:scale-110 hover:bg-gray-800 hover:text-blue-500"
          style={{ display: "inline-block" }}
        >
          <p className="transform-none text-sm">View more</p>
        </Link>
      </div>
      <div className="mt-6 flex flex-col gap-8">
        {data.map((blog) => (
          <BlogCard key={blog.documentId} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default RecentBlogs;
