// src/components/Hero/Hero.jsx
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled(Box)`
  background-image: url('/images/bkgHome.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
  
  /* Add overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const AnimatedContent = styled(Box)`
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(Typography)`
  color: white;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

const Separator = styled(Box)`
  width: 60px;
  height: 3px;
  background: #ff4814;
  margin: 0 auto 2rem;
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <AnimatedContent>
          <Separator />
          <HeroTitle variant="h1" gutterBottom>
            Engenharia & Construção<br />de ponta a ponta
          </HeroTitle>
          <HeroSubtitle variant="h6" paragraph>
            Transformamos seus projetos em realidade:<br />
            Seja residencial, predial ou industrial, nossa entrega<br />
            é sinônimo de excelência.
          </HeroSubtitle>
        </AnimatedContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;