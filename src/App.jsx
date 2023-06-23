// todo learn gradient in css

import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Contact,
  About,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary">
          <div className="bg-cover bg-no-repeat bg-center bg-hero-pattern">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
