import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; // Use Link to route to the individual pages
import { client } from "@/app/lib/sanity";
import { pepeBlogCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";

async function getData() {
  try {
    const query = `
      *[_type == "post"]{
        title,
        "currentSlug": slug.current,
        mainImage,
        publishedAt
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
    return <p>Error loading data.</p>;
  }

  return (
    <main className="container mx-auto flex justify-center px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {data.map((post, idx) => (
          <Card
            key={idx}
            className="w-80 overflow-hidden rounded-lg bg-card dark:border-none"
          >
            <Link href={`/blog/${post.currentSlug}`}>
              {post.mainImage && post.mainImage.asset && (
                <div className="relative h-60 w-full">
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold leading-tight text-gray-800 dark:text-gray-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}

// Add revalidation to ensure that the cached pages are updated periodically
export const revalidate = 60; // Regenerate the page every 60 seconds
