"use client";

import React from "react";
import HeroBanner from "@/components/ui/HeroBanner";
import Container from "@/components/ui/Container";
import OurServices from "@/components/ui/OurServices";

const ServicesPage = () => {
  return (
    <>
      {/* Hero Banner for Services */}
      <HeroBanner
        heroImage="/gallery/gallery12.jpg"
        title="Our Services"
        subtitle="Expert exterior services for your home and business in Bedford, IN."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Services Section */}
      <Container className="mt-16">
        <OurServices
          headerTitle="Our Core Services"
          headerSubtitle="We specialize in roofing, siding, gutters, and general home repairs to keep your property safe, functional, and beautiful."
        />
      </Container>
    </>
  );
};

export default ServicesPage;
