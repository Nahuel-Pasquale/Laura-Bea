import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryEstampas = () => {
  return (
    <Section>
      <Paragraph>
      Pinto, fotografío o escaneo, compongo digitalmente, para luego
      mandar a estampar por sublimación o estampa digital directa sobre
      papel, papel tapiz, vinilos, PVC, alto impacto, madera y textiles.
      Estos objetos, que produzco, en una pequeña escala o drop
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/estampados/01.JPG"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>

          <ImageTextContainer>
            <ImageP>Estampa Peonías Pop</ImageP>
            <ImageP>Sumi-é con tinta y acuarelas sobre papel de arroz.</ImageP>
            <ImageP>Collage digital realizado con Photoshop</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/02.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Peonías Pop</ImageP>
            <ImageP>Creppe de gasa</ImageP>
            <ImageP>1,35 x 1,35 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/estampados/03.jpg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Estampa Peonías</ImageP>
            <ImageP>Manchas de tinta sobre papel para acuarela sin textura. Collage ditgital realizado con Photoshop</ImageP>
            <ImageP></ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/04.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Peonías</ImageP>
            <ImageP>Satén 100% poliéster</ImageP>
            <ImageP>1,40 x 1,40 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/estampados/05.jpg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
              
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Estampa Amapolas</ImageP>
            <ImageP>Dibujo con tinta, pluma y marcadores sobre papel para acuarela. Redibujado digitalmente editado en Illustrator.</ImageP>
            <ImageP></ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/06.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Amapolas</ImageP>
            <ImageP>Creppe de gasa</ImageP>
            <ImageP>1,35x 1,35 cm.</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>

      
    </Section>
  );
};

export default GalleryEstampas