import React, { useState } from "react";

const faqs = [
  {
    question: "What should I bring to my first yoga class?",
    answer: "You should bring a yoga mat, a water bottle, and wear comfortable clothing. We provide any additional equipment needed.",
  },
  {
    question: "Do I need prior experience to join a class?",
    answer: "No prior experience is needed. Our classes cater to all levels, from beginners to advanced practitioners.",
  },
  {
    question: "How can I book a class?",
    answer: "You can book a class through our website by selecting a schedule that fits your availability.",
  },
  {
    question: "Are online classes available?",
    answer: "Yes! We offer both in-person and virtual classes to accommodate your needs.",
  },
  {
    question: "What is the duration of each session?",
    answer: "Most sessions last between 60 to 90 minutes, depending on the class type.",
  },
  {
    question: "Is there a trial class available?",
    answer: "Yes, we offer a free trial class for first-time attendees.",
  },
  {
    question: "What should I wear for a yoga class?",
    answer: "Wear breathable, stretchable, and comfortable clothing that allows free movement.",
  },
  {
    question: "Can I eat before attending a yoga class?",
    answer: "It’s best to practice yoga on an empty stomach or have a light meal at least 2 hours before the class.",
  },
  {
    question: "Are private yoga sessions available?",
    answer: "Yes, we offer private sessions for individuals or small groups. Contact us for more details.",
  },
  {
    question: "How often should I practice yoga?",
    answer: "For best results, practice yoga at least 2-3 times a week, but even once a week can be beneficial.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-6 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl"
          >
            <button
              className="w-full flex justify-between items-center text-lg font-semibold text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
