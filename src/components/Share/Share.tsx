import { useMemo, useState, useRef, FC } from "react";
import styles from "./share.module.scss";
import Copy from "./Copy/Copy";
import cn from "classnames";

import { socialsList } from "config/socials";

interface IProps {
  isModal?: boolean;
}

const Share: FC<IProps> = ({ isModal }) => {
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
