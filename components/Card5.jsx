// components/AutomateWorkCard.jsx
import { Slack, Star, Circle } from "lucide-react";

export default function AutomateWorkCard() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl border border-gray-800 p-6 shadow-xl">
      {/* Pills Section */}
      <div className="flex flex-col items-center gap-3 mt-14">
        {/* Slack Request */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/60 border border-gray-700 text-gray-300 hover:bg-gray-700 transition">
          <Slack className="w-4 h-4" />
          <span className="text-sm">Feature request on Slack</span>
        </button>

        {/* Scout AI */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-700 shadow-md hover:bg-gray-700 transition">
          <Star className="w-4 h-4" />
          <span className="text-sm">Scout AI</span>
        </button>

        {/* Linear Ticket */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 text-blue-400 border border-blue-500 hover:bg-blue-800/50 transition">
          <Circle className="w-4 h-4" />
          <span className="text-sm">Linear ticket for that feature</span>
        </button>
      </div>

      {/* Footer */}
      <div className="text-left mt-26">
        <h2 className="text-lg font-semibold text-white">Automate your work</h2>
        <p className="text-md text-gray-400">
          Connect your existing tools and eliminate the busy work
        </p>
      </div>
    </div>
  );
}
