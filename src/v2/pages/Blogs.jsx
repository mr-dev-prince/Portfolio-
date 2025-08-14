import { useBlogs } from "../../queries/blogs";
import CardShimmer from "../components/Shimmers/CardShimmer";
import ErrorCard from "../components/Shimmers/ErrorCard";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const { data, isLoading, error } = useBlogs();
  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-2 md:mt-28">
        <p className="font-slabo text-4xl text-white">
          Mildly Entertaining Code Tales.
        </p>
        <p className="mt-2 font-slabo text-2xl text-gray-400">
          May contain bugs, coffee-fueled rants, and random tech adventures.
        </p>
      </div>
      <div className="my-8 flex flex-col gap-8">
        {isLoading && (
          <>
            <CardShimmer />
            <CardShimmer />
            <CardShimmer />
          </>
        )}

        {error && (
          <ErrorCard
            text={"Blogs refused to load ! They need some coffee..."}
          />
        )}

        {!isLoading &&
          !error &&
          data?.length > 0 &&
          data.map((b) => <BlogCard key={b.documentId} blog={b} />)}

        {!isLoading && !error && data?.length === 0 && (
          <ErrorCard
            text={
              "I think I forgot that I have a blogs section on my portfolio."
            }
          />
        )}
      </div>
      <div className="mb-8 border-t-2 border-dashed border-gray-600 pt-6">
        <p className="font-slabo text-lg text-gray-400">
          I keep writing, hoping one day my code will write itself. Until then,
          enjoy the chaos!
        </p>
      </div>
    </div>
  );
};

export default Blogs;
