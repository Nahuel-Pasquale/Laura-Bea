import React from 'react'
import styled from 'styled-components'


const UniversJContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 40vw;
    background: url('images/home/banner peces_Mesa de trabajo 1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: 420px) {
        height: 80vw;
    }
`

const UniversJFilter = styled.div`
    width: 100%;
    height: 100%;
    background: var(--lightGrey);
    opacity: 0.5;
    z-index: 1;
    transition: all 0.5s linear;
    :hover {
        opacity: 0;
        transition: all 0.5s linear;
    }
`

const UniversJTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Manrope-extralight';
    position: absolute;
    background: transparent;
    bottom: 5vw;
    right: 8vw;
    letter-spacing: 0.3vw;
    z-index: 20;
    text-align: justify;
    color: var(--dark);
    cursor: pointer;
    ::before{ 
        content: "";
        height: 2px;
        width: 0%;
        background: var(--dark);
        position: absolute;
        right: 0;
        bottom: -2px;
        transition: 0.4s ease-out;
    }
    :hover::before{
        width:  310px;
    }
    @media (max-width: 420px) {
        font-family: 'Manrope-light';
        font-size: 1rem;
        bottom: 70vw;
        right: 8vw;
        /* top: 5vw; */
        :hover::before{
        width:  145px;
    }
    }
`

export const UniversJ = () => {
  return (
    <>
        <UniversJContainer>
            <UniversJFilter />
            <UniversJTitle>
                {'<'} Universo Japones
            </UniversJTitle>
        </UniversJContainer>
    </>
  )
}
