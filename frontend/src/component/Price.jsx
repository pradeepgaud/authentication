import React from "react";
import Card from "./Card";

function price() {
  return (
    <div className="bg-black text-white py-10 px-4 sm:px-8 lg:px-[10rem]">
      <div className="flex justify-between place-items-center">
      <h3 className="text-2xl md:text-3xl pl-8 font-semibold mb-4 text-start">
          Start today, with free or premium <br /> plan, you choose
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between
 ">
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default price;
