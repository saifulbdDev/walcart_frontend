import React from "react";
import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import NavBar from "./NavBar";
// import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <TopBar />
        <MiddleBar />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
