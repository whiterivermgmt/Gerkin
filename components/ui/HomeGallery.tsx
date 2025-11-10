"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const galleryImages = [
  "/gallery/gallery1.jpg",
  "/gallery/gallery2.jpg",
  "/gallery/gallery3.jpg",
  "/gallery/gallery4.jpg",
  "/gallery/gallery5.jpg",
  "/gallery/gallery6.jpg",
  "/gallery/gallery7.jpg",
  "/gallery/gallery8.jpg",
];

const HomeGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-gray-50 py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 px-6"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          See the Difference We Make
        </h2>
        <p className="text-gray-600 sm:text-lg max-w-2xl mx-auto">
          Proudly serving Bedford and neighboring towns, Gerkin Construction
          brings small-town values and big results to every home we touch. From
          new roofs to detailed repairs, our craftsmanship stands as a testament
          to the pride we take in our community.
        </p>
      </motion.div>

      {/* Cascading Gallery */}
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative flex flex-wrap -mx-3 -mt-6">
          {galleryImages.map((img, i) => {
            // Staggered cascade offsets
            const offset = (i % 4) * 20; // 0, 20, 40, 60px
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="w-1/2 sm:w-1/3 lg:w-1/4 px-3 mt-6 cursor-pointer relative"
                style={{ marginTop: `${offset}px` }}
                onClick={() => openModal(i)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="rounded-xl shadow-2xl w-full object-cover h-64"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center text-white font-semibold text-lg rounded-xl"
                >
                  View
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="mt-8 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center text-red-700 font-bold hover:text-red-900 transition-colors"
          >
            View All
            <span className="ml-2 animate-bounce">→</span>
          </a>
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.img
              src={galleryImages[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              className="max-w-4xl max-h-[80vh] object-cover rounded-xl shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-3xl"
            >
              <FaTimes />
            </button>
            {/* Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 text-white text-3xl"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 text-white text-3xl"
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HomeGallery;
