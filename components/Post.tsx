"use client";

import Link from "next/link";
import RelatedPost from "./RelatedPost";

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
        <div className="h-14 col-span-2 p-4">
          <h2 className="text-xl font-semibold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              Moving Expenses
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
              Tax Benefits
            </span>
            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
              Relocation Tips
            </span>
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
              Property Taxes
            </span>
            <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
              Moving Checklist
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4 mt-5 pl-5">Related Articles</h2>
      <RelatedPost />

      <div className="bg-green-600 text-white text-center py-12 mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Reliable Tips for a Smooth Transition to Your New Home.
        </h2>
        <Link
          href="/subscribe"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Subscribe Now
        </Link>
      </div>
      <div className="h-[120px]"></div>
    </div>
  );
};

export default PostPage;
