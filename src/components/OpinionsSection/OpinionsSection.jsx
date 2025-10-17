import React from "react";
import { Box, Container, Typography, Rating } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Definindo a cor de destaque com base na imagem (vermelho/laranja das estrelas)
const HIGHLIGHT_COLOR = "#ff4814";
const BACKGROUND_COLOR = "#f0f0f0";

// ====== ESTILOS MODIFICADOS ======
const Wrapper = styled(Box)`
  width: 100%;
  padding: 4rem 0;
  background-color: white !important;
  overflow: hidden;

  /* Botões personalizados do Swiper */
  .swiper-button-next,
  .swiper-button-prev {
    background: white;
    color: #333 !important;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-navigation-icon {
    width: 50%;
    height: 50%;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 16px !important;
    font-weight: bold;
  }

  .swiper-button-prev {
    left: 0.2rem !important;
  }

  .swiper-button-next {
    right: 0.2rem !important;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: #ff4814;
    color: #fff !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

const SectionTitle = styled(Typography)`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #2c3e50;
  font-size: 2.5rem;
  padding-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(Typography)`
  text-align: center;
  color: #666666;
  line-height: 1.4;
  margin-bottom: 3rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const OpinionCard = styled(Box)`
  background: ${BACKGROUND_COLOR};
  padding: 2rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 380px;
  height: auto;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem 2.5rem;
    min-height: 350px;
    margin: 0 10px;
  }
`;

const SpeechBubble = styled(Box)`
  background: white;
  border-radius: 2.5rem;
  border: 1px solid #ddd;
  padding: 2.5rem 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  margin-bottom: 2rem;
  width: 85%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.2rem;
    border-radius: 1.8rem;
  }
`;

const OpinionTail = styled(Box)`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  @media (max-width: 768px) {
    border-left-width: 12px;
    border-right-width: 12px;
    border-top-width: 12px;
    bottom: -12px;
  }
`;

const RatingContainer = styled(Box)`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const OpinionText = styled(Typography)`
  color: #333;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
  font-style: normal;
  position: relative;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    -webkit-line-clamp: 5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    -webkit-line-clamp: 6;
  }
`;

const ClientInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 0.5rem;
`;

const ClientName = styled(Typography)`
  font-weight: 700;
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 0.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ClientLocation = styled(Typography)`
  color: #666;
  font-size: 0.95rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// ====== COMPONENTE ======
const OpinionsSectionComponent = () => {
  const opinions = [
    {
      name: "João Silva",
      rating: 5,
      location: "Equilibrium Advogados, São Paulo-SP",
      opinion: "Estou muito feliz com o trabalho. Eles construíram minha casa com rapidez e qualidade. Recomendo!",
    },
    {
      name: "Maria Santos",
      rating: 5,
      location: "Solus, São José dos Campos-SP",
      opinion: "Contratei para uma consultoria em um projeto que eu tinha para minha área gourmet. Deram ótimas dicas e acompanharam o serviço para que tudo ficasse perfeito.",
    },
    {
      name: "Carlos Oliveira",
      rating: 5,
      location: "Residencial Alphaville, Campinas-SP",
      opinion: "Profissionalismo e competência definem o trabalho desta empresa. Fizeram a reforma completa do meu apartamento dentro do prazo e orçamento.",
    },
    {
      name: "Ana Costa",
      rating: 5,
      location: "Condomínio Green Valley, São José dos Campos-SP",
      opinion: "Trabalho impecável! Desde o projeto até a execução, tudo foi feito com muita seriedade. A equipe é muito prestativa e resolveu todas as minhas dúvidas.",
    },
  ];

  return (
    <Wrapper id="opinioes">
      <Container style={{ maxWidth: 1260 }}>
        <SectionTitle variant="h3" fontWeight={500}>
          Opiniões
        </SectionTitle>
        <SectionSubtitle variant="body2">
          A voz de nossos clientes é fundamental para aprimorarmos constantemente.
          <br />
          Confira algumas das opiniões sobre nosso trabalho.
        </SectionSubtitle>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={opinions.length > 1}
          loop={opinions.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView={1}
          speed={800}
          style={{ width: "100%", marginTop: "2rem", padding: "0 20px" }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
              padding: "0 50px",
            },
          }}
        >
          {opinions.map((opinion, index) => (
            <SwiperSlide key={index}>
              <OpinionCard>
                <SpeechBubble>
                  <RatingContainer>
                    <Rating
                      value={opinion.rating}
                      readOnly
                      size="large"
                      sx={{
                        color: HIGHLIGHT_COLOR,
                        fontSize: {
                          xs: "1.5rem",
                          md: "1.8rem",
                        },
                        "& .MuiRating-iconFilled": {
                          color: HIGHLIGHT_COLOR,
                        },
                      }}
                    />
                  </RatingContainer>

                  <OpinionText variant="body1">
                    {opinion.opinion}
                  </OpinionText>

                  <OpinionTail />
                </SpeechBubble>

                <ClientInfo>
                  <ClientName variant="h6">
                    {opinion.name},
                  </ClientName>
                  <ClientLocation variant="body2">
                    {opinion.location}
                  </ClientLocation>
                </ClientInfo>
              </OpinionCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default OpinionsSectionComponent;