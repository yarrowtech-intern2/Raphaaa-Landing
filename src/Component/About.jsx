import React from "react";
import aboutImg from "../assets/about.jpg";

export default function About() {

  return (
    <section
      id="about"
      className="w-full py-14 sm:py-16 lg:py-20 px-3 sm:px-6 bg-gradient-to-b from-sky-100 via-white to-sky-100"
    >
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto bg-white rounded-[28px] shadow-xl overflow-hidden border border-sky-100 cursor-pointer"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative md:h-full">
            <img
              src={aboutImg}
              alt="About Raphaaa"
              className="w-full h-auto md:h-full object-cover"
            />

            {/* SMALL BADGE */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border border-white">
              <p className="text-[12px] font-bold tracking-widest text-blue-700 uppercase">
                About Us
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              About{" "}
              <span className="text-blue-600 uppercase tracking-wide">
                RAPHAaa
              </span>
            </h2>

            <p className="text-gray-700 mt-4 leading-relaxed text-[13px] sm:text-[15px] md:text-base">
              At <span className="font-bold">RAPHAAA</span>, fashion is more than
              clothing—it’s a statement of individuality. We believe what you
              wear should feel personal, empowering, and uniquely you. That’s
              why every piece we create is designed with thoughtfulness, style,
              and purpose.
            </p>

            <p className="text-gray-700 mt-5 leading-relaxed text-[13px] sm:text-[15px] md:text-base">
              We don’t follow trends—we create limited, exclusive collections
              that blend creativity with comfort. Whether for a bold day out or a
              quiet moment of confidence, our fashion is made to reflect your
              story. From vibrant seasonal drops to everyday essentials,{" "}
              <span className="font-bold text-blue-600">RAPHAAA</span> is where
              quality meets self-expression.
            </p>

            <p className="text-gray-700 mt-5 leading-relaxed text-[13px] sm:text-[15px] md:text-base">
              Each garment is a part of a curated journey—crafted not in bulk,
              but with care—so your wardrobe remains as unique as your
              personality. Proudly rooted in value and vision,{" "}
              <span className="font-bold">RAPHAAA</span> stands for thoughtful
              fashion, authentic design, and a community of bold, expressive
              individuals.
            </p>

          {/* QUOTE / MOTTO */}
          <div className="mt-7 bg-sky-50 rounded-2xl p-4">
          <p className="text-blue-700 font-bold text-sm sm:text-base">
           Wear it your way. Own it every day.
          </p>
          <p className="text-blue-700 font-bold text-sm sm:text-base mt-1">
           Welcome to the RAPHAAA movement.
          </p>
         </div>
          </div>
        </div>
      </div>
    </section>
  );
}
