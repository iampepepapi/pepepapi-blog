"use server";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { client } from "@/app/lib/sanity";
import { pepeBlogCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { ReactNode } from "react";

interface CodeProps {
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

async function getData() {
  try {
    const query = `
      *[_type == "post"]{
        title,
        "currentSlug": slug.current,
        mainImage,
        content
      }
    `;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    throw new Error("Failed to fetch data");
  }
}

export default async function BlogPageRenderer() {
  let data: pepeBlogCard[] = [];

  try {
    data = await getData();
  } catch (error) {
    console.error(error);
    return <p>Error loading data.</p>; // Show a user-friendly message
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center">
        {data.map((post, idx) => (
          <Card key={idx} className="m-4 w-full max-w-4xl p-8 shadow-lg">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {post.title}
            </h2>
            <p className="mb-6 text-sm text-gray-500">{post.currentSlug}</p>
            {post.mainImage && post.mainImage.asset && (
              <Image
                src={urlFor(post.mainImage).url()}
                width={800}
                height={400}
                alt={post.title}
                className="rounded-lg"
              />
            )}
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="my-4 text-4xl font-bold text-gray-900">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="my-4 text-3xl font-semibold text-gray-800">
                    {children}
                  </h2>
                ),
                p: ({ children }) => (
                  <p className="my-4 leading-relaxed text-gray-700">
                    {children}
                  </p>
                ),
                pre: ({ children }) => (
                  <div className="my-4 overflow-x-auto">{children}</div>
                ),
                code: ({ inline, className, children }: CodeProps) => {
                  const match = /language-(\w+)/.exec(className || "");
                  return inline ? (
                    <code className="rounded bg-gray-200 px-1 py-0.5">
                      {children}
                    </code>
                  ) : (
                    <SyntaxHighlighter
                      style={a11yDark}
                      language={match ? match[1] : "plaintext"}
                      PreTag="div"
                      className="mb-4 rounded-lg p-4"
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                },
                img: ({ alt, src }) => {
                  if (!src) return null; // Handle missing src case

                  const imageUrl = src.startsWith("http")
                    ? src
                    : urlFor(src).url();
                  return (
                    <Image
                      src={imageUrl}
                      alt={alt || "Image"}
                      width={600}
                      height={400}
                      className="my-4 rounded-lg"
                    />
                  );
                },
                ul: ({ children }) => (
                  <ul className="my-4 list-disc pl-5 text-gray-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-4 list-decimal pl-5 text-gray-700">
                    {children}
                  </ol>
                ),
              }}
            >
              {post.content}
            </Markdown>
          </Card>
        ))}
      </div>
    </main>
  );
}
