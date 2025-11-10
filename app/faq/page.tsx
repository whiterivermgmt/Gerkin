"use client";

import Container from '@/components/ui/Container';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What types of roofing services do you offer?",
    answer: "We provide roof repairs, full roof replacements, inspections, maintenance, and emergency services for asphalt shingles, metal roofs, and more."
  },
  {
    question: "How long does a typical roof replacement take?",
    answer: "Depending on the size and complexity, a roof replacement usually takes 1–5 days. Weather conditions may extend this timeline."
  },
  {
    question: "Do you offer gutter installation and repair?",
    answer: "Yes! We install new gutters, repair leaks, clean and maintain existing gutters, and provide gutter guard solutions."
  },
  {
    question: "Are your roofing services covered by a warranty?",
    answer: "Absolutely. We provide manufacturer warranties on materials and a workmanship warranty to ensure long-lasting protection."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, all our estimates are free. We will evaluate your home, discuss your needs, and provide a detailed written estimate."
  },
  {
    question: "What areas do you service?",
    answer: "We primarily service Bedford, IN, and the surrounding areas. Contact us to check if we cover your location."
  },
  {
    question: "How do I know if my roof needs repair or replacement?",
    answer: "Common signs include missing shingles, leaks, sagging areas, and age of the roof. We provide inspections to determine the best solution."
  },
  {
    question: "Do you handle insurance claims for storm damage?",
    answer: "Yes, we assist homeowners with insurance claims, including inspections, documentation, and working directly with insurance adjusters."
  },
  {
    question: "Can I choose my roofing materials and colors?",
    answer: "Absolutely! We offer a variety of materials, colors, and styles to match your home’s aesthetics and budget."
  },
  {
    question: "How do I schedule a roof inspection?",
    answer: "Simply contact us via phone, email, or our online form. We'll schedule a convenient time to inspect your roof."
  },
  {
    question: "Do you offer financing options?",
    answer: "Yes, we provide flexible financing options to make your roofing or home repair project affordable."
  },
  {
    question: "What safety measures do your crews follow?",
    answer: "Our team follows strict OSHA safety guidelines, uses proper equipment, and ensures a clean and safe worksite."
  },
  {
    question: "Can you repair leaks on flat roofs?",
    answer: "Yes, we specialize in repairing flat roofs, including commercial and residential properties, using durable waterproof materials."
  },
  {
    question: "How often should I have my roof inspected?",
    answer: "We recommend a professional inspection at least once a year and after any major storm to prevent small issues from becoming costly repairs."
  },
  {
    question: "What sets your company apart from other roofing contractors?",
    answer: "We focus on quality workmanship, timely communication, fair pricing, and customer satisfaction. Our team is licensed, insured, and experienced."
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="mt-16 mb-32">
      <h2 className="text-3xl font-semibold mb-10 text-center">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl overflow-hidden shadow-md transition-shadow duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="px-6 py-5 bg-white border-t text-gray-700 leading-relaxed transition-all duration-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQPage;
