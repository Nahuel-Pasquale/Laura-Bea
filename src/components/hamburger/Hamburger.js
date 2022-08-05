import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../../context/context";

const HamburgerContainer = styled.div`
  display: ${(props) => (props.landing ? "none" : "flex")};
  position: fixed;
  color: #fff;
  right: 100px;
  top: 0;
  height: 145px;
  width: 60px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0.1rem;
  z-index: 1999;
  @media (max-width: 1024px) {
    display: flex;
    right: 5%;
  }
  @media (max-width: 687px) {
    display: flex;
    right: 10%;
  }
`;

const Icon = styled.span`
  position: relative;
  /* background-color: var(--lightGrey); */
  z-index: 9999;
  width: 50px;
  height: 1px;
  display: inline-block;
  transition: all 0.3s;
  overflow: visible;
  &::before,
  &::after {
    background-color: black;
    content: "";
    width: 60px;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
    @media screen and (max-width: 476px) {
      background-color: ${(props) =>
        props.clicked === true ? 'var(--lightGrey)' : 'var(--dark)'};
    }
  }

  &::before {
    top: ${(props) => (props.clicked === true ? "0" : "-0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(135deg)" : "rotate(0)"};
  }
  &::after {
    top: ${(props) => (props.clicked === true ? "0" : "0.5rem")};
    transform: ${(props) =>
      props.clicked === true ? "rotate(-135deg)" : "rotate(0)"};
  }
`;

const Hamburger = () => {
  const ctx = useContext(MenuContext);

  return (
    <HamburgerContainer onClick={ctx.toggleMenu}>
      <Icon clicked={ctx.isMenuOpen}></Icon>
    </HamburgerContainer>
  );
};

export default Hamburger;
