import Link from "next/link";
import PostCard from "@/components/PostCard";
import posts from "@/app/data/post";

interface Post {
  id: number;
  image: string;
  title: string;
  body: string;
  link: string;
}

const RelatedPost: React.FC = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <PostCard
            key={post.id}
            image={post.image}
            title={post.title}
            body={post.body}
            link={post.link}
          />
        ))}
      </div>

      <div className="p-4 flex justify-center">
        <Link
          href="/blog"
          className="px-4 py-2 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
        >
          VIEW MORE
        </Link>
      </div>
    </div>
  );
};

export default RelatedPost;
