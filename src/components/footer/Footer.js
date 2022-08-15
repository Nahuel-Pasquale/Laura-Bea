import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark);
  color: var(--lightGrey);
  width: 100%;
  height: 30vh;
  gap: 70px;
  @media (max-width: 420px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FooterLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  width: 25%;
  @media (max-width: 420px) {
    display: none;
  }
`;

const FooterLocationP = styled.p`
  font-size: ${(props) => props.size};
  font-family: "Manrope-extralight";
  font-weight: ${(props) => props.fontW};
  letter-spacing: 0.3vw;
`;

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  @media (max-width: 420px) {
    width: 15%;
  }
`;

const FooterLogoImg = styled.img`
  width: 100%;
  margin-bottom: 15px;
  @media (max-width: 420px) {
    margin-bottom: 0px;
  }
`;

const FooterRedes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 80px;
  width: 25%;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 420px) {
    width: 80%;
    padding-left: 0px;
  }
`;

const FooterRedesIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  font-size: 2rem;
  cursor: pointer;
  @media (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const Footer = () => {
  const openPage = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <FooterContainer>
        <FooterLocation>
          <FooterLocationP size="0.8rem">lauragut53@gmail.com</FooterLocationP>
          <FooterLocationP size="0.8rem">+11 234456789</FooterLocationP>
          <FooterLocationP size="0.8rem">
            Buenos Aires, Argentina.
          </FooterLocationP>
        </FooterLocation>
        <FooterLogo>
          <FooterLogoImg src="images/isologo footer.png" alt="logo" />
        </FooterLogo>
        <FooterRedes>
          <FooterRedesIcons>
            <AiOutlineInstagram
              onClick={() => openPage("https://www.google.com/")}
            />
            <AiOutlineWhatsApp
              onClick={() => openPage("https://www.google.com/")}
            />
            <RiFacebookCircleLine
              onClick={() => openPage("https://www.google.com/")}
            />
          </FooterRedesIcons>
          <FooterLocationP size="0.7rem">
            All rights reserved 2022.
          </FooterLocationP>
        </FooterRedes>
      </FooterContainer>
    </>
  );
};
