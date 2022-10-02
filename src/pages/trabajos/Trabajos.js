import React from "react";
import { Footer } from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import Navbar from "../../components/navbar/Navbar";
import Gallery from "./sections/Gallery";
import WorkHero from "./sections/WorkHero";

export const Trabajos = ({ isOpen, handleOpen }) => {
  return (
    <>
      <Navbar display={"none"} isOpen={isOpen} handleOpen={handleOpen} />
      <Hamburger />
      <WorkHero title="ALGO" />
      <Gallery />
      <Footer />
    </>
  );
};
