"use client";

import React from "react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";

const SocialMediaHeader = () => {
  const socials = [
    {
      icon: <SiFacebook size={18} />,
      href: "https://www.facebook.com/p/Gerkin-Construction-LLC-100093552122319/",
      label: "Facebook",
    },
    {
      icon: <SiGoogle size={18} />,
      href: "https://www.google.com/search?q=gerkin+construction",
      label: "Google Reviews",
    },
    {
      icon: <SiYelp size={18} />,
      href: "https://www.yelp.com/biz/gerkin-construction-llc-bedford",
      label: "Yelp",
    },
  ];

  return (
    <div className="w-full z-[100] backdrop-blur-md">
      <div className="w-full bg-gradient-to-r from-red-900 via-red-900 to-red-800/90 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center md:justify-end gap-4 px-6 py-2">
          <span className="font-semibold flex items-center gap-4 flex-wrap md:flex-nowrap text-white">
            Schedule a Consultation
            <a
              href="tel:8125831318"
              className="font-bold underline hover:text-gray-200 transition-colors duration-200"
            >
              (812)-583-1318
            </a>
            <span className="hidden md:inline font-bold">|</span>

            <div className="flex items-center gap-3">
              {socials.map((social, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-black transition-colors cursor-pointer p-1 rounded-full"
                  >
                    {social.icon}
                  </a>
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-white text-black px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHeader;
