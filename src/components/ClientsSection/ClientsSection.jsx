import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// ====== ESTILOS ======
const Wrapper = styled(Box)`
  width: 100%;
  background: #fff;
  padding: 80px 0;
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
    left: 1.5rem !important;
    margin-top: 0.1rem;
  }

  .swiper-button-next {
    right: 1.5rem !important;
    margin-top: 0.7rem;
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
`;

const SectionSubtitle = styled(Typography)`
  text-align: center;
  color: #666666;
  line-height: 1.4;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ClientCard = styled(Box)`
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  transition: all 0.3s ease;
  filter: grayscale(100%);
  opacity: 0.7;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    background: #eaeaea;
  }

  img {
    max-height: 80px;
    width: auto;
  }
`;

// ====== COMPONENTE ======
const ClientsSectionComponent = () => {
  const clients = [
    { name: "Zure", logo: "/novonorte-site/images/Logo-1.png" },
    { name: "Lote5", logo: "/novonorte-site/images/Logo-2.png" },
    { name: "Ribeiro Aquino", logo: "/novonorte-site/images/Logo-3.png" },
    { name: "Tensor", logo: "/novonorte-site/images/Logo-4.png" },
  ];

  useEffect(() => {
    // Força o Swiper a mostrar as setas após renderização
    const buttons = document.querySelectorAll(".swiper-button-next, .swiper-button-prev");
    buttons.forEach((btn) => (btn.style.display = "flex"));
  }, []);

  return (
    <Wrapper id="clientes">
      <Container maxWidth="lg">
        <SectionTitle variant="h3" fontWeight={500}>Nossos Clientes</SectionTitle>
        <SectionSubtitle variant="body2">
          Trabalhamos com dedicação e transparência em cada projeto, construindo parcerias duradouras. <br />
          A confiança que recebemos nos impulsiona a crescer.
        </SectionSubtitle>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          spaceBetween={10}
          slidesPerView={2}
          speed={800}
          style={{ width: "100%", padding: "0 50px", marginTop: "4rem" }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <ClientCard>
                <img
                  src={client.logo}
                  alt={client.name}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </ClientCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default ClientsSectionComponent;
