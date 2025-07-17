import React from "react";

function Service() {
  return (
    // <div className="bg-black text-white px-4 py-6 lg:px-29 lg:py-30 ">
    <div className="bg-black text-white py-10 px-4 sm:px-8 lg:px-[10rem]">

      <div className="max-w-[1440px] m-auto flex flex-col md:flex-row items-center justify-between gap-12 ">
        {/* Lift */}
        <div className='"md:w-1/2"'>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Create a brand story that <br /> push your business
          </h1>
          <p className="text-gray-400 mb-8 max-w-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </p>
          <button className="bg-[#FF9C1F] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-400 transition">
            Get Started
          </button>
        </div>
        {/* Right */}
        <div className="md:w-1/2">
          <img src="https://images.pexels.com/photos/31469971/pexels-photo-31469971/free-photo-of-serene-mountain-landscape-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="w-full max-w-xl mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default Service;
