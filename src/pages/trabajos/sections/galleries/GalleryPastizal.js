import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryPastizal = () => {
  return (
    <Section>
      <Paragraph>
        Las piezas de esta serie están realizadas bajo las técnicas mixtas de
        pintura en acuarela y tinta china.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="/images/works/IMG_7264.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Nombre</ImageP>
            <ImageP>Técnica</ImageP>
            <ImageP>Tamaño/acabado</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/IMG_6467.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Flores de frutal</ImageP>
            <ImageP>Sumi-e: tinta china sobre papel de arroz</ImageP>
            <ImageP>20x30cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="/images/works/colores-girasol.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Colores del girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/girasolcuadro.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection>
        <ImageContainer>
          <Image src="/images/works/floreado.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Floreado</ImageP>
            <ImageP>Tinta sobre papel de acuarela 300 grs.</ImageP>
            <ImageP>16,5 x 24,5 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image
              src="/images/works/ramillete.jpg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
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

export default GalleryPastizal;