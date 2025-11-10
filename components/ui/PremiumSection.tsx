"use client";

import React from "react";
import { motion } from "framer-motion";

const PremiumSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 overflow-hidden py-20 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image with larger desktop size */}
        <motion.img
          src="/gallery/gallery8.jpg"
          alt="Gerkin Construction exterior"
          className="w-full md:w-[110%] rounded-3xl shadow-2xl object-cover mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.03, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
        />

        {/* Text content */}
        <motion.div
          className="flex flex-col justify-center md:ml-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
            LEADING ROOFING & EXTERIOR EXPERTS IN BEDFORD, IN
          </h2>

          <motion.p
            className="mb-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            At Gerkin Construction, we take pride in helping Bedford homeowners improve their homes with care and skill.
          </motion.p>

          <motion.ul
            className="mb-6 space-y-4 text-gray-700 dark:text-gray-300 text-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <li>• Fully licensed and insured to protect your home and family</li>
            <li>• A history of dependable service and satisfied neighbors</li>
            <li>• Verified workmanship that stands up to professional standards</li>
          </motion.ul>

          <motion.p
            className="mb-8 text-md text-gray-700 dark:text-gray-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            From start to finish, we handle every detail so your home stays beautiful and secure. When you work with Gerkin Construction, you’re choosing trust, quality, and a team that cares about our community.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#financing"
            className="inline-block bg-gradient-to-r from-red-800 to-red-600 text-white font-bold rounded-2xl text-lg px-8 py-4 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            Financing Options
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumSection;
