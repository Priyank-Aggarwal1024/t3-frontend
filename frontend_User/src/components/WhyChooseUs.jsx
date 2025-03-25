import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Comprehensive Selection",
    description:
      "We provide a wide variety of products from globally recognized brands as well as our own line of apparel, ensuring a one-stop solution for all your roller sport’s needs.",
    icon: "🛒",
  },
  {
    title: "Quality Assurance",
    description:
      "Every product we offer is carefully selected and tested to meet high standards of quality and performance.",
    icon: "✅",
  },
  {
    title: "Expert Knowledge",
    description:
      "Our dedicated team has extensive knowledge and passion for roller sports, providing personalized support and advice to help you find exactly what you need.",
    icon: "🎓",
  },
  {
    title: "Nationwide Reach",
    description:
      "We serve customers across India, delivering products reliably and efficiently to ensure satisfaction wherever you are.",
    icon: "🌍",
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our focus on innovation, quality, and customer satisfaction drives us to continuously enhance our offerings and services.",
    icon: "🏆",
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 px-6 py-10 transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-[#0C8FD7] mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        WHY CHOOSE US?
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-5xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#0C8FD7] mt-4">
              {feature.title}
            </h3>
            <p className="text-lg mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-12 px-8 py-4 bg-[#0C8FD7] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => navigate("/all-products")}
      >
        Explore Our Products →
      </motion.div>
    </div>
  );
}
