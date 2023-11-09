import React from "react";
import cn from "classnames";

import styles from "./socials.module.scss";

import SMSIcon from "images/icons/sms.svg";
import WhatAppIcon from "images/icons/whatsapp.svg";
import CallIcon from "images/icons/call.svg";

const SocialsConfirm = () => {
  return (
    <div className={styles.container}>
      <a href="#" className={cn("default-button border", styles.social)}>
        <span className="icon">
          <SMSIcon />
        </span>
        SMS
      </a>
      <a
        href="#"
        className={cn("default-button border", styles.social, styles.whatsapp)}
      >
        <span className="icon">
          <WhatAppIcon />
        </span>
        WhatsApp
      </a>
      <a href="#" className={cn("default-button border", styles.social)}>
        <span className="icon">
          <CallIcon />
        </span>
        Call
      </a>
    </div>
  );
};

export default SocialsConfirm;
