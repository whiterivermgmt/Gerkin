"use client";

import React from "react";
import Link from "next/link";

interface Button {
  text: string;
  href: string;
  variant: "red" | "gray";
}

interface Service {
  title: string;
  image: string;
  description: string;
  buttons: Button[];
}

interface ServicesSectionProps {
  headerTitle?: string;
  headerSubtitle?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    title: "Roofing",
    image: "/gallery/gallery1.jpg",
    description:
      "Expert roofing services for residential and commercial properties. We handle installations, replacements, and roof repairs with precision and care.",
    buttons: [
      { text: "New Roofs", href: "/roofing", variant: "red" },
      { text: "Roof Repairs", href: "/roofing", variant: "gray" },
    ],
  },
  {
    title: "Siding",
    image: "/gallery/gallery2.jpg",
    description:
      "Protect your home with high-quality siding installations. We offer vinyl, James Hardie, and custom siding solutions for every home.",
    buttons: [
      { text: "Vinyl Siding", href: "/siding", variant: "red" },
      { text: "Siding Repairs", href: "/siding", variant: "gray" },
    ],
  },
  {
    title: "Gutters",
    image: "/services/gutters/gutter5.jpg",
    description:
      "Keep your home safe from water damage with professionally installed and maintained gutter systems. Seamless gutters, downspouts, and repairs.",
    buttons: [
      { text: "New Gutters", href: "/gutters", variant: "red" },
      { text: "Gutter Repairs", href: "/gutters", variant: "gray" },
    ],
  },
  {
    title: "Repairs",
    image: "/gallery/gallery4.jpg",
    description:
      "Comprehensive home repair services including roof patching, siding fixes, and general exterior maintenance to keep your property in top shape.",
    buttons: [
      { text: "Roof Repairs", href: "/repairs", variant: "red" },
      { text: "Siding Repairs", href: "/repairs", variant: "gray" },
    ],
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  headerTitle = "OUR SERVICES",
  headerSubtitle = "Gerkins Construction provides expert exterior services for homes and businesses.",
  services = defaultServices,
}) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">{headerTitle}</h2>
          <p className="text-gray-500 text-lg">{headerSubtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transform transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer"
              onClick={() => {
                if (service.buttons[0]) {
                  window.location.href = service.buttons[0].href; // Navigate to first button link
                }
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 mb-6">{service.description}</p>
                </div>

                {/* Buttons Container */}
                <div className="px-2 sm:px-0 mt-auto">
                  <div className="flex gap-4 justify-center">
                    {service.buttons.map((btn) => (
                      <Link
                        key={btn.text}
                        href={btn.href}
                        className={`flex-1 px-5 py-3 rounded-lg text-sm font-semibold text-white text-center transition-all duration-300 whitespace-nowrap ${
                          btn.variant === "red"
                            ? "bg-linear-to-r from-red-700 to-red-500 hover:opacity-90"
                            : "bg-gray-400 hover:bg-gray-500"
                        }`}
                        onClick={(e) => e.stopPropagation()} // Prevent card click from overriding button
                      >
                        {btn.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
