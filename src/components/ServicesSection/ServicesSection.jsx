// src/components/ServicesSection/ServicesSection.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import styled from 'styled-components';

const Section = styled(Box)`
  padding: 100px 0;
  background: white;
`;

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #e74c3c;
  }
`;

const ServiceCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border-color: #e74c3c;
  }
`;

const ServiceIcon = styled(Box)`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.8rem;
`;

const ServiceTitle = styled(Typography)`
  color: #2c3e50;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled(Typography)`
  color: #5a6c7d;
  line-height: 1.7;
`;

const ServicesSection = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Gerenciamento de Obras',
      description: 'Gestão completa de obras com acompanhamento de todas as etapas, desde o planejamento até a entrega final.'
    },
    {
      icon: '🏠',
      title: 'Construções Residenciais',
      description: 'Construção de residências com qualidade superior, atendendo às necessidades e expectativas de cada cliente.'
    },
    {
      icon: '🏢',
      title: 'Construções Comerciais',
      description: 'Desenvolvimento de projetos comerciais e industriais com foco em funcionalidade e eficiência.'
    },
    {
      icon: '🔧',
      title: 'Reformas e Manutenções',
      description: 'Serviços de reformas e manutenções prediais com qualidade e agilidade.'
    },
    {
      icon: '📐',
      title: 'Projetos Arquitetônicos',
      description: 'Desenvolvimento de projetos arquitetônicos personalizados e inovadores.'
    },
    {
      icon: '⚡',
      title: 'Instalações Especiais',
      description: 'Instalações elétricas, hidráulicas e sistemas especiais com a mais alta qualidade.'
    }
  ];

  return (
    <Section id="servicos">
      <Container maxWidth="lg">
        <SectionTitle variant="h3">
          Nossos Serviços
        </SectionTitle>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ServiceCard>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <ServiceIcon>
                    {service.icon}
                  </ServiceIcon>
                  <ServiceTitle variant="h5">
                    {service.title}
                  </ServiceTitle>
                  <ServiceDescription variant="body1">
                    {service.description}
                  </ServiceDescription>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default ServicesSection;