import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryEstampas = () => {
  return (
    <Section>
      <Paragraph>
        Las piezas de esta serie están realizadas bajo las técnicas mixtas de
        pintura en acuarela y tinta china.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <ImageBg>
            <Image 
            src="/images/works/pastizal/01.jpeg"
            height={"330px"}
            deskHeight={"280px"}
            width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Nombre</ImageP>
            <ImageP>Técnica</ImageP>
            <ImageP>Tamaño/acabado</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image 
            src="/images/works/pastizal/02.jpeg"
            ></Image>     
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Flores de frutal</ImageP>
            <ImageP>Sumi-e: tinta china sobre papel de arroz</ImageP>
            <ImageP>20x30cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <ImageBg>
            <Image 
              src="/images/works/pastizal/03.JPG"
              height={"400px"}
              deskHeight={"330px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Colores del girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image 
            src="/images/works/pastizal/04.JPG"
            height={"400px"}
            deskHeight={"330px"}
            width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image 
          src="/images/works/pastizal/05.JPEG"
          
          ></Image>
          <ImageTextContainer>
            <ImageP>Colores del girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/pastizal/06.JPG"></Image>
          <ImageTextContainer>
            <ImageP>Girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50x70 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryEstampas