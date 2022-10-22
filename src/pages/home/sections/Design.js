import React from "react";
import styled from "styled-components";

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
    padding: 130px 0px;
    /* height: 43vw; */
    @media (max-width: 1024px) {
        width: 60%;
        /* height: 60vh; */
        margin-left: 20%;
        gap: 40px;
        justify-content: flex-start;
        padding-top: 40px;
    }
    @media (max-width: 576px) {
        width: 80%;
        /* height: 60vh; */
        margin-left: 10%;
        gap: 40px;
        justify-content: flex-start;
        padding: 50px 20px;
        /* padding-top: 50px; */
    }
`    
const DesignTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Manrope-extralight';
    @media (max-width: 720px) {
        font-size: 1.5rem;
    }
    @media (max-width: 576px) {
        font-size: 1rem;
    }
`
const DesignPContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const DesignP = styled.p`
    font-size: 1.2rem;
    font-family: 'RobotoMono-light';
    /* text-align: justify; */
    line-height: 45px;
    @media (max-width: 720px) {
        font-size: 1.2rem;
        line-height: 25px;
    }
    @media (max-width: 576px) {
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
    @media (max-width: 576px) {
        font-size: 0.8rem;
        :hover::before{
            width: 86px;
        }
    }
`
const HeroPng = styled.div`
    position: absolute;
    z-index: 9999;
    bottom: -9vw;
    left: -20vw;
    background: url('/images/figura 2 home.png') no-repeat;
    background-size: cover;
    background-position: center;
    width: 35vw;
    height: 35vw;
    @media (max-width: 1350px) {
        width: 40vw;
        height: 40vw;
        bottom: -10vw;
    }
    @media (max-width: 710px) {
        bottom: -12vw;
        left: -10vw;
    }
    @media (max-width: 576px) {
        width: 50vw;
        height: 50vw;
        bottom: -15vw;
    }
    @media (max-width: 420px) {
        /* width: 60vw;
        height: 60vw; */
        bottom: -13vw;
        /* left: -20vw; */
    }
`

export const Design = () => {
    return (
    <>
        <DesignContainer>
        <HeroPng />
        <DesignTitle>Diseño de estampas y superficies.</DesignTitle>
        <DesignPContainer>
            <DesignP>
                Es generar una imagen para ser reproducida en una superficie.
                No es una aplicación directa como puede ser la pintura. Es un proceso
                técnico y/o mecánico que puede ir desde el sello hasta la impresión digital.
            </DesignP>
            <DesignP>
                Creo que el diseño también puede ser llamado arte cuando logra su máxima expresión.
            </DesignP>
            <DesignP>
                Pinto, fotografío o escaneo, compongo digitalmente, para luego mandar a estampar por sublimación 
                o estampa digital directa sobre: papel, papel tapiz, vinilos, PVC, alto impacto, madera y textiles
            </DesignP>
        </DesignPContainer>
        <DesignPBold>Mis diseños</DesignPBold>
        </DesignContainer>
    </>
    );
};
