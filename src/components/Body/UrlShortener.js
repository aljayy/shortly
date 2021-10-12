import React from "react";

import styles from "./UrlShortener.module.css";

function UrlShortener() {
  return (
    <div className={styles["bg-gray"]}>
      <div className={styles["url-input"]}>
        <form>
          <input placeholder="Shorten a link here..."></input>
          <button className={styles.submit}>Shorten It!</button>
        </form>
      </div>
    </div>
  );
}

export default UrlShortener;
