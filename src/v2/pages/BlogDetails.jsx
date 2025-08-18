import { useSearchParams } from "react-router-dom";
import { useBlogById, useBlogs } from "../../queries/blogs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "../components/Shimmers/Loader";
import ErrorCard from "../components/Shimmers/ErrorCard";
import BlogCard from "../components/BlogCard";

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading, error } = useBlogById(id);
  const { data: blogData } = data || {};

  const { data: moreBlogs } = useBlogs(3);
  console.log("moreBlogs", moreBlogs);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="pl-6 md:mx-[25%]">
        <div className="mt-28 flex h-full w-full flex-col items-center justify-center">
          <ErrorCard text={"Uh..Uhh!... Server refused to repond."} />
        </div>
      </div>
    );

  const content = blogData?.content || [];
  const firstParagraph = content.find((block) => block.type === "paragraph");
  const remainingContent = content.filter((block) => block !== firstParagraph);

  return (
    <div className="mx-[6%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-6 md:mt-28 border-b-2 border-dashed border-gray-600">
        <p className="font-slabo text-2xl text-gray-400">
          {new Date(blogData?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="font-slabo text-4xl text-white">{blogData?.title}</h1>
        {firstParagraph && (
          <p className="font-slabo text-lg text-gray-400">
            {firstParagraph.children.map((child, i) => {
              if (child.bold) return <strong key={i}>{child.text}</strong>;
              if (child.code)
                return (
                  <code
                    className="rounded bg-gray-800 p-2 text-yellow-400"
                    key={i}
                  >
                    {child.text}
                  </code>
                );
              return child.text;
            })}
          </p>
        )}
        {blogData?.cover_image && (
          <img
            src={blogData?.cover_image?.url}
            alt="Blog Cover"
            className="my-4 h-auto w-full rounded-lg"
          />
        )}
        <div className="prose max-w-full break-words px-2 font-slabo text-base text-gray-300 md:text-lg">
          <BlocksRenderer
            content={remainingContent}
            modifiers={{
              bold: ({ children }) => (
                <strong className=" font-bold tracking-wide text-white">
                  {children}
                </strong>
              ),
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
              code: ({ children }) => {
                return (
                  <span className="break-words rounded bg-slate-300 px-1 py-[2px] text-blue-600 sm:px-2">
                    {children}
                  </span>
                );
              },
            }}
          />
        </div>
      </div>
      <div>
        <h2 className="mt-10 mb-4 text-2xl font-bold text-white font-slabo">
          Read More Blogs
        </h2>
        <div className="flex flex-col gap-6 md:flex-row md:flex-wrap py-4">
          {moreBlogs?.pages[0]?.data?.map((blog) => (
            <BlogCard key={blog.documentId} blog={blog} size="small" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
