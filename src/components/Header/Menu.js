import React from "react";
import logo from "../../images/logo.svg";

import styles from "./Menu.module.css";

function Menu() {
  return (
    <div className={styles.menu}>
      <img src={logo} alt="logo" />
      <div className={styles["hamburger-menu"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Menu;
