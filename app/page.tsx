import CustomerReviews from "@/components/CustomerReview";
import EmailSubscription from "@/components/EmailSubmission";
import HeroSection from "@/components/hero";
import RelatedPost from "@/components/RelatedPost";
import VideoReviews from "@/components/VideoReview";

const page = () => {
  return (
    <>
      <div className=" border border-blue-500 bottom-56">
        <HeroSection />
        <h2 className="text-3xl font-semibold mb-4 mt-5 pl-5">
          Recent Articles
        </h2>
        <RelatedPost />
        <VideoReviews />
        <CustomerReviews />
        <EmailSubscription />
        <div className="h-32"></div>
      </div>
    </>
  );
};

export default page;
