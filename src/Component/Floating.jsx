import React, { useEffect, useState } from "react";
import { FaEnvelope, FaWhatsapp, FaArrowUp, FaComments, FaTimes } from "react-icons/fa";

export default function FloatingContact() {
  const [showScroll, setShowScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = "919932363636"; // ✅ without +
  const message = "Hello Raphaaa, I need support.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3 items-center">
      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className={`w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-2xl border border-blue-100 hover:bg-blue-50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        title="Scroll to Top"
      >
        <FaArrowUp className="text-lg" />
      </button>

      {/* CONTACT OPTIONS (TOGGLEABLE) */}
      <div className={`flex flex-col gap-3 transition-all duration-300 ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-10 pointer-events-none h-0"}`}>
        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-green-200/50 transition-all duration-300"
          title="WhatsApp"
        >
          <FaWhatsapp className="text-[24px]" />
        </a>

        {/* MAIL */}
        <a
          href="mailto:contact@raphaaa.com"
          className="cursor-pointer w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-indigo-200/50 transition-all duration-300"
          title="Email"
        >
          <FaEnvelope className="text-[22px]" />
        </a>
      </div>

      {/* MAIN TOGGLE BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer ${
          isOpen ? "bg-red-500 text-white rotate-180" : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        }`}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaComments className="text-2xl" />}
      </button>
    </div>
  );
}
