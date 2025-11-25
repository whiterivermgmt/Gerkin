import Container from '@/components/ui/Container';
import HeroBanner from '@/components/ui/HeroBanner';
import OurServices from '@/components/ui/OurServices';
import QuickEstimate from '@/components/ui/QuickEstimate';
import React from 'react';

const FinancingPage = () => {
  return (
    <>
      {/* Hero Banner for Financing */}
      <HeroBanner
        heroImage="/gallery/gallery23.jpg"
        title="Financing"
        subtitle="All of our roofing and construction services are eligible for financing through Service Finance Company — making it simple to protect and improve your home when it matters."
        primaryButtonText="Get a Quote"
        primaryButtonHref="/contact"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />

      {/* Page Content */}
      <Container className="mt-16">
        <OurServices
          headerTitle="Affordable Home Improvements Made Simple"
          headerSubtitle="Protecting and improving your Bedford home shouldn’t be stressful. Our financing options let you get the work done today while spreading payments over time that fit your budget."
        />
      </Container>
                <QuickEstimate />
    </>
  );
};

export default FinancingPage;
