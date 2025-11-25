"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews";

const repairSections = [
  {
    title: "Roof Repairs",
    text: "A damaged roof can compromise your home’s safety and comfort. Our team inspects every issue, from missing shingles to leaks, and provides precise repairs that restore protection and prevent future problems. We use quality materials and expert techniques to ensure your roof performs at its best, no matter the weather.",
    img: "/gallery/gallery25.jpg",
  },
  {
    title: "Siding Repairs",
    text: "Cracked, warped, or damaged siding not only affects your home’s appearance but also its protection from the elements. Gerkin Construction carefully assesses and repairs each section, restoring durability and curb appeal. Our repairs are designed to blend seamlessly with your existing exterior for a polished, lasting result.",
    img: "/services/repair/repair4.jpg",
  },
  {
    title: "Window & Door Repairs",
    text: "Properly functioning windows and doors are essential for energy efficiency, security, and comfort. We fix leaks, broken seals, and alignment issues while maintaining the look of your home. Each repair improves performance and extends the life of your windows and doors.",
    img: "/services/repair/repair2.jpg",
  },
  {
    title: "Storm & Emergency Repairs",
    text: "Unexpected damage from storms or accidents requires fast, reliable attention. Our team responds quickly to emergency repair needs, stabilizing your home, preventing further damage, and restoring safety. From roof tarping to siding and gutter fixes, we act promptly to protect your property.",
    img: "/services/repair/repair1.jpg",
  },
];

export default function RepairsPage() {
  return (
    <div className="space-y-32">
      {/* Hero Banner */}
      <HeroBanner
        heroImage="/gallery/gallery29.jpg"
        title="Reliable Repairs for a Stronger Home"
        subtitle="Gerkin Construction provides expert repairs for roofs, siding, windows, doors, and emergency situations to keep your home safe and functional."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Repair Sections */}
      <section className="bg-white">
        <Container>
          <div className="space-y-20">
            {repairSections.map((section, index) => {
              const reverse = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-16 ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                      <Image
                        src={section.img}
                        alt={section.title}
                        width={600}
                        height={400}
                        className="rounded-xl object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                      <p className="text-lg text-gray-700">{section.text}</p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Testimonials / Reviews */}
      <Reviews />
    </div>
  );
}
