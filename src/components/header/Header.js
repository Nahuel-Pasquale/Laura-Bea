import React from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import Hamburger from '../hamburger/Hamburger';

const HeaderUI = styled.header`
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-top: 40px;
  margin-left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    padding-top: 60px;
    padding-left: 8%;
  }
  @media (max-width: 560px) {
    padding-top: 50px;
  }
`;
const Logo = styled.img`
  width: 20%;
  @media (max-width: 720px) {
    width: 35%;
  }
  @media (max-width: 420px) {
    width: 40%;
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
