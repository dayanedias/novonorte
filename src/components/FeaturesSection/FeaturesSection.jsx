import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

const Section = styled(Box)`
  background: #f2f2f2;
  width: 100%;
  overflow: hidden;
`;

const Row = styled(Grid)`
  border-bottom: 1px solid #dcdcdc;
  position: relative;
`;

const LeftCol = styled(Box)`
  background: #ffffff;
  padding: 3rem 4rem 3rem 8.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const RightCol = styled(Box)`
  background: #ff4814;
  color: #ffffff;
  padding: 3rem 4rem 3rem 4rem;
  position: relative;
  display: flex;
  align-items: center;
  min-height: 200px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 15%;
    bottom: 15%;
    width: 2px;
  }
`;

const PlusCircle = styled(Box)`
  position: absolute;
  left: calc(50%);
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

  svg {
    font-size: 1.8rem;
    font-weight: bold;
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
        <Row container key={index}>
          <Grid item xs={12} md={6}>
            <LeftCol>
              <Number>{feature.number}</Number>
              <Title variant='h5'>
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
        </Row>
      ))}
    </Section>
  );
};

export default FeaturesSectionComponent;
