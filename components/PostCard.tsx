import Link from "next/link";

interface PostCardProps {
  image: string;
  title: string;
  body: string;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, body, link }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{body}</p>
      <Link href={link} className="text-blue-500 hover:underline mt-2 block">
        Read more...
      </Link>
    </div>
  );
};

export default PostCard;
