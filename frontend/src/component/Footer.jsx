import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
function footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 sm:px-8 lg:px-[10rem]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-sm px-3">
        {/* Headline & Buttons */}
        <div className="md:col-span-2">
          <p className="w-2/3">
            on the other hand, we document with, righteous indigntion and
            dislikes men who ore so beguiled and demoralized by the charems
          </p>
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
        {/* Product */}
        <div>
          <h3 className="font-semibold text-[FFFFFF] mb-2">Contact</h3>
          <ul className="space-y-1">
            {[
              "Youremail@saas.com",
              "+012-345-678-90",
              "St. Lonon Maeren 01928",
            ].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Usecases */}
        <div>
          <h3 className="font-semibold text-[FFFFFF]  mb-2">Resoures</h3>
          <ul className="space-y-1">
            {["Api Docs", "Tutorial Vidio", "User Guide"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Company */}
        <div>
          <h3 className="font-semibold text-[FFFFFF]  mb-2">Help & Contact</h3>
          <ul className="space-y-1 mb-6">
            {["Support", "Terms & Conditons", "Privacy Policy"].map((item) => (
              <li key={item} className="hover:underline cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-12 border-t border-white/20 pt-6 text-sm flex flex-col md:flex-row justify-between items-start text-white/60 gap-4 px-4">
        <div className="grid grid-cols-3 gap-3">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-6 w-24"
          />
        </div>
        <div>
          {/* <ul className="flex space-x-6"> */}
          <ul className="flex item-start flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xs text-gray-400">
          © 2022 Digital Marketing. With love by Elmouse
        </div>
      </div>
    </footer>
  );
}

export default footer;
