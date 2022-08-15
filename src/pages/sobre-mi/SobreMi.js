import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import AboutHero from "./sections/AboutHero";
import AboutImages from "./sections/AboutImages";

export const SobreMi = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <AboutHero />
      <AboutImages />
      <Footer />
    </>
  );
};
