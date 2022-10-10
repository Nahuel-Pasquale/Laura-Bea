import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 10%;
    width: 55%;
    height: 80vh;
    gap: 50px;
    @media (max-width: 1100px) {
        width: 60%;
        height: auto;
        padding-bottom: 80px;
        padding-left: 8%;
        justify-content: flex-start;
        padding-top: 60px;
    }
    @media (max-width: 810px) {
        width: 80%;
        height: auto;
        padding-bottom: 80px;
        padding-left: 8%;
        justify-content: flex-start;
        padding-top: 60px;
    }
    @media (max-width: 560px) {
        width: 90%;
        height: auto;
        padding-bottom: 100px;
        padding-left: 8%;
        justify-content: flex-start;
        padding-top: 50px;
    }
`;

const HeroTitle = styled.h1`
    font-size: 1.5rem;
    font-family: 'Manrope-light';
    text-align: justify;
    word-spacing: 14px;
    @media (max-width: 560px) {
        font-size: 0.6rem;
    }
`;

const HeroP = styled.p`
    font-size: 1rem;
    font-family: 'RobotoMono-light';
    /* text-align: left; */
    letter-spacing: 2px;
    line-height: 35px;
    @media (max-width: 560px) {
        font-size: 0.55rem;
        font-family: 'RobotoMono-Regular';
        line-height: 25px;
    }
`

const HeroSignature = styled.p`
    font-size: 0.8rem;
    font-family: 'RobotoMono-Bold';
    text-align: right;
    width: 100%;
    @media (max-width: 560px) {
        display: none;
    }
`

const HeroPNG = styled.div`
    position: absolute;
    bottom: -10vw;
    right: -35vw;
    z-index: 999;
    background: url('/images/sobre-mi/figura2-sobre-mi.png') no-repeat;
    background-size: contain;
    background-position: center;
    width: 33vw;
    height: 34vw;
    @media (max-width: 1350px) {
        bottom: -35%;
        width: 35vw;
        height: 60vw;
    }
    @media (max-width: 1100px) {
        bottom: -60%;
        width: 40vw;
        height: 70vw;
    }
    @media (max-width: 910px) {
        bottom: -50%;
        width: 40vw;
        height: 70vw;
    }
    @media (max-width: 810px) {
        bottom: -52%;
        right: -15vw;
        width: 35vw;
        height: 70vw;
    }
    @media (max-width: 770px) {
        bottom: -40%;
        width: 40vw;
    }
    @media (max-width: 600px) {
        bottom: -30%;
        right: -5vw;
    }
    @media (max-width: 560px) {
        bottom: -60%;
        right: 0vw;
    }
    @media (max-width: 530px) {
        bottom: -50%;
        right: 0vw;
    }
    @media (max-width: 460px) {
        bottom: -40%;
    }
    @media (max-width: 420px) {
        bottom: -30%;
    }
    @media (max-width: 320px) {
        bottom: -20%;
    }
`



export const Hero = () => {
  return (
    <>
        <HeroContainer>
        <HeroPNG />
            <HeroTitle>
                [ Diseño de estampas, patrones y superficies ]
            </HeroTitle>
            <HeroP>
                Si la superficie coincide con el alma del objeto,

                se produce una síntesis perfecta que se llama belleza.

                Sino, se produce un contrasentido, una instabilidad,

                una incomodidad.
            </HeroP>
            <HeroSignature>
                {/* Autor. Nombre */}
            </HeroSignature>
        </HeroContainer>
    </>
  )
}
