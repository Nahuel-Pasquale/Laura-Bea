import React from 'react'
import styled from 'styled-components'

const HeroPng = styled.div`
    position: absolute;
    z-index: 9999;
    top: 2640px;
    left: -230px;
    background: url('images/figura 2 home.png') no-repeat;
    background-size: cover;
    width: 700px;
    height: 800px;
`

const DesignContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 50px;
    width: 45%;
    margin-left: 32%;
    height: 90vh;
`    
const DesignTitle = styled.h2`
    font-size: 2rem;
    font-family: 'Manrope-extralight';
`

const DesignP = styled.p`
    font-size: 1.2rem;
    font-family: 'RobotoMono-light';
    text-align: justify;
    line-height: 45px;
`

const DesignPBold = styled.p`
    font-size: 1.2rem;
    font-family: 'RobotoMono-Bold';
    text-align: right;
`

export const Design = () => {
  return (
    <>
        <HeroPng />
        <DesignContainer>
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
