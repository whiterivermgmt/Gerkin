"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews";
import Script from "next/script";
import QuickEstimate from "@/components/ui/QuickEstimate";

const roofingSections = [
  {
    title: "Residential Roofing",
    text: "Our residential roofing services are designed to keep your home safe, energy-efficient, and visually appealing. We handle everything from full roof replacements to upgrades using high-quality shingles and materials that suit your home’s style. Every installation is completed with precision, ensuring lasting protection for your family and peace of mind for years to come.",
    img: "/gallery/gallery1.jpg",
  },
  {
    title: "Commercial Roofing",
    text: "Gerkin Construction provides comprehensive roofing solutions for commercial properties of all sizes. From flat and metal roofs to modern architectural designs, we handle each project with expert planning, timely execution, and minimal disruption to your business operations. Our focus is on durability, safety, and long-term performance, keeping your commercial property protected and professional-looking.",
    img: "/gallery/image50.jpg",
  },
  {
    title: "Roof Repairs & Maintenance",
    text: "We offer fast, reliable roof repair and maintenance services to address leaks, storm damage, or general wear and tear. Our team inspects every roof thoroughly, applies the right solutions, and ensures each repair is done to last. Regular maintenance and timely repairs extend your roof’s life, prevent costly damage, and maintain the value and safety of your home or business.",
    img: "/gallery/image9.jpg",
  },
  {
    title: "Custom Roof Solutions",
    text: "For homeowners and businesses looking for something unique, our custom roofing services deliver tailored solutions. We work with you to select the right materials, colors, and styles to match your vision and property design. Every custom roof combines aesthetic appeal with top-tier functionality, giving you a one-of-a-kind exterior that’s built to perform and impress.",
    img: "/gallery/gallery4.jpg",
  },
];

export default function RoofingPage() {
  return (
    <div className="space-y-32">
      {/* Hero Banner */}
      <HeroBanner
        heroImage="/gallery/image11.jpg"
        title="Reliable Roofing, Built to Last"
        subtitle="From residential to commercial projects, Gerkin Construction provides expert roofing services that protect your home or business."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Roofing Sections */}
      <section className="bg-white">
        <Container>
          <div className="space-y-20">
            {roofingSections.map((section, index) => {
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
 <Reviews />
                        <QuickEstimate />
    </div>
  );
}
