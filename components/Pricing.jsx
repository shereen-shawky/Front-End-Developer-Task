// components/PricingSection.jsx
"use client";
import DedicatedSupport from "./DedicatedSupport";
import Image from "next/image";

export default function PricingSection() {
  return (
    <section className="relative min-h-screen w-full text-white flex flex-col items-center justify-center px-6 py-20">
      <div
  aria-hidden="true"
  className="absolute inset-0 flex items-center justify-center overflow-hidden blur-[180px] z-10"
>
  <div
    style={{
      clipPath:
        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
    }}
    className="relative aspect-[1155/678] w-[65rem] rotate-[30deg] bg-gradient-to-tr from-[#00ff99] via-[#9089fc] to-[#ff80b5] opacity-70"
  />
</div>
{/* Heading */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl md:text-3xl font-medium">
          A plan for every need.
        </h2>
        <p className="text-gray-500 mt-3 font-medium text-lg">
          Whether you are just starting or require massive scale, we have a
          solution.
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {/* Hobby */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 shadow-xl flex flex-col relative">
          <div className="flex items-center mb-6">
            <span className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-green-500/10">
              <Image src="/hobby.svg" alt="Hobby Icon" width={20} height={20} />
              HOBBY
            </span>
          </div>
          <h3 className="text-4xl font-bold">$0</h3>
          <p className="mt-2 text-gray-400 text-md leading-relaxed">
            Great for personal use or <br/> a first step to explore <br/> the Scout
            platform.
          </p>
          <button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full">
            Sign Up
          </button>
          <ul className="mt-8 space-y-3 text-md text-gray-300">
            {[
                "100 Interactions (GPT-3.5 Only)",
                "Deploy 1 App",
                "Connect 1 Collection",
                "10GB of Storage",
                "Community Support \n (Discord)",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                <Image src="/check.svg" alt="check icon" width={30} height={30} />
                <span>{item}</span>
                </li>
            ))}
            </ul>

        </div>

        {/* Pro - with inner black shadow */}
        <div
          className="relative rounded-2xl p-6 flex flex-col backdrop-blur-md"
          style={{
            background:
              "radial-gradient(circle, rgba(195,140,245,0.25) 20%, #1A1A1A 80%)",
            boxShadow: "inset 0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          {/* Ribbon */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className=" text-white text-md font-medium px-6 py-3 rounded-full shadow-lg" style={{
            background:
              "radial-gradient(circle, rgba(195,140,245,0.25) 20%, #1A1A1A 80%)",
            boxShadow: "inset 0 4px 10px rgba(0,0,0,0.3)",
          }}>
              Most Popular
            </span>
          </div>

          {/* Pill */}
          <div className="flex items-center mb-6 ">
            <span className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-purple-600/20 text-purple-400">
              <Image src="/pro.svg" alt="Pro Icon" width={20} height={20} />
              PRO
            </span>
          </div>

          <h3 className="text-4xl font-bold">$50</h3>
          <p className="mt-2 text-gray-400 text-md leading-relaxed">
            Perfect for building and <br/> scaling models with <br/> limited context.
          </p>
          <button className="mt-6 bg-white text-black px-6 py-2 rounded-full">
            Sign Up
          </button>
          <ul className="mt-8 space-y-3 text-md text-gray-300">
            {[
                "Unlimited Interactions",
                "$0.09 per Interaction",
                "Deploy 10 Apps",
                "Connect 10 Collections",
                "1TB of Storage",
                "Community & Email Support",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                <Image src="/check.svg" alt="check icon" width={30} height={30} />
                <span>{item}</span>
                </li>
            ))}
            </ul>

        </div>

        {/* Enterprise */}
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-700 rounded-2xl p-6 shadow-xl flex flex-col relative ">
          <div className="flex items-center mb-6">
            <span className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-gray-300">
              <Image
                src="/enterprise.svg"
                alt="Enterprise Icon"
                width={20}
                height={20}
              />
              ENTERPRISE
            </span>
          </div>
          <h3 className="text-4xl font-bold">Custom</h3>
          <p className="mt-2 text-gray-400 text-md leading-relaxed">
            For large scale models <br/> with large and ever- <br/>changing context.
          </p>
          <button className="mt-6 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-full">
            Request Access
          </button>
          <ul className="mt-8 space-y-3 text-md text-gray-300">
            {[
                "Unlimited Interactions",
                "Custom Interaction Pricing",
                "Unlimited Apps",
                "Unlimited Collections",
                "Unlimited Storage",
                "Dedicated Support",
            ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                <Image src="/check.svg" alt="check icon" width={30} height={30} />
                <span>{item}</span>
                </li>
            ))}
           </ul>

        </div>
      </div>
      {/* Dedicated Support Section */}
      <div className="mt-10 w-full">
        <DedicatedSupport />
      </div>
    </section>
  );
}
