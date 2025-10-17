import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Section = styled(Box)`
  width: 100%;
  overflow: hidden;
`;

const Row = styled(Box)`
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #dcdcdc;
  width: 100%;
  background: linear-gradient(to right, #ffffff 50%, #ff4814 50%);
  transition: background 0.3s ease;

  @media (max-width: 900px) {
    background: linear-gradient(to bottom, #ffffff 50%, #ff4814 50%);
    flex-direction: column;
  }
`;

const ContentWrapper = styled(Grid)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftCol = styled(Box)`
  background: transparent;
  flex: 1;
  padding: 3rem 4rem 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 3rem 2rem;
    text-align: center;
  }
`;

const RightCol = styled(Box)`
  background: transparent;
  color: #ffffff;
  flex: 1;
  padding: 3rem 4rem 3rem 4rem;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 200px;

  @media (max-width: 900px) {
    padding: 3rem 2rem;
    justify-content: center;
    text-align: center;
  }
`;

const PlusCircle = styled(Box)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border: 2px solid black;
  color: black;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;

  svg {
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    top: calc(50%);
    transform: translate(-50%, -50%);
  }
`;

const Number = styled(Typography)`
  color: #ff4814;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Title = styled(Typography)`
  color: #000;
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 1.3;
`;

const Description = styled(Typography)`
  font-size: 1rem;
  line-height: 1.6;
`;

const FeaturesSectionComponent = () => {
  const features = [
    {
      number: '01/',
      title: 'Projetos executados\ncom precisão',
      description:
        'Nossos arquitetos experientes criam a planta dos seus sonhos, com um projeto único e exclusivo. Eles trabalham em total sintonia com nossos engenheiros para garantir que cada detalhe seja executado com precisão e excelência.',
    },
    {
      number: '02/',
      title: 'Gestão de construção\nintegrada',
      description:
        'Com a presença constante de nossos engenheiros em todas as etapas da obra, garantimos que a qualidade esteja presente em cada detalhe da sua construção. É um acompanhamento de verdade, feito para sua tranquilidade.',
    },
    {
      number: '03/',
      title: 'Compromisso com\nqualidade e resultados',
      description:
        'Deixamos nossa marca de excelência em todos os setores da construção civil. Atendemos aos mais diversos públicos e níveis de exigência, sempre entregando resultados que superam expectativas.',
    },
  ];

  return (
    <Section>
      {features.map((feature, index) => (
        <Row key={index}>
          <ContentWrapper container>
            <Grid item xs={12} md={6}>
              <LeftCol>
                <Number>{feature.number}</Number>
                <Title variant="h5">
                  {feature.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < feature.title.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </Title>
              </LeftCol>
            </Grid>

            <Grid item xs={12} md={6}>
              <RightCol>
                <Description>{feature.description}</Description>
              </RightCol>
            </Grid>

            <PlusCircle>
              <AddIcon />
            </PlusCircle>
          </ContentWrapper>
        </Row>
      ))}
    </Section>
  );
};

export default FeaturesSectionComponent;
