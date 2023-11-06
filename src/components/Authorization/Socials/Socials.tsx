import React from "react";
import cn from "classnames";

import styles from "./socials.module.scss";

import GoogleIcon from "images/icons/google.svg";
import TelegramIcon from "images/icons/telegram.svg";
import LineIcon from "images/icons/line.svg";

const Socials = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={cn("default-button border", styles.social)}>
        <span className="icon">
          <GoogleIcon />
        </span>
        Google
      </a>
      <a href="#" className={cn("default-button border", styles.social)}>
        <span className="icon">
          <TelegramIcon />
        </span>
        Telegram
      </a>
      <a href="#" className={cn("default-button border", styles.social)}>
        <span className="icon">
          <LineIcon />
        </span>
        Line
      </a>
    </div>
  );
};

export default Socials;
