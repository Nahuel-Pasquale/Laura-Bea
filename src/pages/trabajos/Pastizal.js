import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import GalleryPastizal from "./sections/galleries/GalleryPastizal";
import WorkHero from "./sections/WorkHero";

const Pastizal = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero background="/images/works/pastizal/pastizal.png" title="PASTIZAL" />
      <GalleryPastizal />
      <Footer />
    </>
  );
};

export default Pastizal