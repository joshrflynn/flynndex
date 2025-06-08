import React, { useState } from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <span className="header">
        <HamburgerMenu />
        <span>FlynnDex</span>
      </span>
      <div className="wip" style={{}}>
        THIS SITE IS CURRENTLY A WORK IN PROGRESS
      </div>
    </>
  );
};

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "rotate1" : ""}`}></div>
        <div className={`bar ${isOpen ? "fade" : ""}`}></div>
        <div className={`bar ${isOpen ? "rotate2" : ""}`}></div>
      </div>

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            This site is a UI implementation of{" "}
            <a rel="noreferrer" target="_blank" href="https://www.pokeapi.co">
              PokeAPI.co
            </a>{" "}
            created by Josh Flynn. Thanks to the PokeAPI team for their
            collection of this data.
          </li>
          <li>This is currently in progress and will be updated over time.</li>
          <li>
            This project is to demonstrate API response consumption in a React
            project.
          </li>
          <li>This site is hosted on my own personal Apache web server.</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
