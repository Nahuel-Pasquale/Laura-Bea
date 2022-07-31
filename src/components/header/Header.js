import React from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import Hamburger from '../hamburger/Hamburger';

const HeaderUI = styled.header`
  width: 100%;
  height: 100vh;
`;


export const Header = ({ isOpen, handleOpen}) => {
  return (
    <>
      <HeaderUI>
          <Navbar isOpen={isOpen} handleOpen={handleOpen} />
          <Hamburger />
      </HeaderUI>
    </>
  )
}
