"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Gregg Hammond",
    stars: 5,
    text: "Highly recommend Gerkin Construction!!! A few months ago we had some storm damage to our roof and they came out immediately and did a temporary fix. My roof was about 22 years old and we needed a new one. Very competitive price and excellent workmanship! The crew was excellent!!! Cleaned up everything!!!! Very Satisfied!!!",
    link: "https://share.google/T42FWRAZgXclGKBgO",
  },
  {
    name: "Maria Leal",
    stars: 5,
    text: "Gerkin construction had replaced my daughter’s roof due to a tree damaging it, when my roof had a tree from storms go through my garage my son in law said call Gerkin they were fantastic!",
    link: "https://share.google/KzGPAtAPrJn7EwtRJ",
  },
  {
    name: "Chelsey Wyatt",
    stars: 5,
    text: "We used them for a new roof, siding & gutters. We couldn’t be happier with the end product! Very polite & answered all the questions we had as first time roof and siding buyers. 😊",
    link: "https://share.google/ta1C3bVIoihCue5xM",
  },
  {
    name: "James Sanders",
    stars: 5,
    text: "Dan and his crew did a great job with my roof. They tore off the old roofing and replaced it in just a little over one day. They did a great job with clean up after the project was completed. I would highly recommend Gerkin Construction!!",
    link: "https://share.google/CzvdixNp34XinjvfO",
  },
  {
    name: "Jon Cochran",
    stars: 5,
    text: "Gerkin Construction is a great company to work with. Marc Porter is very fast at getting things done for you even after hours if needed. He got me a new roof and gutters from noticing more damage on my roof and gutters than any other company did.",
    link: "https://share.google/2itcgSP8bWGOKpaWk",
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play infinite
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000); // 8 seconds per testimonial
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-gray-50 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Hear From Our Customers
        </h2>
        <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Real reviews from homeowners in Bedford and surrounding areas.
        </p>
      </motion.div>

      {/* Carousel */}
      <div className="relative max-w-3xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-10 text-gray-800 hover:scale-105 transition-transform duration-500"
          >
            {/* Stars */}
            <div className="flex mb-4">
              {Array.from({ length: testimonials[current].stars }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500 mr-1" />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg mb-6 leading-relaxed">{testimonials[current].text}</p>

            {/* Name */}
            <a
              href={testimonials[current].link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red-700 hover:text-red-900 transition-colors"
            >
              {testimonials[current].name}
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg text-gray-800 rounded-full p-3 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg text-gray-800 rounded-full p-3 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
