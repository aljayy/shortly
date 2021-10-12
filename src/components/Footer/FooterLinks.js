import React from "react";
import styles from "./FooterLinks.module.css";

function FooterLinks() {
  const links = [
    {
      title: "Features",
      links: ["Link Shortening", "Branded Links", "Analytics"],
    },
    {
      title: "Resources",
      links: ["Blog", "Developers", "Support"],
    },
    {
      title: "Company",
      links: ["About", "Our Team", "Careers", "Contact"],
    },
  ];

  return links.map((item) => {
    return (
      <ul className={styles.container}>
        <h4>{item.title}</h4>
        {item.links.map((link) => {
          return (
            <li>
              <a href="#">{link}</a>
            </li>
          );
        })}
      </ul>
    );
  });
}

export default FooterLinks;
