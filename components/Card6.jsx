import { FaUserCircle } from "react-icons/fa";

export default function InboxCard() {
  return (
    <div className="h-full relative w-full max-w-md mx-auto rounded-2xl p-6 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Envelope Background with 3D effect */}
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 w-[140%] h-[140%] -left-[20%] -top-[20%] pointer-events-none z-0"
        style={{
          transform: "perspective(1000px) rotateX(12deg) scale(1.2)",
        }}
      >
        <defs>
          {/* Body gradient */}
          <linearGradient id="envBodyGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(10, 6, 19, 0.1)" />
            <stop offset="100%" stopColor="rgba(46, 23, 75, 0.1)" />
          </linearGradient>

          {/* Flap gradient */}
          <linearGradient id="envFlapGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#452064" />
            <stop offset="100%" stopColor="#1d0e32" />
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="envShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="12"
              floodColor="rgba(0,0,0,0.6)"
            />
          </filter>

          {/* Inner shadow */}
          <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feOffset dx="0" dy="2" />
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite
              in="SourceGraphic"
              in2="blur"
              operator="arithmetic"
              k2="-1"
              k3="1"
            />
          </filter>
        </defs>

        {/* BODY / POCKET with transparency and dark border */}
        <path
          d="M60 205 H340 L300 260 H100 Z"
          fill="url(#envBodyGrad)"
          opacity="0.3"
          stroke="#4b1f6d"
          strokeWidth="0.3"
          filter="url(#envShadow)"
        />

        {/* FLAP */}
        <path
          d="M60 205 L200 130 L340 205 Z"
          fill="url(#envFlapGrad)"
          filter="url(#innerShadow)"
        />

        {/* Middle U-shaped line */}
       <path
        d="M60 205 L200 230 L340 205"
        fill="none"
        stroke="#4b1f6d"
        strokeWidth="0.5"
        />

      </svg>

      {/* Chat Bubbles */}
      <div className="relative flex flex-col gap-4 mt-8 z-10">
        {/* Message 1 */}
        <div
          className="flex items-center gap-2 self-end bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg border border-white/10"
          style={{ transform: "perspective(800px) rotateY(2.73deg)" }}
        >
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="rounded-xl shadow-lg border border-gray-800"
          />
          <p className="text-xs text-gray-500 leading-snug">
            Thanks Scout. You just saved me a bunch of time
          </p>
        </div>

        {/* Message 2 */}
        <div>
          <img src="/Group (5).svg" alt="Avatar" />
        </div>

        {/* Message 3 */}
        <div
          className="flex items-center gap-2 self-end bg-black/50 backdrop-blur-md px-2 py-1 rounded-xl shadow-lg border border-white/10"
          style={{ transform: "perspective(800px) rotateY(2.73deg)" }}
        >
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="rounded-xl shadow-lg border border-gray-800"
          />
          <p className="text-xs text-gray-500 leading-snug">
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
