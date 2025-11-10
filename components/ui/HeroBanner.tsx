"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroBannerProps {
  heroImage: string;
  title: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  heroImage,
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <section className="relative w-full h-[450px] sm:h-[500px] md:h-[520px] overflow-hidden">
      <Image
        src={heroImage}
        alt={title}
        fill
        className="object-cover object-center brightness-75"
      />
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-24 h-full space-y-3 z-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-base sm:text-lg lg:text-xl drop-shadow-md max-w-2xl">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          {primaryButtonText && primaryButtonHref && (
            <Link
              href={primaryButtonHref}
              className="bg-shop-orange text-white font-semibold px-10 py-2 rounded-full shadow-lg hover:scale-105 transition transform"
            >
              {primaryButtonText}
            </Link>
          )}
          {secondaryButtonText && secondaryButtonHref && (
            <Link
              href={secondaryButtonHref}
              className="bg-gray-700 text-white font-semibold px-10 py-2 rounded-full shadow-lg hover:scale-105 transition transform"
            >
              {secondaryButtonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
