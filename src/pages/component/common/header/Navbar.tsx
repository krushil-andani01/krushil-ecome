import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="hidden lg:flex gap-12 2xl:ml-16">
        <ul className="flex gap-x-10">
          <li className="">
            <p className="text-green-700 hover:text-green-700 active:text-green-900 text-lg font-bold transition duration-100">
              All Category
            </p>
          </li>
          <li>
            <Link
              href="/"
              className="text-gray-600 hover:text-green-700 active:text-green-900 text-lg font-semibold transition duration-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-green-700 active:text-green-900 text-lg font-semibold transition duration-100"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-green-700 active:text-green-900 text-lg font-semibold transition duration-100"
            >
              Collection
            </Link>
          </li>

          {/* <li>
            <Link
              href="/contactUs"
              className="text-gray-600 hover:text-green-700 active:text-green-900 text-lg font-semibold transition duration-100"
            >
              Contact Us
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
