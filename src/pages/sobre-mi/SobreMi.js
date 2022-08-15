import React from 'react'
import styled from 'styled-components';
import { Footer } from '../../components/footer/Footer';
import Hamburger from '../../components/hamburger/Hamburger';
import Navbar from '../../components/navbar/Navbar';


const AboutHero = styled.section`
margin-top: 35vh;
padding: 70px 0px;
display:flex;
align-items:center;
justify-content:center;
background-color:var(--grey);
gap:100px;

`

const HeroImg = styled.img`
  height: 500px;
`

const HeroInfo = styled.div`
  height: 500px;

  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-end;  
  padding:70px 0px;

  `

const HeroInfoTitle = styled.div`
  display:flex;
  align-items:flex-end;
  justify-content:flex-end;
  width:100%;
  flex-direction:column;
  padding-right:30px;
  width:fit-content;
`

const HeroInfoH1 = styled.h1`
display:flex;
flex-direction:column;
padding-bottom: 15px;
font-family: 'Manrope-regular';
font-size: 2rem;
width:100%;



`
const HeroInfoH1Span = styled.span`

`


const HeroInfoP = styled.p`
  display:flex;
  border-top: 1px solid black;
  padding-top: 15px;
  font-size: .8rem;
  font-family:'RobotoMono-bold';
  
}
`

const HeroInfoDescription = styled.p`
  width:40vw;
  letter-spacing: 1px;
  font-size: .7rem;
  font-family:'RobotoMono-bold';
  align-self:center;
  text-align:justify;
  line-height:1.8rem;
`

export const SobreMi = ({isOpen, handleOpen}) => {
  return (
    <>
    <Navbar display={'none'} isOpen={isOpen} handleOpen={handleOpen} />
    <Hamburger />
    <AboutHero>
      <HeroImg src={'images/sobre-mi/foto-laura.jpg'} alt="Foto de Laura Bea" />
      <HeroInfo>
      <HeroInfoTitle>
        <HeroInfoH1>Soy Laura B. <HeroInfoH1Span>Gutierrez</HeroInfoH1Span></HeroInfoH1>
        <HeroInfoP>Artista visual y diseñadora</HeroInfoP>
      </HeroInfoTitle>
      <HeroInfoDescription>Bienvenidos a mi espacio digital artístico en donde encontrarán un breve recorrido por mi exploración entre el diseño y las artes visuales. Combinando técnicas que van desde las acuarelas, la pintura con tinta china y los procesos digitales.</HeroInfoDescription>
      </HeroInfo>
    </AboutHero>
    <Footer />
    </>
  )
}
