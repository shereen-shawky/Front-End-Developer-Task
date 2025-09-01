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
          {/* Body Gradient */}
          <linearGradient id="pocketGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(20, 10, 40, 0.8)" />
            <stop offset="100%" stopColor="rgba(60, 20, 100, 0.4)" />
          </linearGradient>

          {/* Flap Gradient */}
          <linearGradient id="flapGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(120, 80, 180, 0.5)" />
            <stop offset="100%" stopColor="rgba(30, 10, 50, 0.2)" />
          </linearGradient>

          {/* Gloss / Sheen */}
          <linearGradient id="sheenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>

          {/* Glow effect */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="12"
              stdDeviation="18"
              floodColor="rgba(80,0,150,0.4)"
            />
          </filter>
        </defs>

        
        {/* Flap */}
        <path
          d="M60 200 L200 120 L340 200 Z"
          fill="url(#flapGrad)"
          stroke="rgba(140, 80, 200, 0.6)"
          strokeWidth="0.4"
        />

        {/* Highlight Sheen */}
        <path
          d="M60 200 L200 120 L340 200 Z"
          fill="url(#sheenGrad)"
          opacity="0.4"
        />

        {/* Fold line */}
        <path
          d="M60 200 L150 220 L250 220 L340 200"
          fill="none"
          stroke="rgba(200, 100, 255, 0.6)"
          strokeWidth="0.5"
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
          <p className="text-xs font-regular text-white/50 leading-snug">
            Thanks Scout. You just saved me a bunch of time
          </p>
        </div>

        {/* Message 2 */}
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
          <p className="text-xs font-regular text-white/50 leading-snug">
            How do I replay a previous app run?
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-left mt-22 z-10 relative">
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
