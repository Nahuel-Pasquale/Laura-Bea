import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const WorkNavbarUI = styled.nav`
margin-top: 25vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;

@media (max-width: 992px) {
    margin-top: 20vh;
  }

`

const NavbarList = styled.ul`
display:flex;
justify-content: center;
gap: 70px;
flex-wrap: wrap;
align-items:center;
width: 100%;
@media (max-width: 850px) {
    margin-top: 2vh;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding-left: 5vw;
  }

`

const NavItem = styled.li`
list-style:none;
font-family: 'RobotoMono-regular', sans-serif;
position: relative;
    ::before{ 
        content: "";
        z-index: 9999;
        height: 0.5px;
        width: 0%;
        background: var(--dark);
        position: absolute;
        right: 0;
        bottom: 0px;
        transition: 0.4s ease-out;
    }
    :hover::before{
        width: 100%;
  }
a{
  color: var(--dark);
}
`



const WorkNavbar = () => {
  return (
    <WorkNavbarUI >
        <NavbarList>
            <NavItem> <Link to="/trabajos/flores">Flores</Link></NavItem>
            <NavItem> <Link to="/trabajos/estampados">Estampados</Link></NavItem>
            <NavItem> <Link to="/trabajos/geometria-zen">Geometría Zen</Link></NavItem>
            <NavItem> <Link to="/trabajos/pastizal">Pastizal</Link></NavItem>
            <NavItem> <Link to="/trabajos/universo-japon">Universo Japón</Link></NavItem>
        </NavbarList>
        </WorkNavbarUI>
  )
}

export default WorkNavbar