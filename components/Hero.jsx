export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white overflow-hidden py-44">
      {/* Top blurred gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[180px] z-10 sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 aspect-[1155/678] w-[65rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00ff99] via-[#9089fc] to-[#ff80b5] opacity-70"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm border border-white/20 backdrop-blur-md">
            ✱ scout <span className="text-gray-400">is currently in beta</span>
            <span className=" text-white">›</span>
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
          AI for teams building <br /> what’s next.
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-300">
          Scout gives you the tools to build custom agents and <br /> workflows in record time.
        </p>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Get Started <span className="ml-1 text-black text-2xl">›</span>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="relative z-20 mt-30 w-full max-w-5xl px-6">
        <img
          src="/mockup.png"
          alt="App preview"
          className="rounded-xl shadow-lg border border-gray-800"
        />
      </div>
    </section>
  );
}
