import React from 'react';
import { Footer } from '../../components/footer/Footer';
// import styled from 'styled-components';
import { Header } from '../../components/header/Header';
import { Design } from './sections/Design';
import { Hero } from './sections/Hero';
import { UniversJ } from './sections/UniversJ';
import { Works } from './sections/Works';


export const Home = () => {
  

  return (
    <>  
        <Header />
        <Hero />
        <Works />
        <Design />
        <UniversJ />
        <Footer />
    </>
  )
}
