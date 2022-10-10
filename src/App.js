import React, { useEffect, useLayoutEffect } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SobreMi } from "./pages/sobre-mi/SobreMi";
import { Contacto } from "./pages/contacto/Contacto";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import Flores from "./pages/trabajos/Flores";
import GeometriaZen from "./pages/trabajos/GeometriaZen";
import Pastizal from "./pages/trabajos/Pastizal";
import UniversoJapon from "./pages/trabajos/UniversoJapon";
import Estampados from "./pages/trabajos/Estampados";
import AOS from "aos";
import "aos/dist/aos.css";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};


export function App() {
  useEffect(() => {
    AOS.init({
      // once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="/sobre-mi" element={<SobreMi />}> </Route>
            <Route exact path="/contacto" element={<Contacto />}> </Route>
            <Route path="/trabajos"> 
              <Route  exact path="/trabajos/flores" element={<Flores />}> </Route>
              <Route  exact path="/trabajos/geometria-zen" element={<GeometriaZen />}> </Route>
              <Route  exact path="/trabajos/pastizal" element={<Pastizal />}> </Route>
              <Route  exact path="/trabajos/universo-japon" element={<UniversoJapon />}> </Route>
              <Route  exact path="/trabajos/estampados" element={<Estampados />}> </Route>
            </Route>
            <Route path="/*" element={<Navigate replace={true} to="/" />}>  </Route>
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default App;

