import React from "react";
import Menu from "./Menu";
import computerImage from "../../images/illustration-working.svg";
import styles from "./Header.module.css";
import GetStartedBtn from "./GetStartedBtn";

function Header() {
  return (
    <header>
      <Menu />
      <div className={styles.img}>
        <img src={computerImage} alt="" className={styles["header-img"]} />
      </div>
      <div className={styles["shortly-description"]}>
        <h2>More than just shorter links</h2>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
      </div>
      <GetStartedBtn />
    </header>
  );
}

export default Header;
