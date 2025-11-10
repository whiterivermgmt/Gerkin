"use client";

import Link from "next/link";
import React from "react";
import { headerData } from "@/Constants/data";
import { Phone, Banknote, GraduationCap, MessageSquare } from "lucide-react";

interface Service {
  title: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
}

interface DropdownProps {
  parentIndex: number;
  menuTitle: string; // which menu item to render
}

const DropdownMenu: React.FC<DropdownProps> = ({ parentIndex, menuTitle }) => {
  let services: Service[] =
    headerData.find((item) => item.title === menuTitle)?.submenu || [];

  // Remove "About" from About dropdown
  if (menuTitle === "About") {
    services = services.filter((s) => s.title !== "About");
  }

  if (!services.length) return null;

  const alignmentClass = parentIndex > 2 ? "right-0" : "left-0";

  return (
    <div
      className={`absolute top-full ${alignmentClass} w-screen max-w-md overflow-hidden rounded-3xl bg-gray-100/95 shadow-xl ring-1 ring-gray-900/10 transition-all duration-200 ease-out z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1`}
    >
      {/* Top Grid (service cards) */}
      <div className="p-4 space-y-3">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.title}
              className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-200 transition"
            >
              <div className="flex w-11 h-11 flex-none items-center justify-center rounded-lg bg-gray-200 group-hover:bg-white transition">
                {IconComponent ? (
                  <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-shop-orange transition" />
                ) : (
                  <Phone className="w-6 h-6 text-gray-600 group-hover:text-shop-orange transition" />
                )}
              </div>
              <div className="flex-auto">
                <Link
                  href={service.href}
                  className="block font-semibold text-gray-900 hover:text-shop-orange transition"
                >
                  {service.title}
                  <span className="absolute inset-0" />
                </Link>
                <p className="mt-1 text-gray-600 text-sm">
                  {service.description ?? "Professional services for your home and business."}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Row */}
      <div className="grid grid-cols-2 divide-x divide-gray-300 bg-gray-200 text-sm">
        {menuTitle === "Services" ? (
          <>
            <Link
              href="/about"
              className="flex items-center justify-center gap-x-2 p-2 font-semibold text-gray-900 hover:bg-gray-300 transition"
            >
              <GraduationCap className="w-4 h-4 text-gray-700" /> Learn More
            </Link>

            <Link
              href="/contact"
              className="flex items-center justify-center gap-x-2 p-2 font-semibold text-gray-900 hover:bg-gray-300 transition"
            >
              <MessageSquare className="w-4 h-4 text-gray-700" /> Get in Touch
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-x-2 p-2 font-semibold text-gray-900 hover:bg-gray-300 transition"
            >
              <Phone className="w-4 h-4 text-gray-700" /> Contact Sales
            </Link>

            <Link
              href="/financing"
              className="flex items-center justify-center gap-x-2 p-2 font-semibold text-gray-900 hover:bg-gray-300 transition"
            >
              <Banknote className="w-4 h-4 text-gray-700" /> View Financing
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
