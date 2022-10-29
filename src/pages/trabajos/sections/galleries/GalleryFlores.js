import React from 'react'
import { Image, ImageBg, ImageContainer, ImageP, ImageSection, ImageTextContainer, Paragraph, Section } from '../Gallery';

const GalleryFlores = () => {
  return (
    <Section>
      <Paragraph>
        Las piezas de esta serie están realizadas con técnicas mixtas de
        pintura con acuarela y tinta china.
      </Paragraph>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="/images/works/IMG_7264.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Flores en cuenco</ImageP>
            <ImageP>Sumi-e: tinta china sobre papel de guía telefónica</ImageP>
            <ImageP>18 x 24 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/IMG_6467.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Flores de frutal</ImageP>
            <ImageP>Sumi-e: tinta china sobre papel de arroz</ImageP>
            <ImageP>20 x 30 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
          <Image src="/images/works/colores-girasol.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Colores del girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50 x 70 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/girasolcuadro.jpg"></Image>
          <ImageTextContainer>
            <ImageP>Girasol</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>50 x 70 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection>
        <ImageContainer>
          <Image src="/images/works/floreado.jpg"></Image>
          <ImageTextContainer de flores>
            <ImageP>Floreado</ImageP>
            <ImageP>Tinta sobre papel de acuarela</ImageP>
            <ImageP>16,5 x 24,5 cm</ImageP>
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
            <ImageP>27,5 x 33 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg>
            <Image
              src="/images/works/flores/01.jpg"
              height={"330px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Campo de flores</ImageP>
            <ImageP>Acuarela sobre papel de algodón</ImageP>
            <ImageP>Lámina 27,5 x 26 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
          <Image src="/images/works/flores/02.jpg"></Image>
          <ImageTextContainer>
          <ImageP>Peonía en jarrón</ImageP>
            <ImageP>Tinta y acuarela sobre papel de guía telefónica.</ImageP>
            <ImageP>Lámina 17,5 x 24,5 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/flores/03.png"
              height={"550px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
          <ImageP>Diente de león</ImageP>
            <ImageP>Sumi-e: y tinta sobre papel de arroz</ImageP>
            <ImageP>Lámina 17 x 44 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/flores/04.jpg"
              height={"280px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
          <ImageP>Crisantemos amarillos</ImageP>
            <ImageP>Sumi-e: tinta y acuarela sobre papel de arroz.</ImageP>
            <ImageP>Lámina 32 x 24 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
      <ImageSection border={"1px solid black"}>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/flores/05.jpg"
              height={"370px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Lapacho en la vereda</ImageP>
            <ImageP>Acuarela sobre papel de algodón</ImageP>
            <ImageP>Lámina 15,5 x 23 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
        <ImageContainer>
        <ImageBg >
            <Image
              src="/images/works/flores/06.jpeg"
              height={"370px"}
              deskHeight={"280px"}
              width={"100%"}
            ></Image>
          </ImageBg>
          <ImageTextContainer>
            <ImageP>Peonía con pimpollo</ImageP>
            <ImageP>Sumi-e: tinta y acuarela sobre papel de arroz.</ImageP>
            <ImageP>Lámina 29,5 x 34,5 cm</ImageP>
          </ImageTextContainer>
        </ImageContainer>
      </ImageSection>
    </Section>
  );
};

export default GalleryFlores