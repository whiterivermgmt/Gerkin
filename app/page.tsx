import ContactSection from '@/components/ui/ContactSection';
import Container from '@/components/ui/Container';
import HeroSlideshow from '@/components/ui/HeroSlideshow';
import HomeGallery from '@/components/ui/HomeGallery';
import OurServices from '@/components/ui/OurServices';
import PremiumSection from '@/components/ui/PremiumSection';
import TestimonialsCarousel from '@/components/ui/Reviews';
import WhyGerkin from '@/components/ui/WhyGerkin';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSlideshow />
        <div>
          <ContactSection />
        </div> 
          <OurServices />
          <PremiumSection />
          <WhyGerkin />
          <HomeGallery />
          <TestimonialsCarousel />
    </>
  );
};

export default Home;
