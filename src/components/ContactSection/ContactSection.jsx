// src/components/ContactSection/ContactSection.jsx
import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button } from '@mui/material';
import styled from 'styled-components';

const ContactSection = styled(Box)`
  padding: 80px 0;
  background: #f8f9fa;
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
  line-height: 1.3;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ContactForm = styled(Box)`
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled(Button)`
  background: #ff4814;
  color: white;
  padding: 12px 40px;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background: #e53e12;
  }
`;

const ContactSectionComponent = () => {
  return (
    <ContactSection id="contato">
      <Container maxWidth="md">
        <SectionTitle variant="h3">
          Fale com a gente
        </SectionTitle>
        <SectionSubtitle>
          Pronto pra começar?<br />
          Clique no ícone do WhatsApp e tire todas as suas dúvidas com nosso time agora!
        </SectionSubtitle>

        <ContactForm>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Empresa"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nome Completo"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cargo"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Telefone"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="exemplo@mail.com"
                variant="outlined"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mensagem"
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <SubmitButton variant="contained" size="large">
                Enviar
              </SubmitButton>
            </Grid>
          </Grid>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};

export default ContactSectionComponent;