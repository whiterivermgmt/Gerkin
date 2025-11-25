"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "/gallery/gallery12.jpg",
  "/gallery/gallery11.jpg",
  "/gallery/gallery15.jpg",
  "/gallery/gallery10.jpg",
  "/gallery/gallery14.jpg",
];

const HeroSlideshow: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {/* Slideshow Images */}
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 transform ${
            idx === current ? "opacity-100 z-10 scale-105" : "opacity-0 z-0 scale-100"
          }`}
        >
          <Image
            src={src}
            alt={`Gallery ${idx + 1}`}
            fill
            className="object-cover object-center transition-transform duration-7000 ease-in-out scale-105"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24 h-full space-y-4 z-20">
        {/* Badge */}
        <div className="w-16 sm:w-20 lg:w-24 mx-auto sm:mx-0">
          <Image
            src="/hero/ten.png"
            alt="10 Years of Service"
            width={80}
            height={20}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg max-w-full sm:max-w-3xl animate-slide-in-left text-center sm:text-left leading-snug">
          Your Neighborhood Roofing & Home Repair Experts
        </h1>

        {/* Subtext */}
        <div className="relative w-full sm:max-w-xl mx-auto sm:mx-0">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full bg-black/80 -skew-x-12 h-10 rounded-r-full z-0"></div>
          <p className="relative text-white px-3 sm:px-5 py-1 text-sm sm:text-base md:text-lg drop-shadow-md z-10 animate-slide-in-left text-center sm:text-left">
            Your Local Experts in Roofing & Home Repair
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center sm:justify-start animate-slide-in-left">
          <Link
            href="/contact"
            className="bg-shop-orange text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:scale-105 transition transform text-center"
          >
            Get a Quote
          </Link>
          <Link
            href="/gallery"
            className="bg-gray-700 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-full shadow-lg hover:bg-gray-600 transition transform text-center"
          >
            View Our Work
          </Link>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition"
      >
        <FaChevronLeft size={16} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition"
      >
        <FaChevronRight size={16} />
      </button>

      {/* Slide-in animation */}
      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSlideshow;
