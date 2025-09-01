import { Circle } from "lucide-react";

export default function DataAccessCard() {
  const slots = Array(5).fill(null);
  const blurredIndex = 2; // Which slot should be blurred

  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl border border-gray-800 p-6 shadow-xl">
      {/* Stacked Cards */}
      <div className="mt-6 relative h-48">
        {/* Other Slots */}
        {slots.map((_, idx) => (
          <div
            key={idx}
            className={`absolute inset-x-0 rounded-xl p-4 h-14 flex items-start justify-between ${
              idx === blurredIndex
                ? "bg-gray-800/60 backdrop-blur-sm opacity-50"
                : "bg-gray-800/40"
            }`}
            style={{ top: `${idx * 12}px`, zIndex: slots.length - idx }}
          >
            {idx === blurredIndex && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold">⇅</span>
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">ELI5 Account</h3>
                  <p className="text-gray-300 text-xs">
                    This is a sample data output which we can replace.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Main Filled Slot */}
        <div
          className="absolute inset-x-0 bg-gray-800/60 rounded-xl p-4 flex items-start justify-between"
          style={{ top: `${slots.length * 12}px`, zIndex: 50 }}
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white font-bold">⇅</span>
            </div>
            <div>
              <h3 className="text-white font-medium text-sm">ELI5 Account</h3>
              <p className="text-gray-300 text-sm mt-4">
                This is a sample data output which we can replace.
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition">
            <Circle className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex">
        <button className="flex-1 rounded-bl-lg bg-gradient-to-r from-[#FFB3B3]/20 to-[#DE8585]/20 backdrop-blur-lg opacity-60  py-2 text-[#DE8585] text-sm font-medium transition">
          Delete
        </button>
        <button className="flex-1 rounded-br-lg border border-white/10 bg-transparent hover:bg-white/10 py-2 text-white text-sm font-medium transition">
          Save
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 text-left">
        <h2 className="text-lg font-semibold text-white">
          Access to the right data
        </h2>
        <p className="text-md text-gray-400">
          Control what your AI knows <br/>and what it forgets
        </p>
      </div>
    </div>
  );
}
