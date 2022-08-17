import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0px;
  gap: 120px;
  width: 100%;
`;

const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
  font-size: 1.1rem;
  text-align: center;
  font-family: "RobotoMono-regular";
  width: 65%;
  @media (max-width: 1280px) {
    width: 64%;
  }
`;

const ImageSection = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -50px;
  padding-bottom: 70px;
  border-bottom: ${(props) => props.border};
  @media (max-width: 1280px) {
    margin-top: -10px;
  }
`;

const ImageContainer = styled.div`
  min-width: 327.5px;
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1280px) {
    min-width: 277px;
  }
`;

const Image = styled.img`
  height: ${(props) => (props.height ? props.height : "450px")};
  @media (max-width: 1280px) {
    height: ${(props) => (props.deskHeight ? props.deskHeight : "300px")};
  }
`;

const ImageTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageP = styled.div`
  width: 90%;
  line-height: 2rem;
  font-size: 1.1rem;
  text-align: center;
  font-family: "RobotoMono-regular";
`;

const ImageBg = styled.div`
  height: 450px;
  width: fit-content;
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    height: 300px;
  }
`;

const Gallery = () => {
  return (
    <Section>
      <Paragraph>
        Las piezas de esta serie están realizadas bajo las técnicas mixtas de
        pintura en acuarela y tinta china.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="images/works/IMG_7264.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Nombre</ImageP>
            <ImageP>Técnica</ImageP>
            <ImageP>Tamaño/acabado</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="images/works/IMG_6467.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Flores de frutal</ImageP>
            <ImageP>Sumi-e: tinta china sobre papel de arroz</ImageP>
            <ImageP>20x30cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="images/works/colores-girasol.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Colores del girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="images/works/girasolcuadro.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection>
        <ImageContainer>
          <Image src="images/works/floreado.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Floreado</ImageP>
            <ImageP>Tinta sobre papel de acuarela 300 grs.</ImageP>
            <ImageP>16,5 x 24,5 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image
              src="images/works/ramillete.jpg"
              height={"330px"}
              deskHeight={"280px"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Ramillete</ImageP>
            <ImageP>Sumi-e: acuarela sobre papel de arroz</ImageP>
            <ImageP>27,5 x 33 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default Gallery;
