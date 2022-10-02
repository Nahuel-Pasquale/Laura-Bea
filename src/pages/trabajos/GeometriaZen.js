import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import GalleryGZen from "./sections/galleries/GalleryGZen";
import WorkHero from "./sections/WorkHero";

const GeometriaZen = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero background="/images/works/banner.jpg" title="GEOMETRÍA ZEN" />
      <GalleryGZen />
      <Footer />
    </>
  );
};

export default GeometriaZen