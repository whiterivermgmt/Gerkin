"use client";

import React, { useRef, useState } from "react";
import Container from "./Container";
import FooterTop from "./FooterTop";
import { usePathname } from "next/navigation";
import { headerData } from "@/Constants/data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const pathName = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const services = [
    { name: "Roofing", href: "/roofing" },
    { name: "Gutters", href: "/gutters" },
    { name: "Siding", href: "/siding" },
    { name: "Repairs", href: "/repairs" },
  ];

  const slideUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    const formData = new FormData(formRef.current);
    formData.append("access_key", "aabacac2-1a59-4fff-ba61-98a0d6c19ac9");
    formData.append("subject", "New submission from Footer Consultation Form");
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
    <footer className="relative text-white overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image src="/footer/footer.png" alt="Footer background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* FOOTER CONTENT */}
      <div className="relative z-10 flex flex-col">
        {/* ACCREDITATION LOGOS */}
        <div className="flex justify-center items-center gap-10 py-10 border-b border-gray-800">
          <a href="/cert/bbb.jpg" target="_blank" rel="noopener noreferrer" className="group transition-transform duration-500 hover:scale-105">
            <Image
              src="/footer/bbb.png"
              alt="BBB Accredited Business"
              width={130}
              height={80}
              className="drop-shadow-md transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:brightness-125"
            />
          </a>
          <a href="https://www.owenscorning.com/en-us" target="_blank" rel="noopener noreferrer" className="group transition-transform duration-500 hover:scale-105">
            <Image
              src="/footer/owens.png"
              alt="Owens Corning Certified"
              width={140}
              height={80}
              className="drop-shadow-md transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:brightness-125"
            />
          </a>
        </div>

        {/* FOOTER TOP */}
        <FooterTop />

        {/* MAIN FOOTER */}
        <Container>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-16 text-center lg:text-left justify-items-center">
            {/* QUICK LINKS */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
              <h3 className="font-bold text-white mb-5 text-lg tracking-wide uppercase border-b border-red-800 inline-block pb-1">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                {headerData.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className={`transition-all font-medium ${
                        pathName === link.href ? "text-red-400 font-semibold" : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* SERVICES */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp}>
              <h3 className="font-bold text-white mb-5 text-lg tracking-wide uppercase border-b border-red-800 inline-block pb-1">
                Services
              </h3>
              <ul className="space-y-2 text-sm">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      href={service.href}
                      className={`transition-all font-medium ${
                        pathName === service.href ? "text-red-400 font-semibold" : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* FREE CONSULTATION FORM */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-black/80 rounded-2xl p-6 shadow-lg w-full max-w-sm mx-auto lg:mx-0">
              <h3 className="font-bold text-white mb-4 text-lg tracking-wide uppercase border-b border-red-800 inline-block pb-1">
                Request a Free Consultation
              </h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                Fill out the form below and our team will contact you to schedule your free consultation.
              </p>
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-600 bg-black/70 text-white rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-600 bg-black/70 text-white rounded-lg px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 bg-linear-to-r from-[#7a0000] to-[#b30000] text-white rounded-lg text-sm font-medium hover:from-[#b30000] hover:to-[#e60000] transition disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Request Now"}
                </button>
              </form>
              {success && <p className="mt-2 text-green-400 font-semibold text-center">Your request has been sent successfully!</p>}
            </motion.div>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-gray-800 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-200">
            <p>© {new Date().getFullYear()} Gerkin Construction</p>
            <p>
              Designed by{" "}
              <span className="font-medium text-white hover:text-red-400 transition-colors">
                White River Media
              </span>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
