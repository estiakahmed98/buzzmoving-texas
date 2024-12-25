"use client";

import React from "react";
import Link from "next/link";
import { postdata } from "@/app/data/postdata";

interface Post {
  ID: string;
  post_author: string;
  post_date: string;
  post_date_gmt: string;
  post_content: string;
  post_title: string;
}

const extractFirstImage = (htmlContent: string): string | null => {
  if (typeof window !== "undefined") {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    const imgElement = doc.querySelector("img");
    return imgElement ? imgElement.getAttribute("src") : null;
  }
  return null;
};

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {postdata.map((post: Post) => {
          const imageUrl = extractFirstImage(post.post_content);
          return (
            <div key={post.ID} className="bg-white rounded-lg shadow-md p-4">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={post.post_title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">{post.post_title}</h2>
              <p className="text-gray-500 text-sm mb-4">
                Published on: {new Date(post.post_date).toLocaleDateString()}
              </p>
              <div
                className="text-gray-700 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{
                  __html: post.post_content.slice(0, 200) + "...",
                }}
              />
              <Link
                href={`/blog/${post.ID}`}
                className="px-4 py-2 mt-4 inline-block text-sm rounded-[5px] font-medium text-white bg-blue-600 shadow hover:bg-blue-800 transition duration-300"
              >
                Read more
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
