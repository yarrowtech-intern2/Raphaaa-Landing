import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function FloatingContact() {
  const phoneNumber = "919932363636"; // ✅ without +
  const message = "Hello Raphaaa, I need support.";

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-3">
      {/* WHATSAPP */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        title="WhatsApp"
      >
        <FaWhatsapp className="text-[22px]" />
      </a>

      {/* MAIL */}
      <a
        href="mailto:contact@raphaaa.com"
        className="cursor-pointer w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        title="Email"
      >
        <FaEnvelope className="text-[20px]" />
      </a>
    </div>
  );
}
