import Image from "next/image";

export default function DedicatedSupportCard() {
  return (
    <div className="border border-gray-900 rounded-2xl shadow-xl max-w-5xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Section (2/3) */}
        <div className="md:col-span-2 p-6 md:p-10 text-white flex flex-col">
          <h2 className="text-2xl font-semibold mb-3">Dedicated Support</h2>
          <p className="text-gray-400 mb-6 max-w-md">
            We are here to help get you started with a dedicated support engineer
            who can assist with scoping your first models and getting them deployed.
          </p>
         <h3 className="text-sm font-regular text-white/90 mb-4 uppercase">
            What’s included
        </h3>

          {/* Updated Feature List with Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-300">
            {[
              "Shared Slack Channel",
              "Prompt Engineering Guidance",
              "Dedicated Support Engineer",
              "Context Sourcing Guidance",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image
                  src="/check.svg"
                  alt="check icon"
                  width={30}
                  height={30}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (1/3) */}
        <div className="bg-black p-6 md:p-10 flex flex-col items-center justify-center text-center">
          <div className=" text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
           <span className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-gray-900 text-gray-300">
              <Image
                src="/ADD.svg"
                alt="Enterprise Icon"
                width={20}
                height={20}
              />
              ADD ON
            </span>
          </div>
          <div className="text-3xl font-bold mb-2">$750</div>
          <div className="text-gray-300 text-sm mb-6">monthly</div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Request Access
          </button>
          <div className="text-xs text-gray-400 mt-3">
            No long term contract obligation.
          </div>
        </div>
      </div>
    </div>
  );
}
