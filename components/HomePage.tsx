import CustomerReviews from "@/components/CustomerReview";
import EmailSubscription from "@/components/EmailSubmission";
import HeroSection from "@/components/hero";
import RelatedPost from "@/components/RelatedPost";
import VideoReviews from "@/components/VideoReview";
import MovingCalculator from "./CostCalculator";
import Accordion from "./AccadianDesign";

const HomePage = () => {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <div>
          <h2 className="text-3xl font-bold text-center mt-7 pl-5">
            Recent <span className="text-orange-600">Articles</span>
          </h2>
          <div className="mb-6 mt-2">
            <div className="w-16 h-1 bg-orange-600 mx-auto"></div>
          </div>
        </div>
        <RelatedPost currentPostID="119" />
        <CustomerReviews />
        <VideoReviews />
        <Accordion />
        <EmailSubscription />
      </div>
    </>
  );
};

export default HomePage;
