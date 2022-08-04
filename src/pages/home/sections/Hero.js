import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 10%;
    width: 55%;
    height: 80vh;
    gap: 50px;
`;

const HeroTitle = styled.h1`
    font-size: 1.5rem;
    font-family: 'Manrope-light';
    text-align: justify;
    word-spacing: 14px;
`;

const HeroP = styled.p`
    font-size: 1rem;
    font-family: 'RobotoMono-light';
    text-align: justify;
    letter-spacing: 2px;
    line-height: 35px;
`

const HeroSignature = styled.p`
    font-size: 0.8rem;
    font-family: 'RobotoMono-Bold';
    text-align: right;
    width: 100%;
`

const HeroPNG = styled.div`
    position: absolute;
    top: 310px;
    z-index: 9999;
    right: 66px;
    background: url('images/figura 1 home.png') no-repeat;
    background-size: contain;
    width: 33vw;
    height: 34vw;
`



export const Hero = () => {
  return (
    <>
        <HeroPNG />
        <HeroContainer>
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
                Autor. Nombre
            </HeroSignature>
        </HeroContainer>
    </>
  )
}
