import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaHeadset,
  FaChevronDown,
} from "react-icons/fa";

export default function ShippingPolicy() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const sections = [
    {
      title: "🚚 Shipping Partners",
      content:
        "We collaborate with reputed delivery services such as Delhivery, XpressBees, Amazon Shipping, and more based on your location.",
      icon: <FaTruck className="text-[#0C8FD7]" size={24} />,
    },
    {
      title: "⏳ Processing & Dispatch",
      content:
        "Orders placed before 2 PM on weekdays are processed within 1-2 business days. Orders after 2 PM or on Saturdays after 12 PM are shipped on Monday.",
      icon: <AiOutlineClockCircle className="text-[#0C8FD7]" size={24} />,
    },
    {
      title: "📍 Shipping to Hill Regions",
      content:
        "Shipping to Leh, Jammu, and other hill regions may incur slightly higher charges due to logistical constraints.",
      icon: <FaMapMarkerAlt className="text-[#0C8FD7]" size={24} />,
    },
    {
      title: "🎧 Need Assistance?",
      content:
        "For any shipping inquiries, contact our support team. We’re happy to help!",
      icon: <FaHeadset className="text-[#0C8FD7]" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6 py-10 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#0C8FD7] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📦 SHIPPING POLICY
      </motion.h1>

      <motion.div
        className="w-full max-w-3xl p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lg mb-4">
          At <span className="font-semibold text-[#0C8FD7]">T3 Sports</span>,
          shipping charges vary based on order value. Upon placing your order,
          we provide an estimated shipping cost specific to your address.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl mt-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-4 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <button
              onClick={() => toggleExpand(index)}
              className="w-full flex items-center justify-between p-4 bg-[#0C8FD7] text-white dark:bg-[#1a1a1a] dark:text-white text-left font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                {section.icon} {section.title}
              </div>
              <FaChevronDown
                className={`transform transition-transform ${
                  expanded === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {expanded === index && (
              <motion.div
                className="p-4 bg-white dark:bg-black text-black dark:text-white"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                {section.content}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
