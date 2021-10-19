import React, { useEffect, useRef, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import styles from "./CopyBtn.module.css";

function CopyBtn(props) {
  const [changeCopyBtn, setChangeCopyBtn] = useState(false);

  function changeColor() {
    setChangeCopyBtn(true);
  }

  return (
    <CopyToClipboard text={props.text}>
      <button
        className={`${styles.copy} ${changeCopyBtn ? styles.copied : ""} ${
          !changeCopyBtn ? props.btnClass : props.btnCopyClass
        }`}
        onClick={changeColor}
      >
        {changeCopyBtn ? "Copied!" : "Copy"}
      </button>
    </CopyToClipboard>
  );
}

export default CopyBtn;
