import { FC, ReactNode } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./block.module.scss";
import cn from "classnames";

import StarIcon from "images/icons/star-rating.svg";

interface IProps {
  item: any;
  children?: ReactNode;
}

const Block: FC<IProps> = ({ item, children }) => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.container}>
      <p className={styles.text}>{item.text}</p>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <img src={item.avatar} alt="" />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.date}>{item.date}</p>
        </div>
        <div className={styles.rating}>
          {Array.from({ length: 5 }, (_, index) => (
            <span
              key={index}
              className={cn(styles.star, {
                [styles.active]: index < item.rating,
              })}
            >
              <StarIcon />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Block;
