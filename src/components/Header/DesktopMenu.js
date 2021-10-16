import React from "react";
import logo from "../../images/logo.svg";
import styles from "./DesktopMenu.module.css";

function DesktopMenu() {
  return (
    <div className={styles.menu}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <ul className={styles["desktop-ul"]}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
      </div>
      <div className={styles.btns}>
        <btn className={styles.login}>Login</btn>
        <btn className={styles.signup}>Sign Up</btn>
      </div>
    </div>
  );
}

export default DesktopMenu;
