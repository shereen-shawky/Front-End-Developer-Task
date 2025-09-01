// app/components/Features.tsx
import Image from "next/image";

export default function Features() {
  const logos = [
    { src: "/Statsig.svg", alt: "Statsig" },
    { src: "/Deno.svg", alt: "Deno" },
    { src: "/Modal.svg", alt: "Modal" },
    { src: "/Hyper.svg", alt: "Hyper" },
    { src: "/evidence.svg", alt: "Evidence" },
    { src: "/dagster.svg", alt: "Dagster" },
    { src: "/Case.svg", alt: "Case Status" },
    { src: "/dogsouth.svg", alt: "Dog South" },
  ];

  return (
    <section className="text-white py-16 px-4 sm:px-8 lg:px-20">
      {/* Top Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {/* Empty left box for large screens */}
        <div className="hidden lg:block border border-gray-800 opacity-50 p-6"></div>
        {logos.slice(0, 4).map((logo, i) => (
          <div
            key={i}
            className="flex justify-center items-center border border-gray-800 opacity-50 p-6 sm:p-8 lg:p-10"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-6 sm:h-8 object-contain filter brightness-0 invert opacity-70"
            />
          </div>
        ))}
        {/* Empty right box for large screens */}
        <div className="hidden lg:block border border-gray-800 opacity-50 p-6"></div>
      </div>

      {/* Center Text */}
      <div className="text-center my-12 px-4">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-relaxed">
          Used by teams at <span className="font-semibold">Statsig</span>,{" "}
          <span className="font-semibold">Deno</span>, <br className="hidden sm:block" />
          <span className="font-semibold">Dagster</span>,{" "}
          <span className="font-semibold">Evidence</span> and more.
        </p>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
        {/* Empty left box for large screens */}
        <div className="hidden lg:block border border-gray-800 opacity-50 p-6"></div>
        {logos.slice(4).map((logo, i) => (
          <div
            key={i}
            className="flex justify-center items-center border border-gray-800 opacity-50 p-6 sm:p-8 lg:p-10"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={40}
              className="h-6 sm:h-8 object-contain filter brightness-0 invert opacity-70"
            />
          </div>
        ))}
        {/* Empty right box for large screens */}
        <div className="hidden lg:block border border-gray-800 opacity-50 p-6"></div>
      </div>
    </section>
  );
}
