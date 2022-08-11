import React from 'react';
import { Footer } from '../../components/footer/Footer';
import Hamburger from '../../components/hamburger/Hamburger';
import Navbar from '../../components/navbar/Navbar';
import { ContactForm } from './sections/ContactForm';
import styled from 'styled-components';
import { ContactSectionMap } from './sections/ContactMap';


const Divider = styled.div`
  width: 100%;
  height: 20vh;
`


export const Contacto = ({isOpen, handleOpen}) => {
  
  return (
    <>
          <Navbar isOpen={isOpen} handleOpen={handleOpen} />
          <Hamburger />
          <ContactSectionMap />
          <ContactForm />
          <Divider />
          <Footer />
    </>
  )
}
