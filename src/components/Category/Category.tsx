import { FC } from "react";
import Link from "next/link";
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
      <Link href={link} className={styles.block}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      {!isMobile && (
        <div className={styles.items}>
          {items.map(({ id, title, link }) => {
            return (
              <Link href={link} key={id} className={styles.item}>
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Category;
