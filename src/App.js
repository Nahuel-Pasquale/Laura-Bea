import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SobreMi } from "./pages/sobre-mi/SobreMi";
import { Contacto } from "./pages/contacto/Contacto";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import Flores from "./pages/trabajos/Flores";
import GeometriaZen from "./pages/trabajos/GeometriaZen";
import Pastizal from "./pages/trabajos/Pastizal";
import UniversoJapon from "./pages/trabajos/UniversoJapon";
import Estampados from "./pages/trabajos/Estampados";
export function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
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
      </Router>
    </>
  );
}

export default App;

