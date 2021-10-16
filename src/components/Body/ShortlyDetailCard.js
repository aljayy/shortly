import React, { Fragment } from "react";

import recognition from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import customize from "../../images/icon-fully-customizable.svg";

import styles from "./ShortlyDetailCard.module.css";

function ShortlyDetailCard(props) {
  const cardDetails = [
    {
      img: recognition,
      title: "Brand Recognition",
      description: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.`,
    },
    {
      img: records,
      title: `Detailed Records`,
      description: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
    },
    {
      img: customize,
      title: `Fully Customizable`,
      description: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    },
  ];

  return (
    <Fragment>
      <div className={styles.line}></div>
      <div className={styles.container}>
        {cardDetails.map((item) => {
          return (
            <div
              className={`${styles["inner-container"]} ${
                item === cardDetails[1] ? styles["second-child"] : ""
              } ${item === cardDetails[2] ? styles["third-child"] : ""}`}
            >
              <div className={styles.card}>
                <div className={styles["img-bg"]}>
                  <img src={item.img} alt="" />
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default ShortlyDetailCard;
