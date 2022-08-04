import React from 'react'
import styled from 'styled-components'

const ContenedorWorks = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
    width: 25vw;
    text-align: justify;
    color: ${(props) => (props.color)};
    top: ${(props) => (props.top)};
    right: ${(props) => (props.right)};
    left: ${(props) => (props.left)};
    bottom: ${(props) => (props.bottom)};
    z-index: 20;
`

const WorkImg = styled.img`
    width: ${(props) => (props.width)};;
    height: ${(props) => (props.height)};;
    background-color: white;
`

export const Works = () => {
  return (
    <>
        <ContenedorWorks>
            <Work background="white">
                <WorkImg width="30vw" height="35vw" src="images/home/circulo home.png" />
            </Work>
            <Work background="var(--dark)">
                <WorkTitle bottom="7.4vw" left="10vw" color='white'>
                    {'<'}
                </WorkTitle>
                <WorkTitle bottom="5vw" left="12vw" color="white" fontW="300">
                    Descubrí mis obras sobre la geometría zen
                </WorkTitle>
            </Work>
            <Work background="url('images/home/cuadrado flores_Mesa de trabajo 1.jpg')">
                <WorkFilter />
                <WorkTitle top="5vw" left="33vw">
                    {'Flores >'}
                </WorkTitle>
            </Work>
            <Work background="var(--lightGrey)">
                <WorkImg width="25vw" height="30vw" src="images/home/cuadro home_Mesa de trabajo 1.jpg" />
            </Work>
            <Work background="var(--dark)">
                <WorkImg width="29vw" height="34vw" src="images/home/pastizal home.jpg" />
            </Work>
            <Work background="white">
                <WorkTitle top="5vw" right="18vw">
                    {'<'} Pastizal
                </WorkTitle>
                <WorkImg width="25vw" height="30vw" src="images/home/figura pastizal home.jpg" />
            </Work>
        </ContenedorWorks>
    </>
  )
}
