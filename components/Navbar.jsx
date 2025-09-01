"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Install lucide-react if not already: npm install lucide-react

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            alt="Scout Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-400">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-white transition-colors ${
                pathname === link.href ? "text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-1.5 rounded-full border border-gray-500 text-gray-200 hover:text-white hover:border-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 rounded-full bg-white text-black font-medium hover:bg-gray-200"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[linear-gradient(180deg,#1B1B1D_0%,#070708_100%)] bg-opacity-90 text-white absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col items-center py-6 space-y-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg hover:text-gray-300 transition-colors ${
                  pathname === link.href ? "text-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 w-4/5">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-4 py-2 rounded-full border border-gray-500 text-gray-200 hover:text-white hover:border-white transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
