import { useBlogs } from "../../queries/blogs";
import CardShimmer from "../components/Shimmers/CardShimmer";
import ErrorCard from "../components/Shimmers/ErrorCard";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const { data, isLoading, error } = useBlogs();
  return (
    <div className="min-h-screen mx-[25%] pl-6">
      <div className="w-full h-full flex mt-28 flex-col justify-start items-start gap-2">
        <p className="font-slabo text-white text-4xl">
          Mildly Entertaining Code Tales.
        </p>
        <p className="text-2xl mt-2 text-gray-400 font-slabo">
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
      <div className="border-t-2 border-gray-600 border-dashed pt-6 mb-8">
        <p className="font-slabo text-lg text-gray-400">
          I keep writing, hoping one day my code will write itself. Until then,
          enjoy the chaos!
        </p>
      </div>
    </div>
  );
};

export default Blogs;
