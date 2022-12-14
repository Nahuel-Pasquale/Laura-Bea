import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0px 0px 0px;
  background-color: var(--lightGrey);
  gap: 70px;
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.gap};
  width: 95%;
  @media (max-width: 992px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
`;

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: max(25%, 430px);
  padding-top: 1rem;
  @media (max-width: 992px) {
    order: 2;
    align-items: center;
    width: min(85%, 450px);
    padding-top: 0;
  }
`;

const Title = styled.h2`
  font-family: "RobotoMono-light";
  padding: 0.1rem;
  border-bottom: 2px solid black;
  font-size: 2rem;
  padding-bottom: 1.5rem;
  width: fit-content;
  margin-right: ${(props) => props.margin};
  align-self: ${(props) => props.align};
  @media (max-width: 992px) {
    order: ${(props) => props.order};
    margin: unset;
  }
  @media (max-width: 430px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Subtitle = styled.h3`
  font-size: 0.7rem;
  font-family: "RobotoMono-medium";
  text-align: ${(props) => props.align};
  margin-right: ${(props) => props.margin};
  @media (max-width: 992px) {
    order: ${(props) => props.order};
    margin: unset;
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  font-family: "RobotoMono-regular";
  line-height: 2rem;
  letter-spacing: 1px;
  width: ${(props) => props.width};
  text-align: left;
  margin-top: ${(props) => props.mt};
  @media (max-width: 992px) {
    width: ${(props) => props.responsivewidth};
    margin-top: unset;
    align-self: ${(props) => props.selfalign};
  }
`;

const Image = styled.img`
  max-width: fit-content;
  height: ${(props) => props.height};
  @media (max-width: 992px) {
    max-width: unset;
    height: auto;
    width: min(90%, 500px);
  }
`;

const FigureContainer = styled.div`
  position: relative;
  margin-top: -210px;
  width: max(25%, 430px);
  @media (max-width: 992px) {
    position: unset;
    max-width: unset;
    margin-top: unset;
    width: min(90%, 500px);
  }
`;

const Figure = styled.img`
  height: ${(props) => props.height};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  display: ${(props) => props.display};
  @media (max-width: 992px) {
    height: unset;
    width: 95%;
    margin-left: unset;
    margin-top: unset;
    display: ${(props) => props.responsivedisplay};
  }
`;

const MoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 940px;
  height: 400px;
  position: relative;
  @media (max-width: 992px) {
    position: relative;
    height: auto;
    width: min(90%, 500px);
    flex-direction: column;
    gap: 20px;
    margin-bottom: 70px;
  }
`;

const Span = styled.span`
  font-weight: bold;
  a {
    text-decoration: none;
    color: var(--dark);
    cursor: pointer;
  }
`;

const Logo = styled.img`
  height: 60px;
  position: absolute;
  bottom: 30%;
  @media (max-width: 992px) {
    height: unset;
    width: 40%;
    bottom: -10%;
    left: 10%;
  }
`;

const AboutImages = () => {
  return (
    <>
      <Section>
        <ImageSection gap={"7rem"}>
          <ImageDescription>
            <Title>Dise??o y algo m??s</Title>

            <Paragraph width={"90%"}>
              A los 23 a??os me recib?? de dise??adora en comunicaci??n visual en la
              Facultad de Bellas Artes de la UNLP. A partir de all??, us?? el
              dibujo para planificar, proyectar, comunicar, proponer. Primero en
              2D en trabajos de dise??o gr??fico y luego en 3D, cuando en el nuevo
              milenio, comenc?? a dedicarme al dise??o de interiores.
            </Paragraph>
          </ImageDescription>
          <Image
            src="/images/sobre-mi/foto1-sobre-mi.jpg"
            height={"500px"}
          ></Image>
        </ImageSection>

        <ImageSection gap={"8rem"}>
          <FigureContainer>
            <Figure
              src="/images/sobre-mi/figura-1-sobre-mi.png"
              height={"700px"}
              ml={"-120px"}
              responsivedisplay={"none"}
            ></Figure>
          </FigureContainer>

          <ImageDescription>
            <Title align={"center"} margin={"2rem"}>
              Influencias y Arte
            </Title>
            <Subtitle align={"center"} margin={"2rem"}>
              Mi experiencia y proyectos
            </Subtitle>
            <Figure
              display={"none"}
              height={"400px"}
              ml={"-50px"}
              src="/images/sobre-mi/figura-1-sobre-mi.png"
              responsivedisplay={"flex"}
            ></Figure>
            <Paragraph width={"95%"}>
              En el 2018 me encontr?? con el Sumi-e y su profesora Julieta
              Jiterman. Fue la primera vez que us?? el dibujo o la pintura, como
              medio de expresi??n. Siempre lo hab??a usado al servicio del dise??o.
              Pero mi ojo de dise??adora y decoradora, no dejaba de ver esas
              flores o manchas que pintaba, un estampado.
            </Paragraph>
          </ImageDescription>
        </ImageSection>

        <Paragraph
          width={"940px"}
          mt={"-130px"}
          responsivewidth={" min(83%, 430px);"}
        >
          Y as?? llegamos al aclamado 2020. Pandemia y m??s all??, la inundaci??n...
          No s??, un tango para m??. Una mezcla de tragedia y arte. Y as?? fue que
          con Karin Esp??sito, iniciamos el proyecto de +casa. Ella ceramista, yo
          dise??adora de las estampas y motivos de las l??neas que creamos: El
          pastizal, GEO y RASG??. Hasta ahora. Ac?? les comparto el resultado de
          mis ??ltimos estudios de dise??o textil digital, donde fusiono lo que
          pinto o dibujo, con el dise??o digital en piezas listas para estampar.
        </Paragraph>
        <MoreContainer>
          <Paragraph selfalign={"flex-end"}>
            Conoce <Span> <a href="https://instagram.com/mascasaarte?igshid=YmMyMTA2M2Y=">+casa arte</a> </Span> {">"}
          </Paragraph>
          <Figure
            src="/images/sobre-mi/figura3-sobre-mi.png"
            height={"430px"}
          ></Figure>
          <Logo src="/images/logo Laura B-01.png" />
        </MoreContainer>
      </Section>
    </>
  );
};

export default AboutImages;
