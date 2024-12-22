"use client";

import RelatedPost from "./RelatedPost";
import EmailSubscription from "./EmailSubmission";
import TagList from "./TagList";

const PostPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
            Moving Taxes
          </span>
          <h1 className="text-3xl font-bold mt-4">
            Moving Taxes: What You Need to Know
          </h1>
          <p className="text-gray-500 mt-2">October 20, 2025</p>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-8 p-8 rounded-lg shadow-md">
        {/* Main Content */}
        <div className=" col-span-10 ">
          <img
            src="./image/moving-image-1.jpg"
            alt="Moving Taxes"
            className="w-full h-auto rounded-xl object-cover"
          />
          <h2 className="text-2xl font-semibold mt-6">
            Understanding Moving Taxes: A Comprehensive Guide
          </h2>
          <p className="text-gray-600 mt-4">
            Moving to a new home is an exciting yet complex process. Among the
            numerous aspects to consider, moving taxes are often overlooked.
            This guide provides valuable insights into the tax implications of
            relocating, helping you plan better and save money.
          </p>

          <h3 className="text-lg font-bold mt-6">
            1. Are Moving Expenses Tax Deductible?
          </h3>
          <p className="text-gray-600 mt-2">
            The Tax Cuts and Jobs Act (TCJA) of 2017 significantly changed the
            tax landscape for moving expenses. For most individuals, moving
            expenses are no longer tax-deductible. However, active-duty military
            personnel relocating due to a military order can still claim these
            deductions.
          </p>

          <h3 className="text-lg font-bold mt-6">2. State Taxes on Moving</h3>
          <p className="text-gray-600 mt-2">
            Some states impose taxes related to moving. For instance,
            transferring the title of your vehicle to a new state might incur
            additional fees or taxes. It's essential to check your new state's
            tax policies to avoid surprises.
          </p>

          <h3 className="text-lg font-bold mt-6">
            3. Employer-Paid Moving Expenses
          </h3>
          <p className="text-gray-600 mt-2">
            If your employer reimburses your moving expenses, these amounts are
            generally considered taxable income. Ensure that you account for
            these reimbursements when filing your tax returns.
          </p>

          <h3 className="text-lg font-bold mt-6">
            4. Tax Implications of Selling Your Home
          </h3>
          <p className="text-gray-600 mt-2">
            Selling your home as part of a move can have tax consequences. The
            IRS allows exclusions on capital gains tax for home sales, but
            specific conditions must be met. For example, you must have owned
            and lived in the home for at least two out of the last five years.
          </p>

          <h3 className="text-lg font-bold mt-6">
            5. Deducting Work-Related Moves
          </h3>
          <p className="text-gray-600 mt-2">
            While most moving expenses aren't deductible anymore, exceptions
            exist for work-related moves in certain circumstances. Consult a tax
            professional to understand if your situation qualifies.
          </p>

          <h3 className="text-lg font-bold mt-6">
            6. Tips to Reduce Moving Costs
          </h3>
          <p className="text-gray-600 mt-2">
            Though not directly related to taxes, reducing moving costs can
            significantly ease financial strain. Plan your move during off-peak
            seasons, declutter to minimize load, and compare quotes from
            multiple movers.
          </p>

          <p className="text-gray-600 mt-6">
            Understanding the tax implications of moving is crucial for
            effective financial planning. By staying informed and seeking
            professional advice, you can navigate the complexities of moving
            taxes and make your relocation smoother and more cost-effective.
          </p>
        </div>
        <TagList />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center mt-7 pl-5">
          Related <span className="text-orange-600">Articles</span>
        </h2>
        <div className="mb-6 mt-2">
          <div className="w-16 h-1 bg-orange-600 mx-auto"></div>
        </div>
      </div>
      <RelatedPost />

      <div className="mx-auto pt-6 ">
        <EmailSubscription />
      </div>
    </div>
  );
};

export default PostPage;
