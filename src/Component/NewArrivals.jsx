import React, { useMemo, useRef, useState } from "react";

// ✅ Replace with your real product images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

export default function NewArrivals() {
  const products = useMemo(
    () => [
      { name: "T-Shirt New", img: img1 },
      { name: "Printed Shirt", img: img2 },
      { name: "Summer Shirt", img: img3 },
      { name: "Classic Shirt", img: img4 },
    ],
    []
  );

  const [paused, setPaused] = useState(false);
  const holdTimer = useRef(null);

  // ✅ Duplicate for infinite scroll
  const loopProducts = [...products, ...products];

  return (
    <section
      id="new-arrival"
      className="w-full bg-[#bfe7ff] py-14 sm:py-16 lg:py-20 px-3 sm:px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Explore New Arrivals
          </h2>

          <div className="w-20 h-[3px] bg-blue-600 mx-auto mt-3 rounded-full" />

          <p className="text-gray-700 mt-4 text-[13px] sm:text-[15px] md:text-base max-w-3xl mx-auto leading-relaxed">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of fashion.
          </p>
        </div>

        {/* SLIDER */}
        <div
          className="relative w-full"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => {
            holdTimer.current = setTimeout(() => setPaused(true), 20);
          }}
          onTouchEnd={() => {
            clearTimeout(holdTimer.current);
            setPaused(false);
          }}
        >
          {/* LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-[#bfe7ff] to-transparent z-10" />

          {/* RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-[#bfe7ff] to-transparent z-10" />

          {/* VIEWPORT */}
          <div className="overflow-hidden">
            {/* TRACK */}
            <div
              className={`flex w-max gap-6 marquee-running ${
                paused ? "marquee-paused" : ""
              }`}
            >
              {loopProducts.map((item, index) => (
                <div
                  key={index}
                  className="
                    group w-[240px] sm:w-[270px] xl:w-[230px] flex-shrink-0
                    bg-white rounded-2xl overflow-hidden shadow-md transition cursor-pointer
                    hover:shadow-2xl
                    hover:animate-blink
                    active:animate-blink
                  "
                >
                  {/* IMAGE */}
                  <div className="h-[320px] sm:h-[340px] xl:h-[280px] w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      draggable="false"
                      className="
                        w-full h-full object-cover transition-transform duration-500
                        group-hover:scale-110
                        group-active:scale-110
                      "
                    />
                  </div>

                  {/* ONLY NAME */}
                  <div className="p-4">
                    <h3 className="text-[15px] font-semibold text-blue-700">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CSS (Marquee + Blink) */}
      <style>
        {`
          @keyframes marqueeMove {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee-running {
            animation: marqueeMove 18s linear infinite;
            will-change: transform;
          }

          .marquee-paused {
            animation-play-state: paused !important;
          }

          /* ✅ BLINK EFFECT */
          @keyframes blink {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.02); opacity: 0.75; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-blink {
            animation: blink 0.6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
