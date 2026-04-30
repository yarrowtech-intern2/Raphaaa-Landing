import React, { useMemo, useRef, useState, useEffect } from "react";

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

  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll logic for seamless loop
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          
          // Move 1px
          scrollRef.current.scrollLeft += 1;

          // Reset for seamless loop when halfway through the total content (which is 2 groups)
          if (scrollLeft >= (scrollWidth - clientWidth) / 2) {
            scrollRef.current.scrollLeft = 1; // 1 to avoid jitter
          }
        }
      }, 15); // Speed adjustment (Lower = Faster)
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="new-arrival"
      className="w-full bg-[#bfe7ff] py-14 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-0">
        {/* TITLE */}
        <div className="text-center mb-10 sm:mb-12 px-4 sm:px-6">
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* VIEWPORT */}
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide select-none touch-pan-x"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {/* TRACK (Double groups for seamless loop) */}
            <div className="flex w-max">
              {[1, 2].map((group) => (
                <div key={group} className="flex gap-6 pr-6">
                  {products.map((item, index) => (
                    <div
                      key={index}
                      className="
                        w-[240px] sm:w-[270px] xl:w-[230px] flex-shrink-0
                        bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 cursor-pointer
                        hover:shadow-xl hover:-translate-y-1
                      "
                    >
                      {/* IMAGE */}
                      <div className="h-[320px] sm:h-[340px] xl:h-[280px] w-full overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          draggable="false"
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>

                      {/* NAME */}
                      <div className="p-4">
                        <h3 className="text-[15px] font-semibold text-blue-700">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
