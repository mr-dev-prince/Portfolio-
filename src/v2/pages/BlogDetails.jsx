import { useSearchParams } from "react-router-dom";
import { useBlogById } from "../../queries/blogs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading, error } = useBlogById(id);

  if (isLoading) return <p className="text-white">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading blog</p>;

  const content = data?.content || [];
  const firstParagraph = content.find((block) => block.type === "paragraph");
  const remainingContent = content.filter((block) => block !== firstParagraph);

  return (
    <div className="min-h-screen mx-[25%] pl-6">
      <div className="w-full h-full flex mt-28 flex-col justify-start items-start gap-6">
        <p className="text-gray-400 font-slabo text-2xl">
          {new Date(data?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="font-slabo text-white text-4xl">{data?.title}</h1>
        {firstParagraph && (
          <p className="text-gray-400 font-slabo text-lg">
            {firstParagraph.children.map((child, i) => {
              if (child.bold) return <strong key={i}>{child.text}</strong>;
              if (child.code)
                return (
                  <code
                    className="bg-gray-800 text-yellow-400 p-2 rounded"
                    key={i}
                  >
                    {child.text}
                  </code>
                );
              return child.text;
            })}
          </p>
        )}
        {data?.cover_image && (
          <img
            src={data?.cover_image?.url}
            alt="Blog Cover"
            className="w-full h-auto rounded-lg my-4"
          />
        )}
        <div className="mb-8 pl-4 text-white prose font-slabo text-lg">
          <BlocksRenderer
            content={remainingContent}
            modifiers={{
              bold: ({ children }) => (
                <strong className="text-white font-sans font-bold tracking-wide">
                  {children}
                </strong>
              ),
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
              code: ({ children }) => {
                return (
                  <span className="bg-gray-500 text-yellow-500 px-2 py-[2px] rounded">
                    {children}
                  </span>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
