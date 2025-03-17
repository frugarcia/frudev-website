"use client";
import React, { Component } from "react";
import { Link } from "react-scroll";
import dataNavigation from "../../data/navigation.json";
import styles from "./Header.module.css";

class Header extends Component {
  state = {
    burgerBtnClass: "icon-menu",
    menuActive: false,
  };

  handleBurgerMenu = (ev) => {
    this.setState((prevState) => {
      const burgerBtnClass =
        prevState.burgerBtnClass === "icon-menu" ? "icon-cross" : "icon-menu";
      const menuActive = !prevState.menuActive;
      return { burgerBtnClass, menuActive };
    });
  };

  handleLink = (ev) => {
    if (this.state.menuActive) {
      this.handleBurgerMenu();
    }
  };

  render = () => {
    const { menuActive, burgerBtnClass } = this.state;
    return (
      <header className={styles.header}>
        <i
          onClick={this.handleBurgerMenu}
          className={`${burgerBtnClass} ${styles["burger-button"]}`}
          id="burger-button"
        />
        <div className={styles.container}>
          <Link
            activeClass="active"
            to={"app"}
            spy={true}
            smooth={true}
            duration={500}
            onClick={this.handleLink}
          >
            <figure className={styles.figure}>
              <img alt="logo de frudev" src="images/logo.svg" className={styles.img} />
            </figure>
          </Link>
          <nav className={`${styles.menu} ${menuActive ? styles["is-active"] : ""}`}>
            <ul className={styles.ul}>
              {dataNavigation.map((item, idx) => (
                <li key={idx} className={styles.li}>
                  <Link
                    activeClass="active"
                    to={item.path}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={this.handleLink}
                    className={styles.a}
                  >
                    {item.label}
                  </Link>
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