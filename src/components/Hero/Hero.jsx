import React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { keyframes } from 'styled-components';
import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// === ANIMAÇÃO ===
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

// === ESTILOS ===
const HeroSection = styled(Box)`
  background-image: url('/novonorte-site/images/bkgHome.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 60px);
  }
`;

const AnimatedContent = styled(Box)`
  animation: ${fadeInUp} 1s ease-out 0.5s both;
  text-align: center;
  max-width: 100%;
`;

const HeroTitle = styled(Typography)`
  color: white;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled(Typography)`
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  font-size: 1.2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// === BOTÕES DE SETAS ===
const ArrowContainer = styled(Box)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: center;
    margin-top: 1.5rem;
  }
`;

const ArrowButton = styled(IconButton)`
  background-color: #ff4814 !important;
  color: #fff !important;
  width: 2.8rem;
  height: 2.8rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff !important;
    color: #ff4814 !important;
    transform: scale(1.1);
  }

  svg {
    font-size: 1.8rem;
  }
`;

// === COMPONENTE ===
const Hero = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () =>
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  return (
    <HeroSection id="home">
      <HeroContainer maxWidth="lg">
        <ArrowContainer>
          <ArrowButton onClick={scrollToTop}>
            <KeyboardArrowUpIcon />
          </ArrowButton>
          <ArrowButton onClick={scrollToBottom}>
            <KeyboardArrowDownIcon />
          </ArrowButton>
        </ArrowContainer>

        <AnimatedContent>
          <HeroTitle variant="h2">
            Engenharia & Construção<br />de ponta a ponta
          </HeroTitle>
          <HeroSubtitle variant="body1">
            Transformamos seus projetos em realidade:<br />
            Seja residencial, predial ou industrial, nossa entrega<br />
            é sinônimo de excelência.
          </HeroSubtitle>
        </AnimatedContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
