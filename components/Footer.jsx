// app/components/Footer.tsx
import Image from "next/image";
import { FaSlack, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // for X (Twitter)

export default function Footer() {
  return (
    <footer className=" text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Left - Logo + Status (wider, spans 2 columns) */}
        <div className="md:col-span-2">
          <Image
            src="/icon.svg" 
            alt="Scout Logo"
            width={110}
            height={20}
            className="mb-5"
          />
         {/* Status Badge */}
            <div className="relative mt-10 inline-flex items-center bg-black border border-gray-800 rounded-full px-2.5 py-2 text-sm font-medium shadow-md w-fit overflow-hidden">
            {/* Green radial shadow at the start */}
            <span className="absolute left-0 w-14 h-full bg-green-500 blur-lg opacity-70 rounded-full"></span>

            {/* Dot */}
            <span className="relative w-1.5 h-1.5 bg-green-500 rounded-full mr-2 "></span>
            
            <span className="relative">ALL SYSTEMS OPERATIONAL</span>
            </div>


        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-medium text-grey mb-4">LINKS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white font-medium text-md">Features</a></li>
            <li><a href="#" className="text-white font-medium text-md">Pricing</a></li>
            <li><a href="#" className="text-white font-medium text-md">Docs</a></li>
            <li><a href="#" className="text-white font-medium text-md">Blog</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-sm font-medium text-grey mb-4">SOLUTIONS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white font-medium text-md">Slack Bot</a></li>
            <li><a href="#" className="text-white font-medium text-md">Discord Bot</a></li>
            <li><a href="#" className="text-white font-medium text-md">Command</a></li>
            <li><a href="#" className="text-white font-medium text-md">Onsite Chat</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-medium text-grey mb-4">LEGAL</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-white font-medium">Terms of Service</a></li>
            <li><a href="#" className="text-white font-medium">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
     <div className="border-t border-gray-800 mt-12 pt-6"></div>
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm text-gray-500">
          Copyright © 2024 Scout. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaSlack size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Extra Horizontal Line + Spacing */}
      <div className="border-t border-gray-800 mt-6 pt-6"></div>
    </footer>
  );
}
