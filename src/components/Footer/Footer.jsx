// src/components/Footer/Footer.jsx
import React from 'react';
import { Container, Box, Typography, IconButton } from '@mui/material';
import { Instagram, LinkedIn } from '@mui/icons-material';
import styled from 'styled-components';

const FooterSection = styled(Box)`
  background: #ff4814;
  color: white;
  padding: 40px 0 20px;
`;

const SocialIcon = styled(IconButton)`
  color: white;
  margin: 0 0.5rem;
  
  &:hover {
    color: #ff4814;
    background: rgba(255, 255, 255, 0.1);
  }
`;

const FooterText = styled(Typography)`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </Box>
        
        <FooterText variant="body2" paragraph>
          © 2021 Novonorte Engenharia & Construção. Todos os direitos reservados.
        </FooterText>
        <FooterText variant="body2">
          Av. Cassiano Ricardo, 601 - 12º andar, São José dos Campos-SP : comercial@novonorte.eng.br : WhatsApp : (12) 98711.3179
        </FooterText>
      </Container>
    </FooterSection>
  );
};

export default Footer;