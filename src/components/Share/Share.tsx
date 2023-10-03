import { useMemo, useState, useRef, FC } from "react";
import styles from "./share.module.scss";
import Copy from "./Copy/Copy";
import cn from "classnames";

import Facebook from "images/icons/social-facebook.svg";
import Instagram from "images/icons/social-instagram.svg";
import Line from "images/icons/social-line.svg";
import Telegram from "images/icons/social-telegram.svg";
import Twitter from "images/icons/social-twitter.svg";
import Whatsapp from "images/icons/social-whatsapp.svg";

interface IProps {
  isModal?: boolean;
}

const Share: FC<IProps> = ({ isModal }) => {
  const socialsList = useMemo(
    () => [
      {
        id: 0,
        icon: <Facebook />,
      },
      {
        id: 1,
        icon: <Instagram />,
      },
      {
        id: 2,
        icon: <Whatsapp />,
      },
      {
        id: 3,
        icon: <Telegram />,
      },
      {
        id: 4,
        icon: <Twitter />,
      },
      {
        id: 5,
        icon: <Line />,
      },
    ],
    []
  );

  return (
    <div className={cn(styles.container, { [styles.isModal]: isModal })}>
      <h4 className={styles.title}>Share with</h4>
      <div className={styles.socials}>
        {socialsList.map(({ id, icon }) => {
          return (
            <a href="" className={styles.social} key={id}>
              {icon}
            </a>
          );
        })}
      </div>
      <div className={styles.item}>
        <Copy />
      </div>
    </div>
  );
};

export default Share;
