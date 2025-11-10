"use client";

import { headerData } from "@/Constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ChevronDown } from "lucide-react";
import DropdownMenu from "./DropdownMenu";

const HeaderMenu = () => {
  const pathName = usePathname();

  return (
    <nav className="hidden md:flex flex-wrap items-center justify-center gap-6 text-base md:text-lg font-semibold text-black relative">
      {headerData?.map((item, index) => {
        const isActive = pathName === item.href;
        const hasSubmenu = !!item.submenu;

        return (
          <div key={item.title} className="relative group flex items-center min-w-[70px]">
            <Link
              href={item.href}
              className={`relative flex items-center gap-1 transition-colors duration-300 ${
                isActive ? "text-shop-orange" : "text-black hover:text-shop-orange"
              }`}
            >
              <span className="whitespace-nowrap">{item.title}</span>
              {hasSubmenu && (
                <ChevronDown className="w-3 h-3 mt-0.5 transition-transform duration-300 group-hover:rotate-180" />
              )}
              {/* Underline */}
              <span
                className={`absolute -bottom-1 h-0.5 w-full bg-shop-orange transition-transform origin-left ${
                  isActive ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></span>
            </Link>

            {hasSubmenu && (
              <div className="absolute top-full left-0 w-screen">
                <DropdownMenu parentIndex={index} menuTitle={item.title} />
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default HeaderMenu;
