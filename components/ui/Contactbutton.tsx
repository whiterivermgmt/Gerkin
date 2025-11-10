"use client";

import React from "react";
import Link from "next/link";

const Contactbutton = () => {
  return (
    <Link href="/contact">
      <button
        className="
          px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-white text-base sm:text-lg
          bg-linear-to-r from-red-900 via-red-900 to-red-800
          hover:from-yellow-600 hover:via-yellow-500 hover:to-yellow-400
          transition-all duration-300 ease-in-out
          shadow-lg hover:shadow-2xl
          transform hover:scale-105
          cursor-pointer
        "
      >
        Contact Us
      </button>
    </Link>
  );
};

export default Contactbutton;
