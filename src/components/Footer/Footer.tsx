import { useMemo, useEffect } from "react";

import { footerArray } from "./config";

import styles from "./footer.module.scss";
import qrCode from "images/main/qr-code.png";

const Footer = () => {
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
            <div className="default-button sm">Report a bug</div>
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
