"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuickEstimate from "@/components/ui/QuickEstimate";

const galleryItems = [
  "/gallery/image1.jpg",
  "/gallery/image2.jpg",
  "/gallery/image3.jpg",
  "/gallery/image4.jpg",
  "/gallery/image5.jpg",
  "/gallery/image6.jpg",
  "/gallery/image7.jpg",

  "/gallery/image8.jpg",
  "/gallery/image9.jpg",
  "/gallery/image10.jpg",
  "/gallery/image11.jpg",
  "/gallery/image12.jpg",
  "/gallery/image13.jpg",
  "/gallery/image14.jpg",

  "/gallery/image15.jpg",
  "/gallery/image16.jpg",
  "/gallery/image17.jpg",
  "/gallery/image18.jpg",
  "/gallery/image19.jpg",
  "/gallery/image20.jpg",
  "/gallery/image21.jpg",

  "/gallery/image22.jpg",
  "/gallery/image23.jpg",
  "/gallery/image24.jpg",
  "/gallery/image25.jpg",
  "/gallery/image26.jpg",
  "/gallery/image27.jpg",
  "/gallery/image28.jpg",

  "/gallery/image29.jpg",
  "/gallery/image30.jpg",
  "/gallery/image31.jpg",

  "/gallery/image32.jpg",
  "/gallery/image33.jpg",
  "/gallery/image34.jpg",
  "/gallery/image35.jpg",
  "/gallery/image36.jpg",
  "/gallery/image37.jpg",
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const prevImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const nextImage = () => {
    if (currentIndex === null) return;
    setCurrentIndex((currentIndex + 1) % galleryItems.length);
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Title with extra top margin */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-center mt-20" // Added mt-20 to push down
      >
        Gallery
      </motion.h1>

      {/* Masonry-style Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
        {galleryItems.map((src, idx) => (
          <motion.div
            key={idx}
            layout
            className="break-inside-avoid relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => openLightbox(idx)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={src}
              alt={`Gallery ${idx + 1}`}
              className="w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center text-white text-lg font-semibold">
              View
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={galleryItems[currentIndex]}
                alt={`Gallery ${currentIndex + 1}`}
                className="max-h-[90vh] w-auto rounded-2xl shadow-2xl"
              />

              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70"
                onClick={closeLightbox}
              >
                <X size={28} />
              </button>

              {/* Previous */}
              <button
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft size={32} />
              </button>

              {/* Next */}
              <button
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <QuickEstimate />
    </div>
  );
}
