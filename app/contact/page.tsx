"use client";

import React, { useState, useRef } from "react";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";
import { cn } from "@/lib/utils";

const footerImage = "/gallery/image10.jpg";

const socialLinks = [
  { title: "Facebook", href: "https://www.facebook.com/Gerkin-Construction-LLC-100093552122319/", icon: <SiFacebook className="w-5 h-5" /> },
  { title: "Google Reviews", href: "https://www.google.com/search?q=gerkin+construction", icon: <SiGoogle className="w-5 h-5" /> },
  { title: "Yelp", href: "https://www.yelp.com/biz/gerkin-construction-bedford", icon: <SiYelp className="w-5 h-5" /> },
];

interface Web3FormsResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    formData.append("access_key", "aabacac2-1a59-4fff-ba61-98a0d6c19ac9");
    formData.append("subject", "New submission from Gerkin Construction site");
    formData.append("redirect", "/thank-you");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: Web3FormsResponse = await res.json();

      if (data.success) {
        setSuccess(true);
        formRef.current.reset();
        window.location.href = "/thank-you";
      } else {
        console.log("Web3Forms Error:", data);
        alert("There was an issue sending your message. Please try again.");
      }
    } catch (err) {
      console.error("Submit Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${footerImage})` }}
        />
        <div className="absolute inset-0 pointer-events-none bg-black/80"></div>

        <Container className="relative max-w-6xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            {/* Contact Info */}
            <div className="space-y-6 text-white">
              <h2 className="text-5xl font-extrabold text-red-700">Get in Touch</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                Questions about roofing, siding, gutters, or home repair? We’re here to help.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="font-bold text-red-700">📍 Location:</span>
                  <span> Bedford, IN 47421</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-red-700">⏰ Hours:</span>
                  <span>Mon-Fri: 8am - 5pm | Sat-Sun: Closed</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-red-700">📞 Phone:</span>
                  <span>(812) 583-1318</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-red-700">✉️ Email:</span>
                  <span>gerkinconstruction@gmail.com</span>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "relative p-3 border rounded-full border-white text-white hover:scale-110 transition-all duration-300 hover:text-red-700 hover:border-red-700 flex items-center justify-center group"
                    )}
                    aria-label={item.title}
                  >
                    {item.icon}
                    <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-700 outline-none text-gray-900 placeholder-gray-400"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-700 outline-none text-gray-900 placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-700 outline-none text-gray-900 placeholder-gray-400"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="border border-gray-300 rounded-md p-4 focus:ring-2 focus:ring-red-700 outline-none text-gray-900 placeholder-gray-400"
                    required
                  />
                  <input type="hidden" name="captcha" value="true" />
                  <button
                    type="submit"
                    className="bg-red-700 hover:bg-red-800 text-white font-semibold py-4 rounded-xl transition-all w-full shadow-md hover:shadow-lg"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {success && (
                <p className="mt-4 text-green-700 font-semibold">Message sent successfully!</p>
              )}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-white">
        <Container className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-extrabold text-black text-center mb-12">
            Visit Us / Contact Info
          </h2>

          <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6 text-gray-800 text-lg">
              <p>📍  Bedford, IN 47421</p>
              <p>⏰ Mon-Fri: 8am - 5pm | Sat-Sun: Closed</p>
              <p>📞 (812) 583-1318</p>
              <p>✉️ gerkinconstruction@gmail.com</p>

              <div className="flex gap-4 mt-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "relative p-3 border rounded-full border-black text-black hover:scale-110 transition-all duration-300 hover:text-red-700 hover:border-red-700 flex items-center justify-center group"
                    )}
                    aria-label={item.title}
                  >
                    {item.icon}
                    <span className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <iframe
                title="Gerkin Construction Bedford IN"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.435022876168!2d-86.48868518464787!3d38.86107727963252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886d571a6c47f2ed%3A0x4770d6ad6d6aa8c3!2sGerkin%20Construction!5e0!3m2!1sen!2sus!4v1700098765432!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
