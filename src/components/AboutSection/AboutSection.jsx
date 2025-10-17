// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';

const AboutSection = styled(Box)`
  width: 100%;
  padding: 100px 0;
  background: none;

  @media (max-width: 900px) {
    padding: 60px 0;
  }
`;

const InnerContainer = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`;

const AboutImage = styled(Box)`
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledButton = styled.div`
  background: #ff4814;
  color: white;
  border-radius: 25px;
  padding: 12px 3rem;
  font-weight: 500;
  max-width: 200px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  transition: 0.3s;
  &:hover {
    background: #e53e12;
  }

  @media (max-width: 600px) {
    padding: 10px 2rem;
    font-size: 0.9rem;
  }
`;

const AboutSectionComponent = () => {
  return (
    <AboutSection id="sobre">
      <InnerContainer>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Grid item xs={12} md={6}>
            <AboutImage>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  height: { xs: 280, sm: 350, md: 400 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.2rem',
                  position: 'relative',
                }}
              >
                <img
                  src="/novonorte-site/images/sobre.webp"
                  alt="Sobre a Novonorte"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <Box sx={{ display: 'none', position: 'absolute' }}>Imagem Sobre</Box>
              </Box>
            </AboutImage>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ pl: { md: 6, xs: 0 } }}>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: '#2c3e50',
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2rem' },
                }}
              >
                Sobre a Novonorte
              </Typography>

              <Typography
                variant="body1"
                paragraph
                sx={{
                  color: '#2c3e50',
                  fontWeight: 500,
                  fontSize: { xs: '15px', md: '16px' },
                  lineHeight: 1.6,
                }}
              >
                <strong>
                  A LGCON em parceria estratégica com a Eletrorede® Engenharia agora é a Novonorte®,
                  um novo nome e com uma nova identidade.
                </strong>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#2c3e50',
                  fontSize: { xs: '15px', md: '16px' },
                  lineHeight: 1.6,
                  mb: 4,
                }}
              >
                Essa união consolida mais de 10 anos de expertise técnica e reputação sólida e eleva
                a nossa capacidade de entrega em gerenciamento de obras, construções e reformas,
                garantindo projetos executados com excelência, eficiência de custos e rigoroso
                cumprimento de prazos.
              </Typography>

              <StyledButton>Confira +</StyledButton>
            </Box>
          </Grid>
        </Grid>
      </InnerContainer>
    </AboutSection>
  );
};

export default AboutSectionComponent;
