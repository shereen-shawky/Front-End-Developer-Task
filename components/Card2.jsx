// components/CustomAI.jsx
import { Plus } from "lucide-react";

export default function CustomAI() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl border border-gray-800 p-6 shadow-xl">
      {/* Input Fields */}
      <div className="bg-gray-800/40 rounded-xl p-4 space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input
            type="text"
            placeholder="Short answer"
            className="w-full rounded-lg bg-gray-800 text-white p-2 text-sm border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">Value</label>
          <input
            type="text"
            placeholder="Short answer"
            className="w-full rounded-lg bg-gray-800 text-white p-2 text-sm border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Plus Button */}
      <div className="flex justify-center mt-4">
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 transition">
          <Plus className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Chips Section */}
      {/* Chips Section */}
<div className="flex gap-2 mt-4 overflow-hidden whitespace-nowrap">
  {["Text", "LLM", "Web", "HTTP", "Save"].map((tag, idx) => (
    <button
      key={idx}
      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition flex-shrink-0"
    >
      {tag}
    </button>
  ))}
</div>


      {/* Footer */}
      <div className="mt-12 text-left">
        <h2 className="text-lg font-semibold text-white">Customize your AI</h2>
        <p className="text-md text-gray-400">
          Build custom workflows and apps in minutes
        </p>
      </div>
    </div>
  );
}
