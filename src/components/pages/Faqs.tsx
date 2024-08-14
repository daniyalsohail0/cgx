"use client";
import React, { useState } from "react";

// Define the type for each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

// Define the list of FAQs using the FAQItem type
const faqs: FAQItem[] = [
  {
    question: "What IT services do you offer?",
    answer:
      "Cyber Genesis X provides a comprehensive range of IT services including networking solutions, cloud computing, cybersecurity, and software engineering. Our expertise ensures robust, scalable, and secure IT infrastructures tailored to your needs.",
  },
  {
    question: "How can I start a project with Cyber Genesis X?",
    answer:
      "To begin a project with us, contact us through our website or email. We will arrange an initial consultation to discuss your requirements and how our networking, cloud, cybersecurity, and software solutions can meet your objectives.",
  },
  {
    question: "What is your approach to cybersecurity?",
    answer:
      "We take a proactive approach to cybersecurity by offering comprehensive solutions including penetration testing, vulnerability assessments, and incident response. Our goal is to identify and mitigate potential threats before they impact your business.",
  },
  {
    question: "What types of networking solutions do you provide?",
    answer:
      "Our networking solutions encompass everything from network design and implementation to management and optimization. We ensure reliable, high-performance networking that supports your business's connectivity and operational needs.",
  },
  {
    question: "Can you help with cloud migration?",
    answer:
      "Yes, we offer cloud migration services that include planning, execution, and management. We help you transition smoothly to cloud-based infrastructure, ensuring minimal disruption and maximizing the benefits of cloud computing.",
  },
  {
    question: "How do you ensure software quality?",
    answer:
      "We follow best practices in software engineering, including rigorous testing, code reviews, and adherence to development standards. Our goal is to deliver reliable, high-quality software solutions that meet your specifications and exceed expectations.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "The timeline for each project depends on its complexity and scope. We provide a detailed project plan and timeline during the initial phase, ensuring clear milestones and deadlines to keep your project on track.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes, we provide ongoing support and maintenance for all our IT solutions. This includes regular updates, troubleshooting, and enhancements to ensure your systems remain efficient and secure over time.",
  },
  {
    question: "What are your pricing models for IT services?",
    answer:
      "We offer various pricing models including fixed-price contracts, time and materials, and retainer-based agreements. Pricing is based on the specific requirements and scope of your project. We'll discuss the best options with you during the initial consultation.",
  },
  {
    question: "How do you handle data privacy and compliance?",
    answer:
      "We prioritize data privacy and compliance by implementing industry-standard security practices and ensuring adherence to relevant regulations such as GDPR and CCPA. Our solutions are designed to protect your data and maintain compliance with applicable laws.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-[1px] border-[#FF204E]"
            >
              <button
                className="w-full text-left px-6 py-4 bg-white text-gray-900 font-semibold focus:outline-none transition-colors duration-300 hover:bg-gray-100"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`float-right transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="#000000"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-700 transition-opacity duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
