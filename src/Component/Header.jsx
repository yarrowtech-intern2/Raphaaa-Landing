import React, { useEffect, useState } from "react";
import TopBar from "../Component/TopBar";
import logo from "../assets/RAPHAAA.webp";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const menu = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" },
  ];

  // ✅ Smooth scroll with sticky header offset
  const scrollToSection = (id) => {
    setOpen(false);
    setActive(id);

    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 160; 
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      // ✅ NEW ARRIVAL FIX (not in navbar)
      const newArrival = document.getElementById("new-arrival");
      if (newArrival) {
        const top = newArrival.offsetTop;
        const height = newArrival.offsetHeight;

        // 🔥 If user is inside new-arrival section, keep HOME active
        if (scrollPos >= top && scrollPos < top + height) {
          setActive("home");
          return;
        }
      }

      // ✅ Normal navbar section active detect
      for (let i = 0; i < menu.length; i++) {
        const section = document.getElementById(menu[i].id);
        if (!section) continue;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(menu[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close mobile menu on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (open) setOpen(false);
    };

    if (open) {
      window.addEventListener("scroll", handleScrollClose);
    }
    return () => window.removeEventListener("scroll", handleScrollClose);
  }, [open]);

  return (
    <div className="w-full fixed top-0 z-50">
      {/* TOP BAR */}
      <TopBar />

      {/* HEADER */}
      <header className="w-full bg-[#E7F5FF]/95 backdrop-blur-md shadow-sm border-b border-sky-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => scrollToSection("home")}
            className="relative group flex items-center select-none cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-300 to-sky-600 opacity-40 blur-xl animate-[spin_6s_linear_infinite]" />

            {/* Logo */}
            <img
              src={logo}
              alt="Raphaaa Logo"
              className="relative w-28 sm:w-36 md:w-44 drop-shadow-xl transition-all duration-500 group-hover:scale-110"
            />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 font-semibold text-gray-800">
            {menu.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer relative transition ${
                  active === item.id ? "text-sky-700" : "hover:text-sky-700"
                }`}
              >
                {item.name}

                {/* ACTIVE POINTER LINE */}
                <span
                  className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-sky-600 transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-white shadow-sm border border-sky-200 text-gray-800 text-xl"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-[260px]" : "max-h-0"
          }`}
        >
          <div className="bg-white border-t border-sky-200 shadow-sm">
            <ul className="flex flex-col px-6 py-5 gap-4 font-semibold text-gray-800">
              {menu.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`cursor-pointer transition ${
                    active === item.id
                      ? "text-sky-700"
                      : "hover:text-sky-700"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
