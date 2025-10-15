// src/components/ClientsSection/ClientsSection.jsx
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const ClientsSection = styled(Box)`
  padding: 80px 0;
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
  color: #2c3e50;
  line-height: 1.5;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ClientsLogos = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 2rem;
`;

const ClientLogo = styled.img`
  height: 60px;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const ClientsSectionComponent = () => {
  const clients = [
    { name: 'Zure', logo: '/images/Logo-1.png' },
    { name: 'Lote5', logo: '/images/Logo-2.png' },
    { name: 'Ribeiro Aquino', logo: '/images/Logo-3.png' },
    { name: 'Tensor', logo: '/images/Logo-4.png' },
  ];

  return (
    <ClientsSection>
      <Container maxWidth="lg">
        <SectionTitle variant="h3">
          Nossos Clientes
        </SectionTitle>
        <SectionSubtitle>
          Trabalhamos com dedicação e transparência em cada projeto, construindo parcerias duradouras.<br />
          A confiança que recebemos nos impulsiona a crescer.
        </SectionSubtitle>
        
        <ClientsLogos>
          {clients.map((client, index) => (
            <ClientLogo
              key={index}
              src={client.logo}
              alt={client.name}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ))}
        </ClientsLogos>
      </Container>
    </ClientsSection>
  );
};

export default ClientsSectionComponent;