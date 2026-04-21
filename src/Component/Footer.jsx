import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiPhoneCall,
  FiMapPin,
} from "react-icons/fi";

import logo from "../assets/RAPHAAA.webp";
import visa from "../assets/visa.png";
import mastercard from "../assets/mastercard.png";
import upi from "../assets/upi.png";
import cod from "../assets/cod.jpg";
import freeTruck from "../assets/truck.png";
import returnsIcon from "../assets/return.png";

export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 140;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-white text-gray-800">
      {/* TOP */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-14">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
              {/* COL 1 */}
              <div>
                <img src={logo} alt="Raphaaa" className="w-36 sm:w-40 mb-6" />

                {/* LOCATION */}
                <div className="mt-2">
                  <h5 className="font-semibold text-[15px] sm:text-[16px] mb-2">
                    Our Location
                  </h5>

                  <div className="flex items-start gap-3 text-gray-700">
                    <FiMapPin className="mt-1 text-lg" />
                    <p className="text-sm leading-relaxed">
                      3A, Bertram St, Esplanade, Dharmatala, Taltala, Kolkata,
                      West Bengal 700087
                    </p>
                  </div>
                </div>
              </div>

              {/* COL 2 (SUPPORT) */}
              <div>
                <h4 className="text-[18px] sm:text-[20px] font-semibold mb-4">
                  Support
                </h4>

                <ul className="space-y-3">
                  {[
                    { id: "home", label: "Home" },
                    { id: "about", label: "About" },
                    { id: "faq", label: "FAQ" },
                    { id: "contact", label: "Contact" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="cursor-pointer text-sm text-gray-700 hover:text-[#1565FF] transition"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COL 3 (FOLLOW US) */}
              <div>
                <h4 className="text-[18px] sm:text-[20px] font-semibold mb-4">
                  Follow Us
                </h4>

                <div className="flex items-center gap-3 mb-6 text-2xl text-gray-700">
                  <a
                    href="https://www.facebook.com/Raphaaa.Store/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1565FF] hover:text-[#1565FF] transition"
                  >
                    <FiFacebook />
                  </a>

                  <a
                    href="https://www.instagram.com/raphaaaofficial/"
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#1565FF] hover:text-[#1565FF] transition"
                  >
                    <FiInstagram />
                  </a>
                </div>

                <h5 className="font-semibold text-gray-900">Call Us</h5>
                <div className="flex items-center gap-3 mt-2 text-gray-700">
                  <FiPhoneCall />
                  <span className="text-sm font-medium cursor-pointer">
                    +919932363636
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT MAP */}
          <div className="lg:col-span-5">
            <div className="w-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="px-5 py-4 border-b border-gray-200">
                <h4 className="text-[18px] font-semibold text-gray-900">
                  Find Us on Google Maps
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Visit our store location in Kolkata.
                </p>
              </div>

              <div className="w-full h-[260px] sm:h-[320px] lg:h-[360px]">
                <iframe
                  title="Raphaaa Location"
                  src="https://www.google.com/maps?q=3A,+Bertram+St,+Esplanade,+Dharmatala,+Taltala,+Kolkata,+West+Bengal+700087&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LINE */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mt-10">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* PAYMENT + INFO */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 py-10">
          {/* ACCEPT */}
          <div className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <span className="text-sm font-semibold text-gray-600">
                WE ACCEPT
              </span>

              <div className="flex items-center gap-3">
                <img src={visa} alt="visa" className="w-12" />
                <img src={mastercard} alt="mastercard" className="w-12" />
                <img src={upi} alt="upi" className="w-12" />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <img src={cod} alt="cod" className="w-7 rounded-md" />
              <span className="text-sm text-gray-700 font-medium">
                COD Available
              </span>
            </div>
          </div>

          {/* SHIPPING */}
          <div className="w-full lg:w-auto flex lg:justify-center">
            <div className="flex items-center gap-3">
              <img src={freeTruck} alt="free shipping" className="w-9" />
              <span className="text-sm text-gray-700 font-medium">
                Free Shipping
              </span>
            </div>
          </div>

          {/* TRUST + RETURNS */}
          <div className="w-full lg:w-auto lg:text-right">
            <span className="text-sm text-gray-500 block">
              Trusted & Secure Payment | 100% Original Products
            </span>

            <div className="flex items-center gap-2 mt-5 lg:justify-end">
              <img src={returnsIcon} alt="returns" className="w-9" />
              <span className="text-sm text-gray-700 font-medium">
                Easy 15-Day Returns
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center text-sm text-gray-600 pb-8">
          © 2026 <span className="font-semibold text-gray-800">Raphaaa</span>.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
