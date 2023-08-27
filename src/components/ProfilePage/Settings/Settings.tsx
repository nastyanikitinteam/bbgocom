import cn from "classnames";
import Block from "./Block/Block";
import styles from "./settings.module.scss";

import { AccountInfo } from "./config";

const Settings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {AccountInfo.map(({ id, title, items }) => {
          return (
            <div className={styles.block} key={id}>
              <Block title={title} items={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
