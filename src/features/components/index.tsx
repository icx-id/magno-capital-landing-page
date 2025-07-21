import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Box } from '@mantine/core';
import React from 'react';
import HeaderSection from './header';
import AboutUsSection from './aboutUs';
import ContactUsSection from './contactUs';
import OurPartnersSection from './ourPartners';
import PortfolioSection from './portfolio';
import OurValuesSection from './ourValues';

export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Box style={{ overflowX: 'hidden' }}>
        <HeaderSection />
        <AboutUsSection />
        <OurValuesSection />
        <PortfolioSection />
        <OurPartnersSection />
        <ContactUsSection />
      </Box>
      <Footer />
    </>
  );
};
