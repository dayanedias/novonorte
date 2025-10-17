import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ====== ESTILOS ======
const Wrapper = styled(Box)`
  width: 100%;
  background: #f2f2f2;
  padding: 100px 0;
  overflow: hidden;

  /* ===== Botões do Swiper ===== */
  .swiper-button-next,
  .swiper-button-prev {
    background: white;
    color: #333 !important;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    top: 50%;
    transform: translateY(-50%);
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

  /* ===== Posição padrão (desktop) ===== */
  .swiper-button-prev {
    left: 9.7rem !important;
    margin-top: 0.7rem;
  }

  .swiper-button-next {
    right: 9.7rem !important;
    margin-top: 0.7rem;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: #ff4814;
    color: #fff !important;
  }

  /* ===== Ajustes responsivos ===== */
  @media (max-width: 1200px) {
    .swiper-button-prev {
      left: 2rem !important;
    }
    .swiper-button-next {
      right: 2rem !important;
    }
  }

  @media (max-width: 768px) {
    .swiper-button-prev {
      left: 1rem !important;
      width: 1.8rem;
      height: 1.8rem;
    }
    .swiper-button-next {
      right: 1rem !important;
      width: 1.8rem;
      height: 1.8rem;
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
`;

const SectionSubtitle = styled(Typography)`
  text-align: center;
  color: #666666;
  line-height: 1.4;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ButtonCenter = styled.button`
  display: block;
  background: #ff4814;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  padding: 12px 4rem;
  font-size: 1rem;
  margin: 2rem auto 3rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e63e10;
  }
`;

const ProjectCard = styled(Box)`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  border-radius: 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled(Box)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.92);
  color: #333;
  transform: translateY(100%);
  transition: all 0.4s ease;
  padding: 1.5rem 3rem 1rem 4rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  ${ProjectCard}:hover & {
    transform: translateY(0%);
  }
`;

const ProjectLabel = styled(Typography)`
  font-size: 0.9rem;
  font-weight: 700;
  color: #111;
  margin-top: 0.5rem;
`;

const ProjectText = styled(Typography)`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
`;

const InfoLeft = styled.div`
  width: 50%
`;

const InfoRight = styled.div`
  width: 50%;
  height: 100%;
  margin-left: -3rem;
`;

// ====== COMPONENTE ======
const ProjectsSection = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
      name: "Galpão Mercedes",
      area: "54.246",
      location: "São José dos Campos, SP",
      description:
        "Realização de projeto executivo e construção de um galpão logístico com características de cobertura e fechamentos laterais metálicos.",
    },
    {
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705",
      name: "Casa Terras do Vale",
      area: "420",
      location: "Jacareí, SP",
      description:
        "Execução completa de residência de alto padrão, com conceito moderno e integração entre ambientes internos e externos.",
    },
    {
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364",
      name: "Apartamento Urban",
      area: "210",
      location: "São Paulo, SP",
      description:
        "Reforma completa de apartamento contemporâneo com foco em conforto, iluminação natural e aproveitamento de espaços.",
    },
    {
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      name: "Centro Logístico",
      area: "75.000",
      location: "Campinas, SP",
      description:
        "Planejamento e execução de centro logístico com alta eficiência energética e estrutura metálica modular.",
    },
    {
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      name: "Edifício Horizon",
      area: "1.500",
      location: "Taubaté, SP",
      description:
        "Construção vertical com design clean e tecnologia sustentável aplicada a ambientes corporativos.",
    },
  ];

  useEffect(() => {
    // força o Swiper a renderizar corretamente as setas
    const buttons = document.querySelectorAll(".swiper-button-next, .swiper-button-prev");
    buttons.forEach((btn) => (btn.style.display = "flex"));
  }, []);

  return (
    <Wrapper id="obras">
      <SectionTitle variant="h3" fontWeight={500}>
        Nossos Projetos
      </SectionTitle>

      <SectionSubtitle variant="body2">
        Nosso processo é simples: reunião inicial, arquitetura, orçamento e, após aprovação,
        <br /> execução. Entregamos com a qualidade Novonorte®.
      </SectionSubtitle>

      <ButtonCenter>Confira +</ButtonCenter>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        spaceBetween={10}
        slidesPerView={2}
        speed={800}
        breakpoints={{
          0: { slidesPerView: 1 }, // mobile
          768: { slidesPerView: 2 }, // tablet
          1200: { slidesPerView: 2 }, // desktop
        }}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <ProjectCard>
              <img src={p.img} alt={p.name} />
              <ProjectInfo>
                <InfoLeft>
                  <ProjectLabel variant="h6">Construção</ProjectLabel>
                  <ProjectText>{p.name}</ProjectText>

                  <ProjectLabel  variant="h6">Área | m²</ProjectLabel>
                  <ProjectText>{p.area}</ProjectText>

                  <ProjectLabel  variant="h6">Localização</ProjectLabel>
                  <ProjectText>{p.location}</ProjectText>
                </InfoLeft>

                <InfoRight>
                  <ProjectLabel  variant="h6">Descrição:</ProjectLabel>
                  <ProjectText style={{ width: '80%'}}>{p.description}</ProjectText>
                </InfoRight>

              </ProjectInfo>
            </ProjectCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ProjectsSection;
