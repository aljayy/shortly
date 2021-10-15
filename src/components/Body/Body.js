import React, { useEffect, useState } from "react";
import UrlShortener from "./UrlShortener";

import styles from "./Body.module.css";
import ShortlyDetailCard from "./ShortlyDetailCard";

import GetStartedBtn from "../Header/GetStartedBtn";
import ShortenedLinks from "./ShortenedLinks";

function Body() {
  const [newLinks, setNewLinks] = useState([]);

  function updateLinks(data) {
    setNewLinks((prevLinks) => {
      return [...data, ...prevLinks];
    });
  }

  useEffect(() => {
    const data = localStorage.getItem("saved-links");
    if (data) {
      setNewLinks(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saved-links", JSON.stringify(newLinks));
  });

  return (
    <div className={styles["body-container"]}>
      <UrlShortener onLinksHandler={updateLinks} />
      <ShortenedLinks links={newLinks} />
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
