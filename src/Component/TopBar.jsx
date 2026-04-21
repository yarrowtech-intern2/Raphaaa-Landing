import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#d8f1ff] via-[#bfeaff] to-[#98e0ff]">
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 h-10 flex items-center text-[12px] sm:text-sm text-gray-800">
        
        {/* LEFT */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="font-medium hidden sm:inline">Follow Us:</span>

          <a
            href="https://www.facebook.com/Raphaaa.Store/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/60 hover:text-blue-600 transition"
          >
            <FaFacebookF className="text-[14px]" />
          </a>

          <a
            href="https://www.instagram.com/raphaaaofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/60 hover:text-pink-600 transition"
          >
            <FaInstagram className="text-[14px]" />
          </a>
        </div>

        {/* CENTER MARQUEE */}
        <div
          className="
            absolute left-1/2 top-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[45%] sm:w-[50%] md:w-[58%] overflow-hidden pointer-events-none
          "
        >
          <div className="animate-marquee text-gray-700 font-medium whitespace-nowrap text-[10px] sm:text-[12px] md:text-sm">
            If you find any wrong product, damaged product, or payment related
            issue then kindly send us an email with the screenshot &nbsp; &nbsp;
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 ml-auto shrink-0">
          <FiHeadphones className="text-[16px]" />
          <span className="font-medium hidden sm:inline">Helpline:</span>

          <a
            href="tel:+919932363636"
            className="text-blue-700 font-bold hover:underline transition"
          >
            +91 9932363636
          </a>
        </div>
      </div>

      {/* MARQUEE CSS (PUT IN index.css or global css) */}
      <style>
        {`
          .animate-marquee {
            display: inline-block;
            padding-left: 100%;
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}
