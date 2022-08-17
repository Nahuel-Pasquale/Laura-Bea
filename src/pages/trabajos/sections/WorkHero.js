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
`;

const Title = styled.h1`
  font-family: "Manrope-light";
  letter-spacing: 5px;
  font-size: 1.5rem;
  padding: 90px;
`;

const WorkHero = () => {
  return (
    <Section>
      <Title>{"<"} FLORES</Title>
    </Section>
  );
};

export default WorkHero;
