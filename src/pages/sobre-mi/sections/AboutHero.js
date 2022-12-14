import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 35vh;
  padding: 70px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grey);
  gap: 100px;
  @media (max-width: 992px) {
    flex-direction: column;
    margin-top: 25vh;
  }
  @media (max-width: 576px) {
    gap: 70px;
    margin-top: 20vh;
  }
`;

const HeroImg = styled.img`
  height: 500px;
  @media (max-width: 576px) {
    height: auto;
    width: 90%;
  }
`;

const HeroInfo = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 70px 0px;
  @media (max-width: 992px) {
    padding: 0;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    gap: 50px;
    width: min(90%, 500px);
  }
`;

const HeroInfoTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  flex-direction: column;
  padding-right: 30px;
  width: fit-content;
  @media (max-width: 992px) {
    padding-right: 0px;
  }
`;

const HeroInfoH1 = styled.h1`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  font-family: "Manrope-regular";
  font-size: 2rem;
  width: 100%;
`;
const HeroInfoH1Span = styled.span``;

const HeroInfoP = styled.p`
  display: flex;
  border-top: 1px solid black;
  padding-top: 15px;
  font-size: 0.9rem;
  font-family: "RobotoMono-bold";
`;

const HeroInfoDescription = styled.p`
  width: 40vw;
  letter-spacing: 1px;
  font-size: 0.9rem;
  font-family: "RobotoMono-bold";
  align-self: center;
  text-align: left;
  line-height: 1.8rem;
  @media (max-width: 992px) {
    width: 90%;
  }
`;

const AboutHero = () => {
  return (
    <>
      <Section>
        <HeroImg
          src={"/images/sobre-mi/foto-laura.jpg"}
          alt="Foto de Laura Bea"
        />
        <HeroInfo>
          <HeroInfoTitle>
            <HeroInfoH1>
              Soy Laura B. <HeroInfoH1Span>Gutierrez</HeroInfoH1Span>
            </HeroInfoH1>
            <HeroInfoP>Artista visual y dise??adora</HeroInfoP>
          </HeroInfoTitle>
          <HeroInfoDescription>
            Bienvenidos a mi espacio digital art??stico en donde encontrar??n un
            breve recorrido por mi exploraci??n entre el dise??o y las artes
            visuales. Combinando t??cnicas anal??gicas como la pintura con tinta
            y acuarela y t??cnicas digitales.
          </HeroInfoDescription>
        </HeroInfo>
      </Section>
    </>
  );
};

export default AboutHero;
