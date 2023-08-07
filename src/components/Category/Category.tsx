import { FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./category.module.scss";

interface IProps {
  title: string;
  image: string;
  link: string;
  items: any;
}
const Category: FC<IProps> = ({ title, image, link, items }) => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={styles.container}>
      <a href={link} className={styles.block}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </a>

      {!isMobile && (
        <div className={styles.items}>
          {items.map(({ id, title, link }) => {
            return (
              <a href={link} key={id} className={styles.item}>
                {title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
