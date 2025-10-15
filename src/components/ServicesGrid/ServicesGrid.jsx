// src/components/ServicesGrid/ServicesGrid.jsx
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const ServicesGridSection = styled(Box)`
  padding: 80px 0;
  background: white;
`;

const ServiceCard = styled(Box)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  margin-bottom: 2rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ServiceIcon = styled(Box)`
  padding: 1.5rem 1.5rem 0;
  display: flex;
  align-items: center;
`;

const ServiceTitle = styled(Box)`
  background: #f8f9fa;
  padding: 0.8rem 2.5rem 0.6rem;
`;

const ServiceDescription = styled(Box)`
  background: #ff4814;
  padding: 0 2.5rem 1.5rem 2.5rem;
  color: white;
`;

const ServicesGrid = () => {
  const services = [
    {
      icon: '/images/Design-sem-nome-11.png',
      title: 'Gerenciamento Completo de Obras',
      description: 'Gerenciamento turn-key completo. Cuidamos de tudo para sua obra ser entregue sem preocupações, no prazo e com eficiência.'
    },
    {
      icon: '/images/Design-sem-nome-11.png',
      title: 'Construções & Reformas Residenciais',
      description: 'Realize sua casa dos sonhos. Projetos personalizados e execução de construções e reformas residenciais focados em você.'
    },
    {
      icon: '/images/Design-sem-nome-11.png',
      title: 'Reformas & Manutenções Prediais',
      description: 'Modernizamos e valorizamos seu imóvel. Reformas e manutenções prediais otimizam seus espaços comerciais ou industriais, com garantia de longevidade.'
    },
    {
      icon: '/images/Design-sem-nome-11.png',
      title: 'Construções Comerciais & Industriais',
      description: 'Soluções robustas para seu negócio. Da fundação ao acabamento, suas construções comerciais e industriais com funcionalidade e segurança.'
    }
  ];

  return (
    <ServicesGridSection id="servicos">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ServiceCard>
                <ServiceIcon>
                  <img 
                    src={service.icon} 
                    alt="" 
                    style={{ width: '35px', height: 'auto' }}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAzNSAzNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNy41IiBjeT0iMTcuNSIgcj0iMTcuNSIgZmlsbD0iI2ZmNDgxNCIvPjwvc3ZnPg==';
                    }}
                  />
                </ServiceIcon>
                <ServiceTitle>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      color: '#2c3e50'
                    }}
                  >
                    {service.title}
                  </Typography>
                </ServiceTitle>
                <ServiceDescription>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      lineHeight: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    {service.description}
                  </Typography>
                </ServiceDescription>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesGridSection>
  );
};

export default ServicesGrid;