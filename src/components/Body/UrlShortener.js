import React, { useEffect, useRef, useState } from "react";

import styles from "./UrlShortener.module.css";

function UrlShortener(props) {
  const inputRef = useRef("");
  const [error, setError] = useState(false);

  function preventDefault(e) {
    e.preventDefault();
  }

  function callFunctions() {
    errorCheck();
    shortenLink();
  }

  function errorCheck() {
    console.log("ERROR FUNCTION");
    if (inputRef.current.value.length < 1) {
      setError(true);
    } else setError(false);
  }

  async function shortenLink() {
    console.log("SHORTEN FUNCTION");
    if (error) return;

    const link = inputRef.current.value;
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${link}`
    );
    const data = await response.json();

    console.log(data);

    let loadedData = [];
    let originalLink = {};
    let shortLink = {};
    for (const key in data.result) {
      if (key === "full_short_link") {
        shortLink = { shortLink: data.result[key] };
      } else if (key === "original_link") {
        originalLink = { originalLink: data.result[key], ...loadedData };
      }
    }

    console.log(shortLink, originalLink);
    loadedData = [
      { ...originalLink, ...shortLink, key: Math.random().toString() },
    ];
    console.log(loadedData);
    props.onLinksHandler(loadedData);
    inputRef.current.value = "";
  }

  return (
    <div className={styles["bg-gray"]}>
      <div
        className={`${styles["url-input"]} ${error ? styles.placeholder : ""}`}
      >
        <form onSubmit={preventDefault}>
          <input placeholder="Shorten a link here..." ref={inputRef}></input>
          <p className={`${styles.error} ${!error ? styles.display : ""}`}>
            Please add a link!
          </p>
          <button className={styles.submit} onClick={callFunctions}>
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  );
}

export default UrlShortener;
