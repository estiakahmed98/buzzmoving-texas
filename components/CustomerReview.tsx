import React from "react";
import Image from "next/image";

interface Review {
  name: string;
  role: string;
  date: string;
  rating: number;
  text: string;
  image: string;
}

const reviews: Review[] = [
  {
    name: "Estiak Ahmed",
    role: "Taxas Company",
    date: "14th Feb, 2024",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.",
    image: "/image/profile.png",
  },
  {
    name: "Juwel Rana",
    role: "Carlifonia",
    date: "14th Feb, 2024",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.",
    image: "/image/profile.png",
  },
  {
    name: "Faysal Ahmed",
    role: "Taxas Company",
    date: "14th Feb, 2024",
    rating: 4,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet.",
    image: "/image/profile.png",
  },
];

const CustomerReviews: React.FC = () => {
  return (
    <section className="bg-gray-50 p-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          What People <span className="text-red-600">Think About Us</span>
        </h2>
        <div className="mb-6">
          <div className="w-16 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <span key={idx} className="text-yellow-500">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-400">{review.date}</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">{review.text}</p>
              <div className="flex items-center mt-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-bold text-gray-700">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="px-6 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
