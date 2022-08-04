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
