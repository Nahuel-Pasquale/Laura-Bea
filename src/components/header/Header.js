import React from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import Hamburger from '../hamburger/Hamburger';

const HeaderUI = styled.header`
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 14vh;
  padding-left: 10%;
  margin-left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-top: 2.6vw;
  @media (max-width: 1024px) {
    height: 14vh;
    padding-left: 8%;
    margin-top: 2.4vw;
  }
  @media (max-width: 560px) {
    height: 14vh;
    padding-left: 8%;
    margin-top: 4vw;
  }
`;
const Logo = styled.img`
  width: 20%;
  /* @media (max-width: 1024px) {
    width: 20%;
  } */
  @media (max-width: 720px) {
    width: 35%;
  }
  @media (max-width: 420px) {
    width: 35%;
  }
`;


export const Header = ({ isOpen, handleOpen }) => {
  return (
    <>
      <HeaderUI>
          <LogoContainer>
            <Logo src="/images/logo Laura B-01.png" />
          </LogoContainer>
          <Navbar isOpen={isOpen} handleOpen={handleOpen} />
          <Hamburger />
      </HeaderUI>
    </>
  )
}
