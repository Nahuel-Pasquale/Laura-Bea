import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryUniversoJapon = () => {
  return (
    <Section>
      <Paragraph>
      Las piezas de esta serie son digitales y están realizadas bajo las técnicas 
      mixtas de acuarela, sumi-é y diseño digital. Todas listas para ser impresas 
      en distintas superficies: papel, papel mural, textiles, PVC, alto impacto, 
      alfombra vinílica, MDF.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/universo-japon/01.jpeg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
            </ImageBg>
          <ImageTextContainer>
            <ImageP>Digital en Japón</ImageP>
            <ImageP>Imagen difital con rapport</ImageP>
            <ImageP>32 x 32 escalable</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/universo-japon/02.PNG"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Flores de Japón</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>140 x 140 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/universo-japon/03.JPG"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Flor imperial</ImageP>
            <ImageP>Imagen digital con rapport</ImageP>
            <ImageP>32 x 32 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer align>
        <ImageBg >
            <Image
              src="/images/works/universo-japon/04.jpeg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Medallón de crisantemos</ImageP>
            <ImageP>Imagen digital</ImageP>
            <ImageP>29 x 42 escalable</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection>
        <ImageContainer>        
            <Image src="/images/works/universo-japon/07.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Cauce</ImageP>
            <ImageP>Estampa digital escalable</ImageP>
            <ImageP>32 x 32</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
            <Image src="/images/works/universo-japon/08.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Sello</ImageP>
            <ImageP>Estampa digital escalable</ImageP>
            <ImageP>32 x 32</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryUniversoJapon;