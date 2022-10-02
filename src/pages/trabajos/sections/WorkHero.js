import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 35vh;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 70vh;
  background: url("images/works/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 992px) {
    margin-top: 25vh;
  }
  @media (max-width: 576px) {
    margin-top: 20vh;
  }
`;

const Title = styled.h1`
  font-family: "Manrope-light";
  letter-spacing: 5px;
  font-size: 1.5rem;
  padding: 90px;
  @media (max-width: 992px) {
    padding: 30px 50px;
  }
`;

const WorkHero = ({title}) => {
  return (
    <Section>
      <Title>{"<"} {title}</Title>
    </Section>
  );
};

export default WorkHero;
