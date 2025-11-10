"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews";

const sidingSections = [
  {
    title: "Vinyl Siding",
    text: "Vinyl siding is a popular choice for homeowners looking for a low-maintenance, durable exterior. At Gerkin Construction, we carefully install each panel to ensure a perfect fit and long-lasting protection against weather, moisture, and wear. With a wide variety of colors and finishes, vinyl siding can be customized to match your home’s style, providing both functional durability and curb appeal for years to come.",
    img: "/services/siding/siding1.jpg",
  },
  {
    title: "Cement Siding",
    text: "Fiber cement siding is known for its strength and resilience, making it an excellent choice for both traditional and modern homes. Resistant to fire, rot, and pests, it stands up to harsh weather while maintaining its appearance over time. Our team installs each panel with precision, creating a smooth, professional look that enhances your home’s design and value while offering unmatched long-term performance.",
    img: "/services/siding/siding3.jpg",
  },
  {
    title: "Wood Siding",
    text: "Wood siding brings natural warmth, beauty, and character to any home. Our experts carefully install and treat wood panels to protect against moisture and weathering, ensuring longevity without sacrificing aesthetic appeal. Whether you prefer classic clapboard or modern plank styles, we help you choose the right wood and finish to complement your home while maintaining its charm and elegance.",
    img: "/services/siding/siding4.jpg",
  },
  {
    title: "Siding Repairs & Upgrades",
    text: "Even small siding issues can impact your home’s protection and appearance. Gerkin Construction provides expert repairs and upgrades to restore damaged siding, improve insulation, and enhance your home’s overall look. Whether it’s replacing worn panels, updating old siding styles, or performing full exterior upgrades, we deliver precise workmanship and quality materials that keep your home safe, efficient, and beautiful.",
    img: "/services/siding/siding2.jpg",
  },
];

export default function SidingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Banner */}
      <HeroBanner
        heroImage="/gallery/gallery2.jpg"
        title="Durable Siding That Elevates Your Home"
        subtitle="Gerkin Construction provides professional siding installation, repair, and upgrade services that protect and enhance your home."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Siding Sections */}
      <section className="bg-white">
        <Container>
          <div className="space-y-20">
            {sidingSections.map((section, index) => {
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
