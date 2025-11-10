"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);
    formData.append("access_key", "aabacac2-1a59-4fff-ba61-98a0d6c19ac9");
    formData.append("subject", "New submission from Gerkin Construction site");
    formData.append("redirect", "/thank-you");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
        window.location.href = "/thank-you";
      } else {
        console.log("Web3Forms Error:", data);
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full -mt-8 md:-mt-12 z-20">
      {/* Floating Red Contact Box */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto px-6 md:px-12 bg-gradient-to-r from-red-900 via-red-800 to-red-700 rounded-3xl shadow-2xl text-white py-10 md:py-12 flex flex-col-reverse md:flex-row gap-8"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex flex-col justify-center gap-4 md:order-1"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 mt-4 md:mt-0 text-center md:text-left">
            Request a Quote
          </h2>
          <p className="text-md sm:text-lg opacity-90 text-center md:text-left">
            Schedule your consultation or request a free estimate today. Our
            team will promptly assist with your roofing and home repair project.
          </p>
          <p className="text-sm italic mt-2 opacity-90 text-center md:text-left">
            *Free Estimate on all roofing & home repair projects
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 grid grid-cols-1 gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="rounded-lg px-4 py-3 bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 text-md transition-all duration-300 hover:bg-white/20"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="rounded-lg px-4 py-3 bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 text-md transition-all duration-300 hover:bg-white/20"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="rounded-lg px-4 py-3 bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 text-md transition-all duration-300 hover:bg-white/20"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="rounded-lg px-4 py-3 bg-white/10 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white text-white placeholder-white/70 text-md resize-none transition-all duration-300 hover:bg-white/20"
            required
          />
          <input type="hidden" name="captcha" value="true" />

          <button
            type="submit"
            className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white hover:text-red-900"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="mt-2 text-green-200 font-semibold text-center md:text-left">
              Message sent successfully!
            </p>
          )}
        </motion.form>
      </motion.div>

      {/* Floating animation */}
      <style jsx>{`
        @keyframes floatUpDown {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        section {
          animation: floatUpDown 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
