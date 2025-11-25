"use client";

import Container from "@/components/ui/Container";
import HeroBanner from "@/components/ui/HeroBanner";
import { motion } from "framer-motion";
import { FaDollarSign, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import React from "react";

const openPositions = [
  {
    title: "Roofing Technician",
    location: "Bedford, IN",
    description:
      "Install, repair, and maintain residential and commercial roofs. Must have experience with various roofing materials and tools.",
  },
  {
    title: "Siding & Gutter Specialist",
    location: "Bedford, IN",
    description:
      "Install and repair siding and gutters for residential clients. Attention to detail and experience required.",
  },
  {
    title: "Project Manager",
    location: "Bedford, IN",
    description:
      "Manage residential roofing projects from start to finish. Coordinate teams, schedule inspections, and ensure client satisfaction.",
  },
];

const CareersPage = () => {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        heroImage="/gallery/image12.jpg"
        title="Join Our Team"
        subtitle="Build your career with Gerkin Construction, Bedford's trusted roofing and home repair experts."
        primaryButtonText="Apply Now"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Page Content */}
      <Container className="mt-24 space-y-24">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
            Why Work With Gerkin?
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            At Gerkin Construction, we don’t just build roofs—we build careers. Join a team that values integrity, teamwork, and growth while serving our community with top-quality work.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Open Positions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {openPositions.map((job, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white shadow-2xl rounded-2xl p-8 flex flex-col justify-between transition-transform duration-300"
              >
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900">{job.title}</h4>
                  <p className="text-red-800 italic font-semibold">{job.location}</p>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                <a
                  href="/contact"
                  className="mt-6 inline-block bg-gradient-to-r from-red-800 to-red-600 text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg hover:scale-105 hover:opacity-90 transition"
                >
                  Apply Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Work With Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-6xl mx-auto space-y-12"
        >
          <h3 className="text-3xl font-bold mb-8">What We Offer</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-8 bg-red-50 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaDollarSign size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Competitive Pay</h4>
              <p className="text-gray-700">We value our team and offer fair, competitive wages.</p>
            </div>
            <div className="p-8 bg-red-50 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaChalkboardTeacher size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Training & Growth</h4>
              <p className="text-gray-700">Opportunities to learn new skills and advance your career.</p>
            </div>
            <div className="p-8 bg-red-50 rounded-2xl shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-105 transition">
              <FaUsers size={40} className="text-red-700" />
              <h4 className="font-semibold text-xl">Community & Teamwork</h4>
              <p className="text-gray-700">Be part of a team that supports each other and our community.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
        </motion.div>
      </Container>
    </>
  );
};

export default CareersPage;
