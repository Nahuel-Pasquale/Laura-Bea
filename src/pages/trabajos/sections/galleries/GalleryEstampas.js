import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryEstampas = () => {
  return (
    <Section>
      <Paragraph>
      Después de pintar flores, manchas, paisajes y algún que otro animal, 
      con la técnica de sumi-e que no deja de sorprenderme, como ya les 
      conté, no puedo evitar imaginarme los futuros estampados. Acá realice 
      una pequeña colección de objetos para darme el gusto.
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
            <ImageP>Estampado Peonías Pop</ImageP>
            <ImageP>Sumi-é con tinta y acuarelas sobre papel de arroz.</ImageP>
            <ImageP>Collage digital realizado con Photoshop</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/02.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Peonías Pop</ImageP>
            <ImageP>Creppe de gasa</ImageP>
            <ImageP>1,35 x 1,35 cm</ImageP>
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
            <ImageP>Estampado Peonías</ImageP>
            <ImageP>Manchas de tinta sobre papel para acuarela sin textura. Collage ditgital realizado con Photoshop</ImageP>
            <ImageP></ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/04.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Peonías</ImageP>
            <ImageP>Satén</ImageP>
            <ImageP>1,40 x 1,40 cm</ImageP>
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
            <ImageP>Estampado Amapolas</ImageP>
            <ImageP>Dibujo con tinta, pluma y marcadores sobre papel para acuarela. Redibujado digitalmente editado en Illustrator.</ImageP>
            <ImageP></ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/estampados/06.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Pañuelo Amapolas</ImageP>
            <ImageP>Creppe de gasa</ImageP>
            <ImageP>1,35 x 1,35 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>     
      <ImageSection border={"1px solid black"}>
        <ImageContainer align>
        <ImageBg >
            <Image
              src="/images/works/estampados/07.jpg"
              height={"280px"}
              deskHeight={"280px"}
              // width={"120%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Estampado Koi</ImageP>
            <ImageP>Diseño con rapport</ImageP>
            <ImageP>32 x 32 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/estampados/08.jpg"
              height={"280px"}
              deskHeight={"280px"}
              width={"120%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Individual Koi</ImageP>
            <ImageP>Alto impacto</ImageP>
            <ImageP>30 x 45 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>     
      <ImageSection border={"1px solid black"}>
        <ImageContainer align>
        <ImageBg >
            <Image
              src="/images/works/estampados/09.jpg"
              height={"250px"}
              deskHeight={"280px"}
              width={"120%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Estampado agua</ImageP>
            <ImageP>Diseño con rapport</ImageP>
            <ImageP>32 x 32 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/estampados/10.JPEG"
              height={"260px"}
              deskHeight={"280px"}
              // width={"120%"}          
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Individual agua</ImageP>
            <ImageP>Alto impacto</ImageP>
            <ImageP>30 x 45 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>     
    </Section>
  );
};

export default GalleryEstampas