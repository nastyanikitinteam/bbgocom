import { FC } from "react";
import styles from "./item.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
interface IProps {
  item: any;
  isActiveList: number;
  setIsActiveList: (bool: number) => void;
}

const Block: FC<IProps> = ({ item, isActiveList, setIsActiveList }) => {
  const { t } = useTranslation();
  const emptyBlocks = Array(3).fill(null);

  return (
    <div
      className={cn(styles.container, {
        [styles.active]: item.id === isActiveList,
      })}
      onClick={() => setIsActiveList(item.id)}
    >
      <div className={styles.images}>
        {emptyBlocks.map((_, index) => {
          if (item?.items?.length > index) {
            return (
              <div key={index} className={styles.image}>
                {item?.items[index].images && item?.items[index].images[0] && (
                  <img src={item.items[index].images[0].image} alt="" />
                )}
              </div>
            );
          } else {
            return <div key={index} className={styles.image}></div>;
          }
        })}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.ads}>
          {item.items?.length} {t(`wishlist.ads`)}
        </p>
        <p className={styles.date}>
          {t(`general.updated`)} 1 {t(`general.year`)} {t(`general.ago`)}
        </p>
      </div>
      <div className={styles.radio}></div>
    </div>
  );
};

export default Block;
