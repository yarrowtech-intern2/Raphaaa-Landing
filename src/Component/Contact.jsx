import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import contactImg from "../assets/contact.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setStatus("");

    // ✅ Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    // ✅ Fake Submit
    setStatus("Message sent successfully ✅");

    // ✅ Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
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
              src={contactImg}
              alt="Contact"
              className="w-full h-auto md:h-full object-cover"
            />

            {/* SMALL BADGE */}
            <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md border border-white">
              <p className="text-[12px] font-bold tracking-widest text-indigo-700 uppercase">
                Contact
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-600 mt-3 leading-relaxed text-[13px] sm:text-[15px] md:text-base max-w-lg">
              We’d love to hear from you. Whether you have a question about our
              products, need support, or just want to connect—drop a message
              below.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-6 space-y-3">
              {/* EMAIL */}
              <a
                href="mailto:contact@raphaaa.com"
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm group-hover:scale-110 transition">
                  <FaEnvelope className="text-sm" />
                </span>

                <p className="text-gray-700 text-[13px] sm:text-[15px] md:text-base">
                  Email:{" "}
                  <span className="font-semibold text-indigo-700 group-hover:underline">
                    contact@raphaaa.com
                  </span>
                </p>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919932363636"
                className="flex items-center gap-3 cursor-pointer group"
              >
                <span className="w-9 h-9 flex items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm group-hover:scale-110 transition">
                  <FaPhoneAlt className="text-sm" />
                </span>

                <p className="text-gray-700 text-[13px] sm:text-[15px] md:text-base">
                  Phone:{" "}
                  <span className="font-semibold text-emerald-700 group-hover:underline">
                    +919932363636
                  </span>
                </p>
              </a>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-7 sm:mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {/* ERROR */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-semibold">
                  {error}
                </div>
              )}

              {/* SUCCESS */}
              {status && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-semibold">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-[1px] transition cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #4f46e5, #a855f7, #f97316)",
                }}
              >
                Send Message
              </button>

              <p className="text-center text-gray-500 text-sm mt-2">
                We typically respond within 24–48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
