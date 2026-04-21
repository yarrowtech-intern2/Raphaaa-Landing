import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToNewArrival = () => {
    document.getElementById("new-arrival")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="scroll-mt-28 w-full bg-[#cfe2f2] flex items-center justify-center px-3 sm:px-6 py-6 sm:py-10 lg:py-12"
    >
      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* LEFT CARD */}
          <div className="w-full bg-[#f8fbff] rounded-[28px] lg:rounded-r-none overflow-hidden shadow-md border border-white/70 px-5 py-8 sm:px-10 sm:py-12 lg:px-12 lg:py-12 flex flex-col justify-center min-h-[340px] sm:min-h-[420px] lg:min-h-[520px]">
            {/* TOP BADGE */}
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              <span className="w-10 sm:w-12 h-[2px] bg-blue-600 rounded-full" />
              <p className="text-[11px] sm:text-[13px] font-semibold tracking-widest text-blue-700 uppercase">
                TRENDING NOW
              </p>
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-[28px] sm:text-[44px] lg:text-[56px] leading-[1.08] font-extrabold text-black">
              Refresh your{" "}
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                wardrobe
              </span>
              <br />
              with{" "}
              <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Raphaaa
              </span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-4 sm:mt-6 text-gray-600 text-[13px] sm:text-[16px] max-w-md leading-relaxed">
              Discover premium styles loved by thousands. Limited stock available,
              grab your favorites today before they're gone!
            </p>

            {/* BUTTON */}
            <div className="mt-6 sm:mt-8">
            <button
            onClick={goToNewArrival}
            className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-gray-900 font-semibold border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-[1px] transition"
            >
             Explore Collection
            </button>
           </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full mt-6 lg:mt-0">
            <div
              className="
                relative w-full shadow-md overflow-hidden
                rounded-[28px] lg:rounded-l-none lg:rounded-r-[999px]
                h-[260px] sm:h-[420px] lg:h-[520px]
              "
            >
              <img
                src={images[index]}
                alt="Hero"
                className="w-full h-full object-cover object-center"
              />

              {/* WHITE CURVED BORDER */}
              <div
                className="
                  absolute inset-0 pointer-events-none
                  rounded-[28px] lg:rounded-l-none lg:rounded-r-[999px]
                  border-[7px] sm:border-[10px] border-white
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
