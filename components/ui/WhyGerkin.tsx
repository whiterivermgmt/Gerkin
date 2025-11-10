"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaCalendarAlt, FaShieldAlt, FaHome, FaDollarSign, FaComments } from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward size={28} className="text-red-600" />,
    title: "High Quality",
    description: "Dependable workmanship that meets professional standards.",
  },
  {
    icon: <FaCalendarAlt size={28} className="text-red-600" />,
    title: "On Time",
    description: "We set and meet deadlines for the duration of your project.",
  },
  {
    icon: <FaShieldAlt size={28} className="text-red-600" />,
    title: "Fully Licensed & Insured",
    description: "Protecting your home and family is our top priority.",
  },
  {
    icon: <FaHome size={28} className="text-red-600" />,
    title: "Home Protection",
    description: "We safeguard your property before and during all work.",
  },
  {
    icon: <FaDollarSign size={28} className="text-red-600" />,
    title: "Fair Pricing",
    description: "Accurate estimates with no hidden costs or surprises.",
  },
  {
    icon: <FaComments size={28} className="text-red-600" />,
    title: "Clear Communication",
    description: "We keep you informed every step of the way.",
  },
];

const WhyGerkin = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 relative inline-block"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WHY CHOOSE GERKIN CONSTRUCTION?
          <span className="block h-1 w-24 bg-red-600 mx-auto mt-2 rounded-full"></span>
        </motion.h2>

        <motion.p
          className="text-gray-600 sm:text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Gerkin Construction is committed to providing Bedford homeowners with the highest quality roofing and exterior services, combining expertise, care, and integrity. We put people first, ensuring every project is done right.
        </motion.p>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-red-100 p-4 rounded-full mb-4 flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="/about"
          className="inline-block mt-12 bg-gradient-to-r from-red-800 to-red-600 text-white font-bold rounded-2xl text-lg px-8 py-4 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Learn More About Our Company
        </motion.a>
      </div>
    </section>
  );
};

export default WhyGerkin;
