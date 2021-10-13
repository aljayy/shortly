import React from "react";

import styles from "./OverlayMenu.module.css";

function OverlayMenu(props) {
  return (
    <div
      className={`${styles.overlay} ${props.showMenu ? "" : styles.display}`}
      onClick={props.onDisplayMenu}
    >
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
        <div className={styles.btns}>
          <button className={styles.login}>Login</button>
          <button className={styles["sign-up"]}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default OverlayMenu;
