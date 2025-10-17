// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const ContactSection = styled(Box)`
  background-image: url('/novonorte-site/images/map.webp');
  padding: 60px 1rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled(Box)`
  width: 100%;
  max-width: 1200px;
`;

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #2c3e50;
  font-size: 2.5rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const SectionSubtitle = styled(Typography)`
  text-align: center;
  color: #666666;
  line-height: 1.4;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  padding-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactForm = styled(Box)`
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 1.8rem 1.2rem;
  }

  .MuiTextField-root {
    margin-bottom: 1rem;

    .MuiInputBase-root {
      height: 44px; /* altura menor */
    }

    .MuiInputBase-input {
      padding: 10px 12px;
      font-size: 0.95rem;
    }

    label {
      font-size: 0.9rem;
    }
  }

  textarea {
    min-height: 120px !important;
  }
`;

const SubmitButton = styled(Button)`
  background: #ff4814;
  color: white;
  padding: 10px 30px;
  font-weight: 500;
  width: 100%;
  font-size: 1rem;
  border-radius: 6px;
  margin-top: 0.5rem;

  &:hover {
    background: #e53e12;
  }
`;

const ContactSectionComponent = () => {
  return (
    <ContactSection id="contato">
      <Wrapper>
        <ContactForm>
          <SectionTitle variant="h3" fontWeight={500}>Fale com a gente</SectionTitle>
          <SectionSubtitle variant='body2'>
            Pronto pra começar?<br />
            Clique no ícone do WhatsApp e tire todas as suas dúvidas com nosso time agora!
          </SectionSubtitle>

          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Empresa" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Nome Completo" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Cargo" variant="outlined" required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Telefone" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="exemplo@mail.com" variant="outlined" type="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Mensagem" variant="outlined" multiline rows={4} required />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton variant="contained" size="large">
                Enviar
              </SubmitButton>
            </Grid>
          </Grid>
        </ContactForm>
      </Wrapper>
    </ContactSection>
  );
};

export default ContactSectionComponent;
