"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const QuickEstimate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);
    formData.append("access_key", "aabacac2-1a59-4fff-ba61-98a0d6c19ac9");
    formData.append("subject", "New Quick Estimate Submission");
    formData.append("redirect", "/thank-you");
    formData.append("captcha", "true");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
        setIsOpen(false);
      } else {
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Main Section - safe, no overlap */}
      <section className="relative w-full py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4 bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Image */}
          <div className="md:w-1/2 w-full aspect-[16/9] md:h-[400px] relative rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/gallery/gallery2.jpg"
              alt="Roofing Estimate"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text & Buttons */}
          <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Get Your Quick Estimate
            </h2>
            <p className="text-gray-600">
              Fill out a short form to receive a fast, accurate estimate for your roofing project.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Quick Estimate
              </button>

              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-red-600 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-[9999] p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-xl shadow-xl p-8 w-full max-w-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-6">Quick Estimate Form</h3>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4"
            >
              <input type="text" name="name" placeholder="Full Name" className="border px-4 py-2 rounded-lg" required />
              <input type="email" name="email" placeholder="Email Address" className="border px-4 py-2 rounded-lg" required />
              <input type="tel" name="phone" placeholder="Phone Number" className="border px-4 py-2 rounded-lg" required />
              <input type="text" name="address" placeholder="Property Address" className="border px-4 py-2 rounded-lg" required />
              <input type="text" name="roofType" placeholder="Roof Type (House, Commercial, etc.)" className="border px-4 py-2 rounded-lg" />

              <select name="serviceType" className="border px-4 py-2 rounded-lg">
                <option>Service Type</option>
                <option>Repair</option>
                <option>Replace</option>
                <option>Inspection</option>
              </select>

              <textarea name="damage" placeholder="Known Damage / Leaks" className="border px-4 py-2 rounded-lg" rows={3} />

              <input type="file" name="files" className="border px-4 py-2 rounded-lg" multiple />

              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit"}
              </button>

              {success && (
                <p className="text-green-600 font-semibold mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default QuickEstimate;
