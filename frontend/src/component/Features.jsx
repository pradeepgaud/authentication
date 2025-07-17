import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faGears,
  faDatabase,
  faChartColumn,
} from "@fortawesome/free-solid-svg-icons";

 const featureData = [
  {
    icon: faLock,
    title: "Fully Secured",
    description:
      "But who has any right to find fault with a man who chooses to enjoy a pleasure",
  },
  {
    icon: faGears,
    title: "Management",
    description:
      "But who has any right to find fault with a man who chooses to enjoy a pleasure",
  },
  {
    icon: faDatabase,
    title: "Strong Data",
    description:
      "But who has any right to find fault with a man who chooses to enjoy a pleasure",
  },
  {
    icon: faChartColumn,
    title: "Analysis",
    description:
      "But who has any right to find fault with a man who chooses to enjoy a pleasure",
  },
];

function Features() {
  return (
    <div className="bg-black text-white text-center py-10 px-4 sm:px-8 lg:px-[10rem]">
      <h1 className="text-4xl font-semibold mb-2 ">Features for you</h1>
      <p className="text-sm text-gray-400 mb-10 max-w-xl mx-auto">
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-3">
        {featureData.map((featureData, index) => (
          <div
            key={index}
            className="bg-[#111] p-6 rounded-xl text-white hover:shadow-xl transition hover:bg-[#1f1f1f]"
          >
            <FontAwesomeIcon
              icon={featureData.icon}
              className="text-[#FF9C1F] text-3xl mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{featureData.title}</h3>
            <p className="text-sm text-gray-400">{featureData.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
