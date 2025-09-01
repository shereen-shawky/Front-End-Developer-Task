// components/IntegrationCard.jsx
import { FaDiscord, FaSlack } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export default function IntegrationCard() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl border border-gray-800  p-6 shadow-xl">
      {/* Circuit Lines */}
      <div className="absolute inset-0 bg-[url('/circuit-lines.png')] bg-cover opacity-10 rounded-2xl pointer-events-none"></div>

      {/* Icons and Connections */}
      <div className="relative flex items-center justify-center h-64">
        {/* Asterisk on the LEFT */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-xl bg-gray-800 shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>

        {/* Horizontal line connecting to vertical bus */}
        <div className="absolute top-1/2 left-14 right-[9.5rem] h-[1px] bg-green-500"></div>

        {/* Vertical bus */}
        <div className="absolute top-[52%] bottom-12 right-[9.5rem] w-[1px] bg-green-500"></div>

        {/* Slack connection */}
        <div className="absolute bottom-12 right-10 w-28 h-[1px] bg-green-500"></div>
        <div className="absolute bottom-4 right-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 shadow-md z-10">
          <FaSlack className="w-7 h-7 text-white" />
        </div>

        {/* Discord icon */}
        <div className="absolute top-4 right-0 w-14 h-14 flex items-center justify-center rounded-xl bg-gray-800 shadow-md z-10">
          <FaDiscord className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Text */}
      <div className="mt-16 text-left ">
        <h2 className="text-lg font-semibold text-white">AI where you work</h2>
        <p className="text-md text-gray-400">Deploy Scout Apps to Slack or Discord</p>
      </div>
    </div>
  );
}
