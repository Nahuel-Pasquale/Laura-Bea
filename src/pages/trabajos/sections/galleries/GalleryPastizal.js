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
          <ImageBg>
            <Image 
            src="/images/works/pastizal/01.jpeg"
            height={"350px"}
            deskHeight={"280px"}
            width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Espiga 2020</ImageP>
            <ImageP>Acuarela 21x29 cm.</ImageP>
            <ImageP>Enmarcada con varilla de kiri natural y paspartú </ImageP>
            <ImageP>37x44 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <ImageBg>
            <Image 
            src="/images/works/pastizal/02.jpeg"
            ></Image>     
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Almohadón Espigas</ImageP>
            <ImageP>Sublimación sobre pana .</ImageP>
            <ImageP>50x50 cm</ImageP>
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
            <ImageP>Espigado 2020</ImageP>
            <ImageP>Tinta negra 21x29 cm.</ImageP>
            <ImageP>Enmarcado con varilla de kiri natural y paspartú</ImageP>
            <ImageP>37x44 cm.</ImageP>
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
            <ImageP>Pastizal n°1</ImageP>
            <ImageP>Imagen digital escalable</ImageP>
            <ImageP>20x20 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image 
          src="/images/works/pastizal/05.JPEG"
          
          ></Image>
          <ImageTextContainer>
            <ImageP>Pastizal 2020</ImageP>
            <ImageP>Tinta</ImageP>
            <ImageP>21x29 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/pastizal/06.JPG"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Pastizal</ImageP>
            <ImageP>Sublimación sobre creppe de gasa</ImageP>
            <ImageP>100x140 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryPastizal