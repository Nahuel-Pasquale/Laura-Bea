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
`;

const ImageDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: max(25%, 430px);
  padding-top: 1rem;
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
`;

const Subtitle = styled.h3`
  font-size: 0.7rem;
  font-family: "RobotoMono-medium";
  text-align: ${(props) => props.align};
  margin-right: ${(props) => props.margin};
`;

const Paragraph = styled.p`
  font-size: 0.7rem;
  font-family: "RobotoMono-regular";
  line-height: 2rem;
  letter-spacing: 1px;
  width: ${(props) => props.width};
  text-align: justify;
  margin-top: ${(props) => props.mt};
`;

const Image = styled.img`
  max-width: fit-content;
  height: ${(props) => props.height};
`;

const FigureContainer = styled.div`
  position: relative;
  margin-top: -210px;
  width: max(25%, 430px);
`;

const Figure = styled.img`
  height: ${(props) => props.height};
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
  display: ${(props) => props.display};
`;

const MoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 940px;
  height: 400px;
  position: relative;
`;

const Span = styled.span`
  font-weight: bold;
`;

const Logo = styled.img`
  height: 60px;
  position: absolute;
  bottom: 30%;
`;

const AboutImages = () => {
  return (
    <>
      <Section>
        <ImageSection gap={"7rem"}>
          <ImageDescription>
            <Title>Diseño y algo más</Title>

            <Paragraph width={"90%"}>
              A los 23 años me recibí de diseñadora en comunicación visual en la
              Facultad de Bellas Artes de la UNLP. A partir de allí, usé el
              dibujo para planificar, proyectar, comunicar, proponer. Primero en
              2D en trabajos de diseño gráfico y luego en 3D cuando en el nuevo
              milenio, comencé a dedicarme al diseño de interiores.
            </Paragraph>
          </ImageDescription>
          <Image
            src="images/sobre-mi/foto1-sobre-mi.jpg"
            height={"500px"}
          ></Image>
        </ImageSection>

        <ImageSection gap={"8rem"}>
          <FigureContainer>
            <Figure
              src="images/sobre-mi/figura-1-sobre-mi.png"
              height={"700px"}
              ml={"-120px"}
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
              src="images/sobre-mi/figura-1-sobre-mi.png"
            ></Figure>
            <Paragraph width={"95%"}>
              En el 2018 me encontré con el Sumi-e y su profesora Julieta
              Jiterman. Fue la primera vez que usé el dibujo o la pintura, como
              medio de expresión. Siempre lo había usado al servicio del diseño.
              Pero mi ojo de diseñadora y decoradora, no dejaba de ver esas
              flores o manchas que pintaba, un estampado.
            </Paragraph>
          </ImageDescription>
        </ImageSection>

        <Paragraph width={"940px"} mt={"-130px"}>
          Y así llegamos al aclamado 2020. Pandemia y más allá, la inundación...
          No sé, un tango para mí. Una mezcla de tragedia y arte. Y así fue que
          con Karin Espósito, iniciamos el proyecto de +casa. Ella ceramista, yo
          diseñadora de las estampas y motivos de las líneas que creamos: El
          pastizal, GEO y RASGo. Hasta ahora. Acá les comparto el resultado de
          mis últimos estudios de diseño textil digital, donde fusiono lo que
          pinto o dibujo, con el diseño digital en piezas listas para estampar.
        </Paragraph>
        <MoreContainer>
          <Paragraph>
            Conoce <Span> +casa arte </Span> {">"}
          </Paragraph>
          <Figure
            src="images/sobre-mi/figura3-sobre-mi.png"
            height={"430px"}
          ></Figure>
          <Logo src="images/logo Laura B-01.png" />
        </MoreContainer>
      </Section>
    </>
  );
};

export default AboutImages;
