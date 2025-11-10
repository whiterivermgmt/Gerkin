"use client";

import React, { FC, useState } from "react";
import { headerData } from "@/Constants/data";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown } from "lucide-react";
import { SiFacebook, SiGoogle, SiYelp } from "react-icons/si";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathName = usePathname();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const socialLinks = [
    { href: "https://www.facebook.com/p/Gerkin-Construction-LLC-100093552122319/", icon: <SiFacebook />, name: "Facebook" },
    { href: "https://www.google.com/search?q=gerkin+construction", icon: <SiGoogle />, name: "Google Reviews" },
    { href: "https://www.yelp.com/biz/gerkin-construction-llc-bedford", icon: <SiYelp />, name: "Yelp" },
  ];

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-md z-50 shadow-2xl rounded-r-3xl flex flex-col justify-between"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <motion.button
            onClick={onClose}
            whileHover={{ rotate: 90, scale: 1.15 }}
            className="text-red-600 hover:text-red-800 p-3 rounded-full transition-all duration-300 shadow-sm bg-white/80 cursor-pointer"
          >
            <X className="w-7 h-7" />
          </motion.button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-4 px-6 mt-4 overflow-y-auto">
          {headerData.map((item, idx) => {
            const isActive = pathName === item.href;
            const hasSubmenu = item.submenu && item.submenu.length > 0;

            return (
              <div key={item.title} className="w-full">
                <div
                  className={`flex justify-between items-center w-full px-4 py-4 text-lg font-semibold rounded-lg cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-red-100 text-red-700"
                      : "hover:bg-red-50 hover:text-red-700"
                  }`}
                  onClick={() => (hasSubmenu ? toggleSubmenu(idx) : onClose())}
                >
                  <span className="text-lg">{item.title}</span>
                  {hasSubmenu && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openIndex === idx ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </div>

                {/* Submenu Animation */}
                <AnimatePresence>
                  {hasSubmenu && openIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="flex flex-col ml-4 mt-2 gap-2"
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="px-4 py-3 text-gray-700 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-300 text-lg"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Footer Social + Logo */}
        <div className="flex flex-col items-center gap-6 mb-8">
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => (
              <div key={idx} className="relative group flex flex-col items-center">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-700 hover:text-red-900 cursor-pointer transition-colors duration-300 p-3 rounded-full bg-white/90 shadow-md"
                >
                  {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                </a>
                <span className="absolute -top-8 text-xs bg-white text-black px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          <Link href="/">
            <Image
              src="/logo/logofooter.png"
              alt="Footer Logo"
              width={160}
              height={80}
              className="object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default SideMenu;
