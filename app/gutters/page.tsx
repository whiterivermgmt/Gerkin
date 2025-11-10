"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews";

const gutterSections = [
  {
    title: "Gutter Installation",
    text: "Properly installed gutters are essential for protecting your home’s foundation, siding, and landscaping. At Gerkin Construction, we measure, plan, and install seamless gutters that efficiently channel water away from your property. Using high-quality materials, our installations are designed to last, preventing leaks, clogs, and costly damage while maintaining a clean, polished look for your home.",
    img: "/services/gutters/gutter1.jpg",
  },
  {
    title: "Gutter Repairs",
    text: "Damaged or leaking gutters can lead to serious water damage if left unchecked. Our team identifies problem areas, replaces worn sections, and ensures your gutters are fully functional. From small cracks to misaligned downspouts, we provide precise repairs that restore protection and peace of mind.",
    img: "/services/gutters/gutter2.jpg",
  },
  {
    title: "Gutter Maintenance & Cleaning",
    text: "Regular maintenance keeps your gutters performing at their best and prevents blockages that can damage your home. We offer thorough cleaning, debris removal, and inspections to make sure water flows freely, protecting your roof, siding, and foundation year-round. Proper maintenance extends the life of your gutters and reduces costly repairs in the future.",
    img: "/services/gutters/gutter3.jpg",
  },
  {
    title: "Custom Gutter Solutions",
    text: "Every home is unique, and so are its gutter needs. Gerkin Construction provides custom solutions including gutter guards, oversized downspouts, and tailored designs to match your home’s style and roofline. Our goal is to combine functionality with aesthetic appeal, ensuring your gutters not only protect your home but also enhance its overall look.",
    img: "/services/gutters/gutter4.jpg",
  },
];

export default function GuttersPage() {
  return (
    <div className="space-y-32">
      {/* Hero Banner */}
      <HeroBanner
        heroImage="/services/gutter.webp"
        title="Seamless Gutters for Lasting Protection"
        subtitle="Gerkin Construction delivers professional gutter installation, repair, and maintenance services to keep your home safe and stylish."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Gutter Sections */}
      <section className="bg-white">
        <Container>
          <div className="space-y-20">
            {gutterSections.map((section, index) => {
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
