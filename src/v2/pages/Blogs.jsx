import { useEffect } from "react";
import { useBlogs } from "../../queries/blogs";
import BlogCard from "../components/BlogCard";
import CardShimmer from "../components/Shimmers/CardShimmer";
import ErrorCard from "../components/Shimmers/ErrorCard";

const Blogs = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useBlogs(5);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <div className="mx-[5%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex flex-col gap-2 md:mt-28">
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
          <ErrorCard text="Blogs took an unexpected coffee break. Try again later!" />
        )}
        {data?.pages?.flatMap((page) =>
          page.data.map((b) => <BlogCard key={b.documentId} blog={b} />)
        )}

        {isFetchingNextPage && (
          <>
            <CardShimmer />
            <CardShimmer />
          </>
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
