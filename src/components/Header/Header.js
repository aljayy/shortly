import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";
import computerImage from "../../images/illustration-working.svg";
import styles from "./Header.module.css";
import GetStartedBtn from "./GetStartedBtn";
import OverlayMenu from "./OverlayMenu";
import DesktopMenu from "./DesktopMenu";

function Header() {
  const [viewMenu, setViewMenu] = useState(false);
  const laptop = useMediaQuery({ query: "(min-width: 1440px)" });
  const mobile = useMediaQuery({ query: "(min-width: 375px " });

  function displayMenu() {
    setViewMenu((prevMenu) => {
      return !prevMenu;
    });
  }

  return (
    <header>
      {mobile && !laptop && <Menu onDisplayMenu={displayMenu} />}
      {laptop && <DesktopMenu />}
      <OverlayMenu showMenu={viewMenu} onDisplayMenu={displayMenu} />
      <div className={styles["desktop-layout"]}>
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
        <GetStartedBtn className={styles["btn-desktop"]} />
      </div>
    </header>
  );
}

export default Header;
