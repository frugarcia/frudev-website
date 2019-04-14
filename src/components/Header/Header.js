// Dependencies
import React, { Component } from "react";

// Assets
import "./Header.css";
import logo from "../../assets/images/logo.svg";

// Data
import dataNavigation from "../../content/navigation.json";

class Header extends Component {
  state = {
    burgerBtnClass: "icon-menu",
    menuActive: false
  };

  handleBurgerMenu = ev => {
    this.setState(prevState => {
      const burgerBtnClass =
        prevState.burgerBtnClass === "icon-menu" ? "icon-cross" : "icon-menu";
      const menuActive = !prevState.menuActive;
      return { burgerBtnClass, menuActive };
    });
  };

  handleLink = ev => {
    if (this.state.menuActive) {
      this.handleBurgerMenu();
    }
  };

  render = () => {
    const { menuActive, burgerBtnClass } = this.state;
    return (
      <header className="header">
        <i
          onClick={this.handleBurgerMenu}
          className={`${burgerBtnClass} burger-button`}
          id="burger-button"
        />
        <div className="container">
          <figure>
            <a href="/">
              <img alt="logo de frudev" src={logo} />
            </a>
          </figure>

          <nav className={`menu ${menuActive ? "is-active" : ""}`}>
            <ul>
              {dataNavigation.map((item, idx) => (
                <li key={idx}>
                  <a href={item.path} onClick={this.handleLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  };
}

export default Header;
