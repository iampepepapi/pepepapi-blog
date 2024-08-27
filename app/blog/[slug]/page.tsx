import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import remarkRehype from "remark-rehype";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanity";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

async function getPostData(slug: string) {
  try {
    const query = `
      *[_type == "post" && slug.current == $slug][0]{
        title,
        mainImage,
        content,
        publishedAt,
         "author": author->name
      }
    `;
    const data = await client.fetch(query, { slug });
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Failed to fetch data");
  }
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width = 800,
  height = 400,
}) => (
  <div className="my-8 text-center">
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="mx-auto rounded-lg"
    />
  </div>
);

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <main className="container mx-auto px-4 py-8 md:px-12">
      {post.mainImage && post.mainImage.asset && (
        <Image
          src={urlFor(post.mainImage).url()}
          width={1200}
          height={600}
          alt={post.title}
          className="h-auto w-full rounded-lg"
        />
      )}
      <h1 className="mt-8 overflow-hidden text-wrap text-5xl font-bold text-gray-900 dark:text-gray-100 md:text-8xl">
        {post.title}
      </h1>
      <div className="my-4 flex gap-1 text-sm text-gray-500">
        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        <span>-</span>
        <p className="rounded-md border-neutral-800 bg-accent px-2 dark:border">
          {post.author}
        </p>
      </div>
      <article className="font-sans">
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[remarkRehype, rehypeStringify]}
          components={{
            h1: ({ children }) => (
              <h1 className="mb-2 text-2xl font-bold text-neutral-500">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-neutral-400">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <div className="mb-4 text-xl text-gray-800 dark:text-gray-100">
                {children}
              </div>
            ),
            ul: ({ children }) => (
              <ul className="mb-4 list-disc pl-5 text-gray-800 dark:text-gray-100">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="mb-4 list-decimal pl-5 text-gray-800 dark:text-gray-100">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="mb-2 text-gray-800 dark:text-gray-100">
                {children}
              </li>
            ),
            pre: ({ children }) => (
              <div className="mb-4 overflow-x-auto">{children}</div>
            ),
            code: ({ inline, className, children }: CodeProps) => {
              const match = /language-(\w+)/.exec(className || "");
              return inline ? (
                <code className="rounded bg-gray-200 px-1">{children}</code>
              ) : (
                <SyntaxHighlighter
                  style={a11yDark}
                  language={match ? match[1] : "plaintext"}
                  PreTag="div"
                  className="mb-4 rounded-lg p-4 text-[12px] md:text-base"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              );
            },
            img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
              <CustomImage src={props.src || ""} alt={props.alt || ""} />
            ),
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}

// Generate Static Params
export async function generateStaticParams() {
  const query = `*[_type == "post"]{"currentSlug": slug.current}`;
  const posts = await client.fetch(query);

  return posts.map((post: { currentSlug: string }) => ({
    slug: post.currentSlug,
  }));
}

// Regenerate static pages every 60 seconds
export const revalidate = 60;
