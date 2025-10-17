// src/pages/Home.jsx
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import ServicesGrid from '../components/ServicesGrid/ServicesGrid';
import AboutSection from '../components/AboutSection/AboutSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import ProjectsSection from '../components/ProjectsSection/ProjectsSection';
import ClientsSection from '../components/ClientsSection/ClientsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import OpinionsSection from '../components/OpinionsSection/OpinionsSection';

const Home = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection />
      <ClientsSection />
      <OpinionsSection />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default Home;