"use client";

import React from "react";
import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "@/components/ui/Reviews"; 

// About sections
const sections = [
  {
    title: "Our Mission",
    text: "At Gerkin Construction, our mission is to provide top-quality roofing, siding, gutters, and home repair services. We aim to protect homes and enhance curb appeal while ensuring safety, durability, and exceptional craftsmanship.",
    img: "/gallery/gallery3.jpg",
  },
  {
    title: "Our Values",
    text: "Integrity, transparency, and excellence guide everything we do. We believe in honest communication, high-quality materials, and delivering projects on time, every time.",
    img: "/gallery/gallery4.jpg",
  },
  {
    title: "Our Services",
    text: "We specialize in roof installation and repairs, siding replacement, gutter maintenance, and general home improvements. Every project is handled with care, precision, and attention to detail.",
    img: "/gallery/gallery5.jpg",
  },
  {
    title: "Community & Trust",
    text: "Serving Bedford, Indiana, and surrounding areas, we prioritize building lasting relationships with our clients. Your satisfaction and the safety of your home are our top priorities.",
    img: "/gallery/gallery6.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-32">

      {/* Hero Banner */}
      <HeroBanner
        heroImage="/gallery/gallery11.jpg"
        title="Welcome to Gerkin Construction"
        subtitle="Your trusted experts in roofing, siding, gutters, and home repairs in Bedford, IN."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* About Us Section */}
<section className=" bg-white">
  <Container>
    <div className="space-y-20">
      {sections.map((section, index) => {
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

  

      {/* Testimonials / Reviews Component */}
      <Reviews />

    </div>
  );
}
