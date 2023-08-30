import { FC, ReactNode } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./block.module.scss";
import cn from "classnames";

interface IProps {
  item: any;
  children?: ReactNode;
}

const Block: FC<IProps> = ({ item, children }) => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={cn(styles.container, { [styles.new]: item.isNew })}>
      <div className={styles.checkbox}>{children}</div>
      {isMobile && <p className={styles.date}>{item.date}</p>}
      <div className={styles.avatar}>
        <img src={item.avatar} alt="" />
      </div>
      {isMobile && (
        <div className={styles.info}>
          <h4
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          {item.text && <p className={styles.description}>{item.text}</p>}
        </div>
      )}

      {!isMobile && (
        <div className={styles.info}>
          <h4
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: item.title }}
          />
          {item.text && <p className={styles.description}>{item.text}</p>}
          <p className={styles.date}>{item.date}</p>
        </div>
      )}

      {item.button && (
        <a
          href={item.button.link}
          className={cn("default-button sm", styles.button)}
        >
          {item.button.name}
        </a>
      )}
    </div>
  );
};

export default Block;
