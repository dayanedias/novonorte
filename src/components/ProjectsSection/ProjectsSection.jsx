// src/components/ProjectsSection/ProjectsSection.jsx
import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const ProjectsSection = styled(Box)`
  padding: 100px 0;
  background: white;
`;

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #2c3e50;
  font-size: 2.5rem;
`;

const SectionSubtitle = styled(Typography)`
  text-align: center;
  color: #666666;
  line-height: 1.4;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ProjectsButton = styled(Button)`
  background: transparent;
  color: #ff4814;
  border: 2px solid #ff4814;
  padding: 12px 40px;
  font-weight: 500;
  margin: 2rem auto;
  display: block;
  
  &:hover {
    background: #ff4814;
    color: white;
  }
`;

const SliderContainer = styled(Box)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const ProjectsSectionComponent = () => {
  return (
    <ProjectsSection id="obras">
      <Container maxWidth="lg">
        <SectionTitle variant="h3">
          Nossos Projetos
        </SectionTitle>
        <SectionSubtitle>
          Nosso processo é simples: reunião inicial, arquitetura, orçamento e, após aprovação,<br />
          execução. Entregamos com a qualidade Novonorte®.
        </SectionSubtitle>
        
        <ProjectsButton variant="outlined">
          Confira +
        </ProjectsButton>

        <SliderContainer>
          <Typography 
            textAlign="center" 
            color="#666" 
            sx={{ fontStyle: 'italic' }}
          >
            {/* Slider will be implemented here */}
            Área para slider de projetos
          </Typography>
        </SliderContainer>
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsSectionComponent;