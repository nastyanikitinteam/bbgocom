import { useMemo } from "react";

import styles from "./footer.module.scss";
import qrCode from "images/main/qr-code.png";

const Footer = () => {
  const footerArray = useMemo(
    () => [
      {
        id: 0,
        title: "For Buyers",
        list: [
          {
            id: 0,
            name: "Security Recommendations",
            link: "",
          },
          {
            id: 1,
            name: "How to leave helpful feedback",
            link: "",
          },
          {
            id: 2,
            name: "Get Support",
            link: "",
          },
          {
            id: 3,
            name: "Help for buyers",
            link: "",
          },
          {
            id: 4,
            name: "About payment and delivery",
            link: "",
          },
        ],
      },
      {
        id: 1,
        title: "For Sellers",
        list: [
          {
            id: 0,
            name: "Site Rules",
            link: "",
          },
          {
            id: 1,
            name: "Advertising",
            link: "",
          },
          {
            id: 2,
            name: "How to start selling on bbgo.com",
            link: "",
          },
          {
            id: 3,
            name: "Rates",
            link: "",
          },
          {
            id: 4,
            name: "Privacy Policy",
            link: "",
          },
        ],
      },
      {
        id: 2,
        title: "About Us",
        list: [
          {
            id: 0,
            name: "About bbgo.com",
            link: "",
          },
          {
            id: 1,
            name: "FAQ",
            link: "",
          },
          {
            id: 2,
            name: "Contact Information",
            link: "",
          },
          {
            id: 3,
            name: "Content legality protection",
            link: "",
          },
          {
            id: 4,
            name: "Partnership",
            link: "",
          },
        ],
      },
    ],
    []
  );

  return (
    <footer className={styles.container}>
      <div className="wrapper">
        <div className={styles.content}>
          {footerArray.map(({ id, title, list }) => {
            return (
              <div className={styles.block} key={id}>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                  {list.map(({ id, name, link }) => {
                    return (
                      <li key={id} className={styles.item}>
                        <a href={link}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className={styles.block}>
            <h3 className={styles.title}>App</h3>
            <p className={styles.text}>
              Scan the QR code to install the mobile app
            </p>
            <div className={styles.qrcode}>
              <img src={qrCode.src} alt="" />
            </div>
          </div>
          <div className={styles.button}>
            <a href="#" className="default-button sm">
              Report a bug
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          Copyright © 2023 BBGO. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
