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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// === BOTÕES DE SETAS ===
const ArrowContainer = styled(Box)`
  position: absolute;
  left: 9%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    left: 10px;
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
      {/* Botões de navegação (setas) */}
      <ArrowContainer>
        <ArrowButton onClick={() => {}}>
          <KeyboardArrowUpIcon />
        </ArrowButton>
        <ArrowButton onClick={() => {}}>
          <KeyboardArrowDownIcon />
        </ArrowButton>
      </ArrowContainer>

      <Container maxWidth="lg">
        <AnimatedContent>
          <HeroTitle variant="h2" gutterBottom>
            Engenharia & Construção<br />de ponta a ponta
          </HeroTitle>
          <HeroSubtitle variant="body1" paragraph>
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
