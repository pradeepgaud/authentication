import React from 'react';
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support ",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Card() {
  return (
    // py-10 px-4 sm:px-8 lg:px-[10rem]
    // <div className="relative isolate bg-black px-1 py-2 sm:py-3 lg:px-2 ">
    <div className="relative isolate bg-black px-1 py-2 sm:py-3 lg:px-2 ">

      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-20 blur-2xl "
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-[50rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center gap-y-4 sm:mt-12 lg:max-w-2xl sm:m-auto ">
      {/* <div className="mx-auto mt-10 grid-cols-1 sm:grid-col-3 lg:grid-cols-3 gris w-fit items-center gap-y-4 "> */}

        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-[#171717] shadow-xl"
                : "bg-white/60 sm:mx-6 lg:mx-0",
              "rounded-2xl p-4 sm:p-5 ring-1 ring-gray-900/10 hover:bg-[#1f1f1f]"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-[#FF9C1F]" : "text-indigo-600",
                "text-base font-semibold border border-[#FF9C1F] p-2 rounded-md"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-3 flex items-baseline gap-x-1">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-4xl font-semibold"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-400" : "text-gray-500",
                  "text-sm"
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-4 text-sm"
              )}
            >
              {tier.description}
            </p>
            <ul
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 space-y-2 text-sm"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-2">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-indigo-400" : "text-indigo-600",
                      "h-6 w-2"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? " text-white hover:bg-[#FF9C1F] focus-visible:outline-indigo-500 border border-[#FFFFFF]"
                  : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:bg-[#FF9C1F] focus-visible:outline-indigo-600",
                "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
