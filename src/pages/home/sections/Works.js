import React from 'react'
import styled from 'styled-components'

const ContenedorWorks = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 560px) {
        flex-direction: row-reverse;
    }
`

const Work = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.background)};
    background-repeat: no-repeat;
    background-size: cover;
    width: 50%;
    height: 50vw;
    @media (max-width: 560px) {
        width: 100%;
        height: 100vw;
    }
`

const WorkFilter = styled.div`
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

const WorkTitle = styled.h3`
    font-size: 1.8vw;
    font-family: 'Manrope-extralight';
    font-weight: ${(props) => (props.fontW)};
    position: absolute;
    background: transparent;
    letter-spacing: 0.3vw;
    width: ${(props) => (props.width)};
    text-align: justify;
    color: ${(props) => (props.color)};
    top: ${(props) => (props.top)};
    right: ${(props) => (props.right)};
    left: ${(props) => (props.left)};
    bottom: ${(props) => (props.bottom)};
    z-index: 20;
    cursor: pointer;
    ::before{ 
        content: "";
        height: 2px;
        width: 0%;
        background: ${(props) => (props.hover)};
        position: absolute;
        right: 0;
        left: ${(props) => (props.hoverLeft)};;
        bottom: -2px;
        transition: 0.4s ease-out;
    }
    :hover::before{
        width: ${(props) => (props.hoverWidth)};
    }
    @media (max-width: 560px) {
        width: 50vw;
        width: ${(props) => (props.widthR)};
        font-size: 4vw;
        top: ${(props) => (props.topR)};
        right: ${(props) => (props.rightR)};
        left: ${(props) => (props.leftR)};
        bottom: ${(props) => (props.bottomR)};
        :hover::before{
            width: ${(props) => (props.hoverWidthR)};
        }
    }
`

const WorkImg = styled.img`
    width: ${(props) => (props.width)};;
    height: ${(props) => (props.height)};;
    background-color: white;
    @media (max-width: 560px) {
        width: ${(props) => (props.widthR)};
        height: ${(props) => (props.heightR)};
    }
`

export const Works = () => {
  return (
    <>
        <ContenedorWorks>
            <Work background="white">
                <WorkImg width="30vw" height="40vw" widthR="60vw" heightR="70vw" src="/images/works/geometria-zen/04.png" />
            </Work>
            <Work background="var(--dark)">
                <WorkTitle bottom="7.4vw" bottomR="16vw" left="10vw" leftR="35vw" color='white'>
                    {'<'}
                </WorkTitle>
                <WorkTitle hoverWidth="15.6vw" hoverWidthR="30vw" widthR="47vw" hover="var(--lightGrey)" width="25vw" bottom="5vw" bottomR="10vw" left="12vw" leftR="40vw" color="white" fontW="300">
                    Descubrí mis obras sobre la geometría zen
                </WorkTitle>
            </Work>
            <Work background="url('/images/home/cuadrado flores_Mesa de trabajo 1.jpg')">
                <WorkFilter />
                <WorkTitle hoverWidth="6.5vw" hoverWidthR="13vw" widthR="0%" hoverLeft="0" hover="var(--dark)" top="5vw" topR="10vw" left="33vw" leftR="70vw">
                    Flores{'>'}
                </WorkTitle>
            </Work>
            <Work background="var(--lightGrey)">
                <WorkImg width="25vw" height="30vw" widthR="50vw" heightR="60vw" src="/images/home/cuadro home_Mesa de trabajo 1.jpg" />
            </Work>
            <Work background="var(--dark)">
                <WorkImg width="29vw" height="34vw" widthR="60vw" heightR="70vw" src="/images/home/pastizal home.jpg" />
            </Work>
            <Work background="white">
                <WorkTitle hoverWidth="8.6vw" hoverWidthR="16.4vw" hover="var(--dark)" widthR="20%" top="5vw" topR="10vw" right="32vw" rightR="70vw">
                    {'<'} Pastizal
                </WorkTitle>
                <WorkImg width="25vw" height="30vw" widthR="50vw" heightR="60vw" src="/images/home/figura pastizal home.jpg" />
            </Work>
        </ContenedorWorks>
    </>
  )
}
