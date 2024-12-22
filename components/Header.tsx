"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md mx-auto">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-gray-600 text-2xl font-bold">
          <Link href="/">Moving Quote Taxes</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-6 text-lg">
          <li className="hover:text-gray-800">
            <Link href="/home">Home</Link>
          </li>

          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span className=" group-hover:text-gray-800">Services</span>
              <ChevronDown className="ml-2 w-4 h-14 text-gray-500 group-hover:text-gray-800" />
            </div>
            <ul className="absolute left-0 mt-2 w-36 bg-gray-100 text-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible h-48 overflow-y-auto">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/long-distance-moving">
                  Long Distance Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/auto-transport">Auto Transport</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/storage-solutions">
                  Storage Solutions
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/commercial-moving">
                  Commercial Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/corporate-relocation">
                  Corporate Relocation
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/specialized-moving">
                  Specialized Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/small-moves">Small Moves</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/moving-box">Moving Box</Link>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span className=" group-hover:text-gray-800">Blog</span>
              <ChevronDown className="ml-2 w-4 h-4 text-gray-500 group-hover:text-gray-800" />
            </div>
            <ul className="absolute left-0 mt-2 w-10 xl:w-44 bg-gray-100 text-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible h-48 overflow-y-auto">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/blog">Moving Taxes: What You Need to Know</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/auto-transport">Blog 2</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/storage-solutions">Blog 3</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/commercial-moving">Blog 4</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/corporate-relocation">Blog 5</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/specialized-moving">Blog 6</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/small-moves">Blog 7</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/services/moving-box">Blog 8</Link>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span className=" group-hover:text-gray-800">About Us</span>
              <ChevronDown className="ml-2 w-4 h-4 text-gray-500 group-hover:text-gray-800" />
            </div>
            <ul className="absolute left-0 mt-2 w-48 bg-gray-100 text-gray-700 shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <li className="px-4 py-2 hover:bg-gray-200">
                <Link href="/about-us/testimonials">Testimonials</Link>
              </li>
            </ul>
          </li>

          <li className="hover:text-gray-800">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-50 shadow-md flex flex-col text-lg md:hidden">
            <li className="px-4 py-2  hover:bg-gray-100">
              <Link href="/services">Services</Link>
            </li>
            <li className="px-4 py-2  hover:bg-gray-100">
              <Link href="/about-us/testimonials">About Us</Link>
            </li>
            <li className="px-4 py-2  hover:bg-gray-100">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 py-2  hover:bg-gray-100">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeaderMenu;
