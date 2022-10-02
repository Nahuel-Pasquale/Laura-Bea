import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SobreMi } from "./pages/sobre-mi/SobreMi";
import { Trabajos } from "./pages/trabajos/Trabajos";
import { Contacto } from "./pages/contacto/Contacto";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
export function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/sobre-mi" element={<SobreMi />}> </Route>
          <Route exact path="/contacto" element={<Contacto />}> </Route>
          <Route exact path="/trabajos" element={<Trabajos />}>
            <Route exact path="/trabajos/estampados" element={<Trabajos />}> </Route>
            <Route exact path="/trabajos/geometria-zen" element={<Trabajos />}> </Route>
            <Route exact path="/trabajos/pastizal" element={<Trabajos />}> </Route>
            <Route exact path="/trabajos/universo-japon" element={<Trabajos />}> </Route>
          </Route>
          <Route path="/*" element={<Navigate replace={true} to="/" />}>  </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

