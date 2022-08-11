import React from 'react'
import styled from 'styled-components'

// const HeroPng = styled.div`
//     position: absolute;
//     z-index: 9999;
//     top: 2640px;
//     left: -230px;
//     background: url('images/figura 2 home.png') no-repeat;
//     background-size: cover;
//     width: 700px;
//     height: 800px;
// `

const DesignContainer = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 50px;
    width: 45%;
    margin-left: 32%;
    height: 43vw;
    @media (max-width: 420px) {
        width: 80%;
        height: 60vh;
        margin-left: 10%;
        gap: 40px;
        justify-content: flex-start;
        padding-top: 20px;
    }
`    
const DesignTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Manrope-extralight';
    @media (max-width: 420px) {
        font-size: 1rem;
    }
`

const DesignP = styled.p`
    font-size: 1.2rem;
    font-family: 'RobotoMono-light';
    text-align: justify;
    line-height: 45px;
    @media (max-width: 420px) {
        font-size: 0.8rem;
        line-height: 25px;
    }
`

const DesignPBold = styled.p`
    font-size: 1.2rem;
    font-family: 'RobotoMono-Bold';
    text-align: right;
    position: relative;
    cursor: pointer;
    ::before{ 
        content: "";
        z-index: 9999;
        height: 2px;
        width: 0%;
        background: var(--dark);
        position: absolute;
        right: 0;
        bottom: -2px;
        transition: 0.4s ease-out;
    }
    :hover::before{
        width: 127px;
    }
    @media (max-width: 420px) {
        font-size: 0.8rem;
        :hover::before{
            width: 86px;
        }
    }
`
const HeroPng = styled.div`
    position: absolute;
    z-index: 9999;
    top: -4vw;
    left: -47vw;
    background: url('images/figura 2 home.png') no-repeat;
    background-size: contain;
    width: 50vw;
    height: 60vw;
    @media (max-width: 420px) {
        width: 100vw;
        height: 120vw;
        top: -15vw;
        left: -52vw;
        background-size: cover;
    }
`

export const Design = () => {
  return (
    <>
        <DesignContainer>
            <HeroPng />
            <DesignTitle>
                Diseño de estampas.
            </DesignTitle>
            <DesignP>
                Es el arte de pensar y producir diseños para la
                confección de prendas, accesorios, objetos de
                decoración, tapicería y demás productos textiles.
            </DesignP>
            <DesignPBold>
                Mis diseños
            </DesignPBold>
        </DesignContainer>
    </>
  )
}
