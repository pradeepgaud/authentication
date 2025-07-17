import React from 'react';
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const testimonials = [
  {
    name: "Dulce Rosser",
    role: "Co-Founder, CEO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "15 August 2022",
  },
  {
    name: "Allison George",
    role: "Co-Founder, CTO",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    date: "16 August 2022",
  },
  {
    name: "Mundellce Kevin",
    role: "Co-Founder, COO",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    date: "20 August 2022",
  },
  {
    name: "Harvey Norris",
    role: "Co-Founder, CFO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    date: "22 August 2022",
  },
];

export default function TestimonialSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = [...testimonials, ...testimonials].slice(
    startIndex,
    startIndex + visibleCount
  );

  return (
    // sm:px-8 lg:px-[10rem]
    <div className="bg-black text-white py-10 px-4 sm:px-8 lg:px-[10rem]">
      <div className="flex justify-between place-items-center ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-start">
          What Our Customer Says
        </h2>
        <div className="flex justify-end mb-8  gap-4 mt-6">
          <button
            onClick={prev}
            className="p-2 bg-[#171717] rounded-full hover:bg-[#FF9C1F]"
          >
            <ArrowLeft className="text-white w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="p-2 bg-[#171717] rounded-full hover:bg-[#FF9C1F]"
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {visibleTestimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-[#171717] gray-400 p-6 rounded-xl w-full md:w-1/3 hover:bg-[#1f1f1f]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gray-500"></div>
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-[#FF9C1F]">{t.role}</p>
              </div>
            </div>
            <p className="text-sm mb-6">{t.content}</p>
            <div className="flex justify-between items-center text-sm text-[#ffffff]">
             <div className="flex gap-4 mt-5 mb-5">
                        <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-400 cursor-pointer" />
                      </div>
              <span className="text-gray-400 text-xs">{t.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
