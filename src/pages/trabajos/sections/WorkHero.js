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
  /* ::before{ 
        content: "";
        z-index: 9999;
        height: 2px;
        width: 0%;
        background: var(--dark);
        position: absolute;
        right: 0;
        bottom: -2px;
        transition: 0.4s ease-out;
    }
    :hover::before{
        width: 100px;
    } */
  @media (max-width: 992px) {
    padding: 30px;
    font-size: 1.4rem;
  }
`;
const WorkHero = ({title, background, hoverWidth}) => {
  return (
    <>
      <WorkNavbar/>
      <Section background={background} hoverWidth={hoverWidth}>
        <Title>{"<"} {title} </Title>
      </Section>
    </>
  );

};

export default WorkHero;
