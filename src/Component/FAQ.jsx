import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    q: "What is Raphaaa?",
    a: "Raphaaa is a modern lifestyle brand offering premium fashion, collaborations, and e-commerce experiences with exclusive drops and curated collections.",
  },
  {
    q: "How can I place an order on Raphaaa?",
    a: "You can browse products on our website, add items to your cart, and complete your purchase securely through our checkout page.",
  },
  {
    q: "What payment methods does Raphaaa accept?",
    a: "We support Razorpay, UPI, credit/debit cards, and net banking for a seamless payment experience.",
  },
  {
    q: "How can I track my order?",
    a: "Once your order is placed, you'll be notified via email and SMS, and you can monitor your shipment status in real time.",
  },
  {
    q: "What is Raphaaa's return and exchange policy?",
    a: "Products can be returned or exchanged within 15 days of delivery if they are unused, unworn, and in original packaging.",
  },
  {
    q: "How do I stay updated about upcoming drops?",
    a: "You can subscribe to our newsletter or follow Raphaaa on social media to get early access to exclusive launches.",
  },
  {
    q: "How do I contact Raphaaa customer support?",
    a: "You can reach us via the Contact Us page, email, or our dedicated support helpline.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 100,
      easing: "ease-out",
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-gradient-to-b from-sky-100 via-white to-sky-100 py-14 sm:py-16 lg:py-20 px-3 sm:px-6"
    >
      {/* Title */}
      <div
        data-aos="fade-up"
        className="max-w-5xl mx-auto text-center mb-10 sm:mb-12"
      >
        <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="w-16 h-[3px] bg-blue-600 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-[13px] sm:text-[15px] md:text-base max-w-2xl mx-auto">
          Everything you need to know about Raphaaa orders, payments, returns,
          and support.
        </p>
      </div>

      {/* FAQ Box */}
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 70}
              className="bg-white rounded-2xl border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer w-full flex items-center justify-between gap-4 px-5 sm:px-6 md:px-8 py-5 sm:py-6 text-left"
              >
                <span className="text-[15px] sm:text-base md:text-lg font-semibold text-gray-900 leading-snug">
                  {item.q}
                </span>

                <span
                  className={`cursor-pointer min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaChevronDown className="text-sm" />
                </span>
              </button>

              {/* Answer */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                style={{
                  height: isOpen
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out"
              >
                <div className="px-5 sm:px-6 md:px-8 pb-6 pt-1">
                  <p className="text-gray-600 text-[13px] sm:text-[15px] md:text-base leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
