// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const AboutSection = styled(Box)`
  padding: 100px 0;
`;

const AboutImage = styled(Box)`
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const AboutButton = styled(Button)`
  background: #ff4814;
  color: white;
  padding: 12px 30px;
  font-weight: 500;
  margin-left: 3rem;
  
  &:hover {
    background: #e53e12;
  }
`;

const AboutSectionComponent = () => {
  return (
    <AboutSection id="sobre">
      <Container maxWidth="lg">
        <Grid spacing={0.5} container alignItems="center">
          <Grid item xs={12} md={6}>
            <AboutImage>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem'
                }}
              >
                <img 
                  src="/images/sobre.webp"
                  alt="Sobre a Novonorte"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <Box sx={{ display: 'none', position: 'absolute' }}>
                  Imagem Sobre
                </Box>
              </Box>
            </AboutImage>
          </Grid>
          <Grid style={{ paddingLeft: "3rem"}} item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 600, 
                color: '#2c3e50', 
                mb: 3,
                fontSize: '2rem'
              }}
            >
              Sobre a Novonorte {/* //Montserrat */}
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                color: '#2c3e50',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: 1.6
              }}
            >
              <strong>A LGCON em parceria estratégica com a Eletrorede® Engenharia agora é a Novonorte®, um novo nome e com uma nova identidade.</strong>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#2c3e50',
                fontSize: '16px',
                lineHeight: 1.6,
                mb: 4
              }}
            >
              Essa união consolida mais de 10 anos de expertise técnica e reputação sólida e eleva a nossa 
              capacidade de entrega em gerenciamento de obras, construções e reformas, garantindo projetos 
              executados com excelência, eficiência de custos e rigoroso cumprimento de prazos.
            </Typography>
            <AboutButton variant="contained">
              Confira +
            </AboutButton>
          </Grid>
        </Grid>
      </Container>
    </AboutSection>
  );
};

export default AboutSectionComponent;