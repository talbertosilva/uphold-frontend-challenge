import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <menu className="header-menu">
        <a href="/">
          <li>Personal</li>
        </a>
        <a href="/">
          <li>Business</li>
        </a>
        <a href="/">
          <li>Partners</li>
        </a>
      </menu>
      <a href="https://uphold.com/en-eu" target="_blank" rel="noreferrer">
        <img src="uphold-logo-green.svg" alt="uphold logo"></img>
      </a>
      <div className="button-container">
        <button className="login-button">Log In</button>
      </div>
    </header>
  );
};

export default Header;
