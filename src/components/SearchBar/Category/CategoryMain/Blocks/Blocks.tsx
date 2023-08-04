import { FC } from "react";
import styles from "./blocks.module.scss";

import { categoriesList } from "components/Category/config";

interface IProps {
  isActiveCategrory: number;
}
const Blocks: FC<IProps> = ({ isActiveCategrory }) => {
  return (
    <div className={styles.container}>
      {categoriesList.map(({ id, subcategories }) => {
        if (id === isActiveCategrory && subcategories) {
          return subcategories.map(({ id, title, items }) => {
            return (
              <div key={id} className={styles.block}>
                <h3 className={styles.title}>{title}</h3>
                <ul className={styles.list}>
                  {items.map(({ id, title }) => {
                    return (
                      <li className={styles.item} key={id}>
                        {title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          });
        }
      })}
    </div>
  );
};

export default Blocks;
