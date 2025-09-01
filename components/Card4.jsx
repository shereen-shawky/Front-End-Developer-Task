// components/AccelerateProductCard.jsx
import { Sparkles } from "lucide-react";

export default function AccelerateProductCard() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl border border-gray-800 p-6 shadow-lg">
      {/* Buttons Section */}
      <div className="flex justify-center mt-34">
        <div className="flex rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md">
          {/* Left Button */}
          <button className="px-6 py-3 flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition">
            <Sparkles className="w-4 h-4" />
          </button>
          {/* Right Button */}
          <button className="px-6 py-3 flex items-center justify-center text-white hover:bg-white/10 transition">
            AI
          </button>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-left mt-28">
        <h2 className=" text-lg font-semibold text-white">
          Accelerate your product
        </h2>
        <p className="text-md text-gray-400 leading-snug">
          Use Scout API to enable AI-features for your customers
        </p>
      </div>
    </div>
  );
}
