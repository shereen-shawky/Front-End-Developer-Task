import { FaUserCircle } from "react-icons/fa";

export default function InboxCard() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Envelope Background */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] pointer-events-none z-0"
        style={{
          transform: "perspective(1000px) rotateX(15deg) scale(1.25)",
        }}
      >
        <defs>
         

          

          {/* Outer glow */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="14"
              floodColor="rgba(0,0,0,0.7)"
            />
          </filter>
        </defs>

        {/* Envelope Pocket (darker) */}
        <path
          d="M60 200 H340 L300 260 H100 Z"
          fill="url(#pocketGrad)"
          stroke="#6a2b9c"
          strokeWidth="0.3"
          filter="url(#glow)"
        />

{/* Flap (outline only, no fill) */}
<path
  d="M60 200 L200 120 L340 200 Z"
  fill="none"
  stroke="#6a2b9c"
  strokeWidth="0.5"
  opacity="0.9"
/>

        
        {/* U-shaped fold line with flat bottom */}
        <path
          d="M60 200 L150 220 L250 220 L340 200"
          fill="none"
          stroke="#6a2b9c"
          strokeWidth="0.5"
          opacity="0.9"
        />
      </svg>

      {/* Chat Bubbles */}
      <div className="relative flex flex-col gap-4 mt-8 z-10">
        {/* Message 1 */}
        <div className="flex items-center gap-2 self-end bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg border border-white/10">
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="rounded-xl shadow-lg border border-gray-800"
          />
          <p className="text-xs text-gray-300 leading-snug">
            Thanks Scout. You just saved me a bunch of time
          </p>
        </div>

        {/* Message 2 (center hint bubble) */}
        <div>
          <img src="/Group (5).svg" alt="Hint bubble" />
        </div>

        {/* Message 3 */}
        <div className="flex items-center gap-2 self-end bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg border border-white/10">
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="rounded-xl shadow-lg border border-gray-800"
          />
          <p className="text-xs text-gray-300 leading-snug">
            How do I replay a previous app run?
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-left mt-20 z-10 relative">
        <h2 className="text-lg font-semibold text-white">
          An Inbox with superpowers
        </h2>
        <p className="text-md text-gray-400">
          Curate responses and reviews results for each interaction
        </p>
      </div>
    </div>
  );
}
