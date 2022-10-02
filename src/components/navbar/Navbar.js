import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MenuContext } from "../../context/context";


const NavbarUI = styled.nav`
  display: flex;
  font-family: var(--Manrope-regular);
  flex-direction: column;
  background-color: var(--dark);
  bottom: 0;
  height: 100%;
  left: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  transform: ${(props) =>
    props.isOpen
      ? "translate3d(0px, 0px, 0px)"
      : "translate3d(0px, -110%, 0px)"};
  transition: transform 0.35s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;
  width: 50%;
  z-index: 1998;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
  @media screen and (max-width: 650px) {
    width: 60%;
  }
  @media screen and (max-width: 476px) {
    width: 100%;
  }
`;

export const Menu = styled.p`
  display: ${(props) => (props.display)};
  font-size: 14px;
  font-family: 'Manrope-regular';
  position: fixed;
  letter-spacing: 5px;
  top: 65px;
  right: 200px;
  z-index: 2000;
  @media screen and (max-width: 1024px) {
    right: 120px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  width: 47%;
  margin: 0;
  margin-top: 2rem;
  padding: 0;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0.9rem;
  font-family: 'Manrope-Light';
  color: var(--lightGrey);
  flex-direction: column;
`;

const NavLink = styled.li`
  padding-top: 0.4rem;
  list-style: none;
  text-align: center;
  color:  var(--lightGrey);
  font-size: 1.5rem;
  line-height: 3em;
  height: 3em;
  text-transform: none;
  font-weight: bold;
`;
// const LogoContainer = styled.div`
//   width: 100%;
//   margin-left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Logo = styled.img`
//   width: 20%;
//   @media (max-width: 1024px) {
//     width: 35%;
//   }
// `;

export const Navbar = ({display}) => {
  const ctx = useContext(MenuContext);
  return (
    <>
    <Menu clicked={ctx.isMenuOpen} display={display} >MENÚ</Menu>
    <NavbarUI isOpen={ctx.isMenuOpen}>
      <NavMenu>
        <Link to="/" onClick={ctx.toggleMenu}>
          <NavLink>Inicio</NavLink>
        </Link>
        <Link to="trabajos/flores" onClick={ctx.toggleMenu}>
          <NavLink>Trabajos</NavLink>
        </Link>
        <Link to="/sobre-mi" onClick={ctx.toggleMenu}>
          <NavLink>Sobre mí</NavLink>
        </Link>
        <Link to="/contacto" onClick={ctx.toggleMenu}>
          <NavLink>Contacto</NavLink>
        </Link>
      </NavMenu>
    </NavbarUI>
  </>
  );
};

export default Navbar;
