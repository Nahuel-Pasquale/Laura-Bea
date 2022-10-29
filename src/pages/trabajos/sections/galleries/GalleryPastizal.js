import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryPastizal = () => {
  return (
    <Section>
      <Paragraph>
        Imágenes que desarrollé para la primera línea de +casa arte. Acá 
        les muestro algunas de las versiones del tema y cómo quedan en diferentes soportes. 
        Una forma de mostrar las posibilidades de un motivo.
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
            <ImageP>Acuarela 21 x 29 cm</ImageP>
            <ImageP>Enmarcada con varilla de kiri natural y paspartú </ImageP>
            <ImageP>37 x 44 cm</ImageP>
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
            <ImageP>Sublimación sobre pana</ImageP>
            <ImageP>50 x 50 cm</ImageP>
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
            <ImageP>Tinta negra 21 x 29 cm</ImageP>
            <ImageP>Enmarcado con varilla de kiri natural y paspartú</ImageP>
            <ImageP>37 x 44 cm</ImageP>
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
            <ImageP>20 x 20 cm</ImageP>
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
            <ImageP>21 x 29 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/pastizal/06.JPG"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Pastizal</ImageP>
            <ImageP>Sublimación sobre creppe de gasa</ImageP>
            <ImageP>100 x 140 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryPastizal