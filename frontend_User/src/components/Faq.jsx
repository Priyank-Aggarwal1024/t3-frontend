import { useState } from "react";

const faqs = [
  {
    question:
      "Do you have all the equipment I need for ice hockey, inline skating, and roll ball?",
    answer:
      "Yes, at T3 Sports, we offer a full range of ice and inline/roller hockey equipment. This includes skates, helmets, pads, sticks, and goalie equipment and accessories like tape, laces, skate guards, and more.",
  },
  {
    question:
      "Do I have to pay my own freight costs? If so, how does that work and what does it cost?",
    answer:
      "Yes, shipping charges extra but varies based on the order value. We ship by delivery, express bees, Amazon Shipping etc. based on available options for the address which you have given. We provide estimated shipping charges to your address and add them to your invoice. We always quote what is shown by third-party shippers.",
  },
  {
    question: "Do you ship goods on Saturday and Sunday?",
    answer:
      "Orders placed before 2 pm on weekdays are confirmed after payment, or the next day until Saturday. We do not ship on Sundays or Saturdays after 12 pm due to freight company holidays. Orders during this period are shipped on Monday.",
  },
  {
    question:
      "How can I bulk order/prebook special products that are not in stock?",
    answer:
      "Please contact our team for assistance with bulk orders and prebooking goods of any brand or product.",
  },
  {
    question:
      "Could you please provide me with the contact details for my local shipping agent, and can you confirm how accurate the delivery time estimate is?",
    answer:
      "We do not have access to your local shipping agent's phone numbers for delivery, as the shipment was handled by third-party services. However, we provide tracking details that you can monitor regularly. Please note that the delivery time is an estimate.",
  },
  {
    question: "How do I pay for my orders?",
    answer:
      "We only accept prepayment via PhonePe, GPay, and bank transfers. After payment is received, we will ship your goods. Charges include the items and shipping fees. We do not offer credit.",
  },
  {
    question: "How long is order processing?",
    answer:
      "Most orders are processed within 1-2 days, depending on the time. If the products are in stock, they are shipped as soon as possible. Prebooking orders may take additional time. Additionally, delivery times can vary due to prebooking, and adjustments may be necessary if companies change their delivery schedules.",
  },
  {
    question: "How will I know you received my order?",
    answer:
      "We'll send a confirmation message once your order is ready to ship or shipped after payment.",
  },
  {
    question: "Can I purchase anything from the brands?",
    answer:
      "Product availability depends on the brand and season. For further details, please contact us.",
  },
  {
    question: "Can I return products? What is your return policy?",
    answer:
      "Returns require our authorization. You are responsible for return costs unless there was a shipping error or damage. Approved returns may incur a restocking fee. Products cannot be returned due to lack of sales. Once purchased, they are yours. Contact our team for terms and conditions.",
  },
  {
    question: "Can you help me with my first order?",
    answer:
      "Yes, we can help. Our team has extensive experience in this field. We will work within your budget and assist you in putting together your order.",
  },
  {
    question:
      "I have observed that there are certain products not available in your offerings. Could you please explain why you do not stock all products?",
    answer:
      "Due to our partnerships with various brands and the extensive range of products available, it is challenging to maintain an inventory that includes every model from basic to top end. We select our product offerings based on bestsellers and price ranges that are most beneficial for our customers.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-black dark:text-white dark:bg-black w-full md:p-6 p-4 md:pt-20 pt-20 max-w-full overflow-hidden">
      <h1 className="text-3xl md:text-4xl font-bold text-t3_blue mb-6 w-full text-center uppercase">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col md:gap-6 gap-4 max-w-[1024px] mx-auto lg:px-16 md:px-8 px-4 md:py-6 py-4 border md:rounded-2xl rounded-lg relative">
        <div className="w-[400px] h-[400p] dark:block hidden rounded-full absolute blur-3xl right-0 top-0 mr-[-80px] mt-[-80px] animate-spin bg-gradient-to-l from-t3_blue from-[20%] to-[#0c90d78e] opacity-40 z-[0] "></div>
        <div className="w-full  relative z-[2]">
          {faqs.slice(0, 6).map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-t3_blue text-2xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-4 pb-3 text-gray-700 dark:text-gray-400  transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full relative z-[2]">
          {faqs.slice(6).map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFaq(index + 6)}
                className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-t3_blue text-2xl">
                  {openIndex === index + 6 ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-4 pb-3 text-gray-700 dark:text-gray-400 transition-all duration-300 ease-in-out ${
                  openIndex === index + 6
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
