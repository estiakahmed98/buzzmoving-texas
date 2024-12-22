"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { VscAccount } from "react-icons/vsc";
import { postdata } from "@/app/data/postdata";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  return (
    <header className="bg-[#191C27] shadow-md border-b border-gray-300">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/image/logo.png" alt="Company Logo" className="size-auto" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <ul className="hidden text-white md:flex items-center space-x-10 font-semibold text-lg">
          <li>
            <Link href="/home">Home</Link>
          </li>

          <li
            className="group relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center cursor-pointer">
              <span>Services</span>
              <ChevronDown className="ml-2 w-4 h-4 text-white" />
            </div>

            {hoveredMenu === "services" && (
              <div className="absolute left-0 mt-5 w-96 bg-white text-black shadow-lg rounded-xl p-6">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src="/image/delevery2.jpg"
                      alt="Best Services"
                      className="w-full h-auto rounded-md mb-4"
                    />
                    <h4 className="text-lg font-bold">Best Service</h4>
                    <p className="text-sm text-gray-600">
                      Explore our top-rated services tailored to meet your
                      needs.
                    </p>
                  </div>

                  {/* Links Section */}
                  <div className="w-2/3 gap-4 pl-6">
                    <div>
                      <div className="py-2">
                        <h5 className="text-lg font-bold mb-2">Our Services</h5>
                        <hr />
                      </div>

                      <ul className="space-y-1 text-md">
                        <li>
                          <Link
                            href="/services/long-distance-moving"
                            className="text-gray-700 hover:text-blue-500"
                          >
                            Long Distance Moving
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/auto-transport"
                            className="text-gray-700 hover:text-blue-500"
                          >
                            Auto Transport
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/storage-solutions"
                            className="text-gray-700 hover:text-blue-500"
                          >
                            Storage Solutions
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/home-changes"
                            className="text-gray-700 hover:text-blue-500"
                          >
                            Home Changes
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          <li
            className="group relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center cursor-pointer">
              <span>About Us</span>
              <ChevronDown className="ml-2 w-4 h-4 text-white" />
            </div>
            {hoveredMenu === "about" && (
              <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-xl opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out invisible">
                <li className="px-4 py-2 hover:text-blue-600">
                  <Link href="/about-us/testimonial">Testimonials</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li
            className="group relative"
            onMouseEnter={() => handleMouseEnter("blogs")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center cursor-pointer">
              <span>Blog</span>
              <ChevronDown className="ml-2 w-4 h-4 text-white" />
            </div>

            {hoveredMenu === "blogs" && (
              <div className="absolute left-0 mt-5 w-[500px] bg-white text-black shadow-lg rounded-xl p-6">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src="/image/delevery4.jpg"
                      alt="Explore Blogs"
                      className="w-full h-auto rounded-md mb-4"
                    />
                    <h4 className="text-lg font-bold">Explore Blogs</h4>
                    <p className="text-sm text-gray-600">
                      Discover insights, tips, and stories on a variety of
                      topics.
                    </p>
                  </div>

                  <div className="w-3/4 pl-6 overflow-y-auto h-80 ">
                    <div>
                      <div className="py-2 flex justify-between">
                        <h5 className="text-lg font-bold mb-2">Our Blogs</h5>
                        <div className="bg-orange-500 p-2 text-white rounded-full">
                          Count: {postdata.length}
                        </div>
                        <hr />
                      </div>

                      <ul className="space-y-4 border bottom-2 text-md">
                        {postdata.map((id) => (
                          <li key={id.ID}>
                            <Link
                              href={`/blog/${id.ID}`}
                              className="text-gray-700 hover:text-blue-500"
                            >
                              {id.post_title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        {/* Right Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-2 py-1 rounded-full border font-semibold">
            Sign Up
          </button>
          <button className="p-2 rounded-full">
            <VscAccount className="size-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col text-lg md:hidden">
          <li className="px-4 py-2 border-b">
            <Link href="/home">Home</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link href="/services">Services</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link href="/about-us/testimonials">About Us</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="px-4 py-2 border-b">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default HeaderMenu;
