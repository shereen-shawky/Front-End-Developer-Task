// app/page.js
import dynamic from "next/dynamic";
import { Suspense } from "react";

// dynamic imports slightly improve initial bundle on big pages
const Navbar = dynamic(() => import("../components/Navbar"));
const Hero = dynamic(() => import("../components/Hero"));
const Features = dynamic(() => import("../components/Features"));
const Docs = dynamic(() => import("../components/Docs.jsx"));
const Blog = dynamic(() => import("../components/Blog"));
const Pricing = dynamic(() => import("../components/Pricing.jsx"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[linear-gradient(180deg,#1B1B1D_0%,#070708_100%)]">
      {/* Vertical Line - Left */}
      <div className="absolute top-0 left-8 sm:left-20 md:left-30 w-px h-full bg-gradient-to-b from-gray-600 via-gray-800 to-black opacity-40 hidden sm:block"></div>

      {/* Short Vertical Line - Left */}
      <div className="absolute top-0 left-16 sm:left-40 md:left-60 w-px h-32 sm:h-48 md:h-65 bg-gradient-to-b from-gray-500 via-gray-600 to-black opacity-40 hidden sm:block"></div>

      {/* Short Vertical Line - Right */}
      <div className="absolute top-0 right-16 sm:right-40 md:right-60 w-px h-40 sm:h-100 md:h-200 bg-gradient-to-b from-gray-500 via-gray-600 to-black opacity-40 hidden sm:block"></div>

      {/* Vertical Line - Right */}
      <div className="absolute top-0 right-8 sm:right-20 md:right-30 w-px h-full bg-gradient-to-b from-gray-600 via-gray-800 to-black opacity-40 hidden sm:block"></div>

      {/* Horizontal Line */}
      <div className="absolute left-0 top-10 sm:top-14 md:top-18 h-px w-full bg-gray-700 hidden sm:block"></div>

      <Navbar />
      <main className="flex-1 relative z-10">
        <Suspense fallback={null}>
          <Hero />
          <Features />
          <Docs />
          <Blog />
          <Pricing />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
