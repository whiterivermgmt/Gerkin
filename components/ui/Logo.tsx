"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="block select-none">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-start w-fit origin-left hover:scale-105 transition-transform duration-300"
      >
        <Image
          src="/logo/logo5.jpg"
          alt="Gerkin Construction Logo"
          width={240} // slightly larger base width
          height={80}
          className="w-[100px] sm:w-[140px] md:w-[170px] lg:w-[200px] h-auto" // responsive scaling
          priority
        />
      </motion.div>
    </Link>
  );
};

export default Logo;
