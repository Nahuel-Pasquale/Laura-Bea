import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import GalleryUniversoJapon from "./sections/galleries/GalleryUniversoJapon";
import WorkHero from "./sections/WorkHero";

const UniversoJapon = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero hoverWidth="120px" background="/images/works/universo-japon/universo-japon.png" title="UNIVERSO JAPÓN" />
      <GalleryUniversoJapon />
      <Footer />
    </>
  );
};

export default UniversoJapon