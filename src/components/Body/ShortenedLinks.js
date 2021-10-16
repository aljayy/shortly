import React, { Fragment, useEffect, useState } from "react";

import CopyBtn from "./CopyBtn";

import styles from "./ShortenedLinks.module.css";

{
  // <p className={styles["original-link"]}>{props.links[0]}</p>
  /* <p className={styles["shortened-link"]}>{props.links[1]}</p>; */
}

function ShortenedLinks(props) {
  const [changeCopyBtn, setChangeCopyBtn] = useState(false);

  function changeColor() {
    setChangeCopyBtn(true);
  }

  return (
    <Fragment>
      {props.links.map((item) => {
        return (
          <Fragment>
            <div
              className={`${styles.card} ${
                props.links.length < 1 ? styles.display : ""
              }`}
              key={item.key}
            >
              <p className={styles["original-link"]}>{item.originalLink}</p>
              <div className={styles["desktop-container"]}>
                <p className={styles["shortened-link"]}>{item.shortLink}</p>
                <div className={styles["button-container"]}>
                  <CopyBtn
                    onChangeColor={changeColor}
                    text={item.shortLink}
                    class={styles.btn}
                  />
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default ShortenedLinks;
