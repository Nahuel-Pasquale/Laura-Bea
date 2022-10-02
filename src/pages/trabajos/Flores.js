import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import GalleryFlores from "./sections/galleries/GalleryFlores";
import WorkHero from "./sections/WorkHero";

const Flores = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero background="/images/works/banner.jpg" title="FLORES" />
      <GalleryFlores />
      <Footer />
    </>
  );
};

export default Flores



