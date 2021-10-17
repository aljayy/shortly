import React from "react";
import whitelogo from "../../images/white-logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";
import styles from "./Footer.module.css";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={whitelogo} alt="Our Logo" />
      <FooterLinks />
      <div className={styles.social}>
        <div>
          <img src={facebook} alt="Our Facebook Page" />
        </div>
        <div>
          <img src={twitter} alt="Our Twitter Page" />
        </div>
        <div>
          <img src={pinterest} alt="Our Pinterest Page" />
        </div>
        <div>
          <img src={instagram} alt="Our Instagram Page" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
