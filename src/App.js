/** @format */

import React, { useState } from "react";

import "./App.css";
import styled from "styled-components";
import FirstSlide from "./Components/Slides/FirstSlide";
import ContactContainer from "./Components/ContactContainer";
import SecondSlide from "./Components/Slides/SecondSlide";
import ThirdSlide from "./Components/Slides/ThirdSlide";
import ContactSlide from "./Components/Slides/ContactSlide";
import Navbar from "./Components/Navbar";

function App() {
  const [isOpen, open] = useState(false);

  const handleNavbar = () => {
    open(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar navbarState={isOpen} handleNavbar={handleNavbar}></Navbar>
      <Hero>
        <FirstSlide></FirstSlide>
        <SecondSlide></SecondSlide>
        <ThirdSlide></ThirdSlide>
        <ContactSlide></ContactSlide>
      </Hero>
      <ContactContainer></ContactContainer>
    </React.Fragment>
  );
}

export default App;

const Hero = styled.div`
  background-color: rgba(23, 23, 23);
`;
