import React from "react";
import UrlShortener from "./UrlShortener";

import styles from "./Body.module.css";
import ShortlyDetailCard from "./ShortlyDetailCard";

import GetStartedBtn from "../Header/GetStartedBtn";

function Body() {
  return (
    <div className={styles["body-container"]}>
      <UrlShortener />
      <div className={styles.advanced}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <ShortlyDetailCard />
      <div className={styles.boost}>
        <h2>Boost your links today</h2>
        <GetStartedBtn />
      </div>
    </div>
  );
}

export default Body;
