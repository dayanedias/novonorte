import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const ServicesGridSection = styled(Box)`
  position: relative;
  z-index: 3;
  background: transparent !important;
  margin-top: -2rem;
  padding-bottom: 0;
`;


const ServiceCard = styled(Box)`
  background: #ff4814;
  color: white;
  text-align: left;
  transition: all 0.3s ease;
  height: 100%;
  border-radius: 0;
  width: 100%;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  &:hover {
    background: #e63e10;
  }
`;

const ServiceIcon = styled(Box)`
  width: 100%;
  max-width: 100%;
  height: 1.5rem;
  background: #ff7446;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled(Typography)`
  font-weight: 700;
  font-size: 1rem;
  width: 100%;
`;

const ServiceDescription = styled(Typography)`
  font-size: 0.9rem;
  line-height: 1.4;
  width: 100%;
`;

const ServicesGrid = () => {
  const services = [
    {
      title: 'Gerenciamento de Obras',
      description:
        'Gerenciamento turn-key completo. Cuidamos de tudo para sua obra ser entregue sem preocupações, no prazo e com eficiência.',
    },
    {
      title: 'Construções & Reformas Residenciais',
      description:
        'Realize sua casa dos sonhos. Projetos personalizados e execução de construções e reformas residenciais focados em você.',
    },
    {
      title: 'Reformas & Manutenções Prediais',
      description:
        'Modernizamos e valorizamos seu imóvel. Reformas e manutenções prediais otimizam seus espaços comerciais ou industriais, com garantia de longevidade.',
    },
    {
      title: 'Construções Comerciais & Industriais',
      description:
        'Soluções robustas para seu negócio. Da fundação ao acabamento, suas construções comerciais e industriais com funcionalidade e segurança.',
    },
  ];

  return (
    <ServicesGridSection id="servicos">
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard>
                <ServiceIcon />
                <div style={{ padding: '0.25rem 1.5rem 1.5rem 1.5rem' }}>
                  <ServiceTitle variant="h6">{service.title}</ServiceTitle>
                  <div style={{ height: 10 }} />
                  <ServiceDescription variant="body2">
                    {service.description}
                  </ServiceDescription>
                </div>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesGridSection>
  );
};

export default ServicesGrid;