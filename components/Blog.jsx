// app/components/Blog.tsx
import Image from "next/image";

export default function Blog() {
  const logos = [
    { src: "/1.svg", alt: "Statsig" },
    { src: "/2.svg", alt: "Deno" },
    { src: "/3.svg", alt: "Modal" },
    { src: "/1.svg", alt: "Hyper" },
    { src: "/2.svg", alt: "Evidence" },
    { src: "/3.svg", alt: "Dagster" },
  ];

  const leftLogos = logos.slice(0, 3);
  const rightLogos = logos.slice(3);

  return (
    <section className="text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 lg:gap-12">
        {/* Left vertical logos */}
        <div className="flex flex-row lg:flex-col gap-4">
          {leftLogos.map((logo, i) => (
            <div
              key={i}
              className={`flex justify-center items-center p-6 sm:p-10 lg:p-14 rounded-lg 
                ${i === 0 ? "border border-white opacity-100" : "border border-gray-800 opacity-50"}`}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className={`object-contain h-6 sm:h-8 
                  ${i === 0 ? "opacity-100" : "filter brightness-0 invert opacity-70"}`}
              />
            </div>
          ))}
        </div>

        {/* Center Quote */}
        <div className="flex flex-col items-center text-center mt-5 px-4 sm:px-8">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug lg:leading-relaxed">
            "Scout is an indispensable tool<br />
            for our Engineering, DS and Sales teams<br />
            to engage with our customers.<br />
            We rely on Scout daily."
          </p>

          <div className="mt-6 flex flex-col items-center justify-center">
            <Image
              src="/Image.png"
              width={50}
              height={50}
              alt="Vijaye Raji"
              className="rounded-full"
            />
            <p className="mt-2 font-semibold text-base sm:text-lg">Vijaye Raji</p>
            <p className="text-sm sm:text-base text-gray-400">CEO of Statsig</p>
          </div>
        </div>

        {/* Right vertical logos */}
        <div className="flex flex-row lg:flex-col gap-4">
          {rightLogos.map((logo, i) => (
            <div
              key={i}
              className="flex justify-center items-center border border-gray-800 opacity-50 p-6 sm:p-10 lg:p-14 rounded-lg"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="h-6 sm:h-8 object-contain filter brightness-0 invert opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
