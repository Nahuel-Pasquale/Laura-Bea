import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import GalleryEstampas from "./sections/galleries/GalleryEstampas";
import WorkHero from "./sections/WorkHero";

const Estampados = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero background="/images/works/estampados/estampados.png" title="ESTAMPADOS EN PRODUCTOS" />
      <GalleryEstampas />
      <Footer />
    </>
  );
};

export default Estampados