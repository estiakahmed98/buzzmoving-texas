import Link from "next/link";

const RelatedPost = () => {
  return (
    <div className="container mx-auto mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="./image/moving-image-2.jpg"
            alt="Article 1"
            className="w-full h-40 object-cover rounded-xl"
          />
          <h3 className="mt-4 font-semibold text-lg">
            10 Essential Tips for a Stress-Free Moving Experience
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Learn how to simplify your move and avoid common pitfalls with these
            expert tips.
          </p>
          <Link
            href="/article-1"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Read more...
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="./image/moving-image-3.jpg"
            alt="Article 2"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-4 font-semibold text-lg">
            The Ultimate Guide to Packing Like a Pro for Your Next Move
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Discover packing techniques and strategies to protect your
            belongings during transit.
          </p>
          <Link
            href="/article-2"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Read more...
          </Link>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <img
            src="./image/moving-image-4.jpg"
            alt="Article 3"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-4 font-semibold text-lg">
            How to Save Money on Moving Costs: A Complete Breakdown
          </h3>
          <p className="text-gray-600 mt-2 text-sm">
            Explore practical ways to reduce expenses and stay within budget for
            your next move.
          </p>
          <Link
            href="/article-3"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
