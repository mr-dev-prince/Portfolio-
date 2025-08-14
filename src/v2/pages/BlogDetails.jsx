import { useSearchParams } from "react-router-dom";
import { useBlogById } from "../../queries/blogs";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "../components/Shimmers/Loader";
import ErrorCard from "../components/Shimmers/ErrorCard";

const BlogDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data, isLoading, error } = useBlogById(id);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="pl-6 md:mx-[25%]">
        <div className="mt-28 flex h-full w-full flex-col items-center justify-center">
          <ErrorCard text={"Uh..Uhh!... Server refused to repond."} />
        </div>
      </div>
    );

  const content = data?.content || [];
  const firstParagraph = content.find((block) => block.type === "paragraph");
  const remainingContent = content.filter((block) => block !== firstParagraph);

  return (
    <div className="mx-[6%] min-h-screen md:mx-[25%] md:pl-6">
      <div className="mt-40 flex h-full w-full flex-col items-start justify-start gap-6 md:mt-28">
        <p className="font-slabo text-2xl text-gray-400">
          {new Date(data?.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className="font-slabo text-4xl text-white">{data?.title}</h1>
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
        {data?.cover_image && (
          <img
            src={data?.cover_image?.url}
            alt="Blog Cover"
            className="my-4 h-auto w-full rounded-lg"
          />
        )}
        <div className="prose mb-6 max-w-full break-words px-2 font-slabo text-base text-white sm:mb-8 sm:pl-4 sm:text-lg lg:text-xl">
          <BlocksRenderer
            content={remainingContent}
            modifiers={{
              bold: ({ children }) => (
                <strong className="font-sans font-bold tracking-wide text-white">
                  {children}
                </strong>
              ),
              italic: ({ children }) => (
                <span className="italic">{children}</span>
              ),
              code: ({ children }) => {
                return (
                  <span className="break-words rounded bg-gray-500 px-1 py-[2px] text-yellow-500 sm:px-2">
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
