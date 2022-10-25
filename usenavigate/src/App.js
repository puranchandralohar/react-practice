import React from "react";
import { Route, Routes } from "react-router-dom";
import { About} from "./Components/About";
import { Home } from "./Components/Home";
import Contact from "./Components/Contact";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
      </Routes>

    </>
   
   
  );
}

export default App;
