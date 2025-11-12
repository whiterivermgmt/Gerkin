"use client";

import React, { useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import Contactbutton from "./Contactbutton";
import SideMenu from "./SideMenu";
import { AlignLeft } from "lucide-react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="w-full z-40 sticky top-0 backdrop-blur-md bg-white/70 shadow-md transition-all duration-300">
        <Container
          fullWidth
          className="flex items-center justify-between py-4 md:py-6 lg:px-16"
        >
          {/* Left: Mobile menu button + Logo */}
          <div className="flex items-center w-auto md:w-1/3 justify-between md:justify-start gap-4 md:gap-6">
            {/* Logo (on mobile left) */}
            <Logo />

            {/* Desktop menu is hidden on mobile */}
            <div className="hidden md:flex w-full md:w-1/3 justify-center">
              <HeaderMenu />
            </div>

            {/* Mobile menu button (on mobile right) */}
            <div
              className="md:hidden ml-auto cursor-pointer hover:text-shop-orange transition-colors"
              onClick={openSidebar}
            >
              <AlignLeft className="w-6 h-6" />
            </div>
          </div>

          {/* Center: Contact button on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:flex md:justify-end md:w-1/3">
            <Contactbutton />
          </div>
        </Container>
      </header>

      {/* Side Menu */}
      <SideMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
