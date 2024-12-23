"use client";

import Link from "next/link";
import { postdata } from "@/app/data/postdata";

const extractFirstImage = (htmlContent: string): string | null => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const imgElement = doc.querySelector("img");
  return imgElement ? imgElement.getAttribute("src") : null;
};

const RelatedPost: React.FC<{ currentPostID: string }> = ({
  currentPostID,
}) => {
  // Filter related posts (exclude the current post and limit to 3)
  const relatedPosts = postdata
    .filter((post) => post.ID !== currentPostID)
    .slice(1, 4);

  return (
    <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => {
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
              <h3 className="text-xl font-semibold mb-2">{post.post_title}</h3>
              <p className="text-gray-500 text-sm mb-4">
                Published on: {new Date(post.post_date).toLocaleDateString()}
              </p>
              <div
                className="text-gray-700 leading-relaxed text-base"
                dangerouslySetInnerHTML={{
                  __html: post.post_content.slice(0, 150) + "...",
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

export default RelatedPost;
