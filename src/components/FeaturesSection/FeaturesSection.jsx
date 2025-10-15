// src/components/FeaturesSection/FeaturesSection.jsx
import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import styled from 'styled-components';

const FeaturesSection = styled(Box)`
  background: #f8f9fa;
  padding: 0;
`;

const FeatureColumn = styled(Box)`
  background: #f8f9fa;
  padding: 2.5rem 0;
  border-bottom: 1px solid #333333;
`;

const FeatureNumber = styled(Typography)`
  color: #ff4814;
  font-weight: 700;
  font-size: 1rem;
  padding-left: 10rem;
`;

const FeatureTitle = styled(Typography)`
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 1.3;
  padding-left: 10rem;
`;

const FeatureDescription = styled(Typography)`
  color: white;
  font-size: 0.875rem;
  line-height: 1.5;
  background: #ff4814;
  padding: 1rem 10rem 1rem 3.5rem;
`;

const FeaturesSectionComponent = () => {
  const features = [
    {
      number: '01/',
      title: 'Projetos executados\ncom precisão',
      description: 'Nossos arquitetos experientes criam a planta dos seus sonhos, com um projeto único e exclusivo. Eles trabalham em total sintonia com nossos engenheiros para garantir que cada detalhe seja executado com precisão e excelência.'
    },
    {
      number: '02/',
      title: 'Gestão de construção\nintegrada',
      description: 'Com a presença constante de nossos engenheiros em todas as etapas da obra, garantimos que a qualidade esteja presente em cada detalhe da sua construção. É um acompanhamento de verdade, feito para sua tranquilidade.'
    },
    {
      number: '03/',
      title: 'Compromisso com\nqualidade e resultados',
      description: 'Deixamos nossa marca de excelência em todos os setores da construção civil. Atendemos aos mais diversos públicos e níveis de exigência, sempre entregando resultados que superam expectativas.'
    }
  ];

  return (
    <FeaturesSection>
      <Container maxWidth="xl" disableGutters>
        {features.map((feature, index) => (
          <Grid container key={index}>
            <Grid item xs={12} md={6}>
              <FeatureColumn>
                <FeatureNumber>
                  <strong>{feature.number}</strong>
                </FeatureNumber>
                <FeatureTitle>
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < feature.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </FeatureTitle>
              </FeatureColumn>
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureDescription>
                {feature.description}
              </FeatureDescription>
            </Grid>
          </Grid>
        ))}
      </Container>
    </FeaturesSection>
  );
};

export default FeaturesSectionComponent;