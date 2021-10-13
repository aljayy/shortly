import React, { useState } from "react";
import Menu from "./Menu";
import computerImage from "../../images/illustration-working.svg";
import styles from "./Header.module.css";
import GetStartedBtn from "./GetStartedBtn";
import OverlayMenu from "./OverlayMenu";

function Header() {
  const [viewMenu, setViewMenu] = useState(false);

  function displayMenu() {
    setViewMenu((prevMenu) => {
      return !prevMenu;
    });
  }

  return (
    <header>
      <Menu onDisplayMenu={displayMenu} />
      <OverlayMenu showMenu={viewMenu} onDisplayMenu={displayMenu} />
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
