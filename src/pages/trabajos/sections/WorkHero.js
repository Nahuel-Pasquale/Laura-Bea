import React from "react";
import styled from "styled-components";
import WorkNavbar from "../../../components/navbar/WorkNav";

const Section = styled.section`
  margin-top: 5vh;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 70vh;
  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const Title = styled.h1`
  font-family: "Manrope-light";
  letter-spacing: 5px;
  font-size: 1.5rem;
  padding: 90px;
  text-align: right;
  @media (max-width: 992px) {
    padding: 30px;
    font-size: 1.4rem;
  }
`;
const WorkHero = ({title, background}) => {
  return (
<>
    <WorkNavbar/>
    <Section background={background}>
      <Title>{"<"} {title}</Title>
    </Section>
    </>
  );

};

export default WorkHero;
