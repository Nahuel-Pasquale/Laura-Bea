import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryGZen = () => {
  return (
    <Section>
      <Paragraph>
      Las piezas de esta serie son digitales y están realizadas con las técnicas mixtas de acuarela, 
      sumi-e y diseño digital. Todas listas para ser impresas en distintas superficies: papel, papel mural, 
      textiles, PVC, alto impacto, alfombra vinílica, MDF.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg>
            <Image
              src="/images/works/geometria-zen/01.jpeg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Abrir</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>42 x 29 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image src="/images/works/geometria-zen/02.jpg"
              height={"420px"}
              deskHeight={"330px"}
              width={"100%"}></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Luna de colores</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>29 x 42 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="/images/works/geometria-zen/03.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Sin fin</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>29 x 42 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/geometria-zen/04.png"></Image>
          <ImageTextContainer>
            <ImageP>Eco</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>29 x 42 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection>
        <ImageContainer>
          <Image src="/images/works/geometria-zen/05.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Estampado cuadraditos</ImageP>
            <ImageP>Imagen digital con rapport</ImageP>
            <ImageP>21 x 29 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/geometria-zen/06.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Estampado cuadrados y puntos</ImageP>
            <ImageP>Imagen digital con rapport</ImageP>
            <ImageP>21 x 29 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryGZen