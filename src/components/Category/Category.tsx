import { FC, useState, useEffect } from "react";
import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./category.module.scss";

interface IProps {
  title: string;
  image: string;
  link: string;
  subcategories: any;
}
const Category: FC<IProps> = ({ title, image, link, subcategories }) => {
  const [isbaseUrl, setIsBaseUrl] = useState("");

  // TODO: 768 in config
  const isMobile = useMediaQuery(768);

  useEffect(() => {
    //TODO: SERVER DOESNT HAVE WINDOW
    setIsBaseUrl(window.location.origin);
  }, []);

  return (
    <div className={styles.container}>
      <Link href={`category/${link}`} className={styles.block}>
        <div className={styles.image}>
          <img src={image} alt="" />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </Link>
      {!isMobile && (
        <div className={styles.items}>
          {subcategories.slice(0, 3).map(({ id, title, slug }) => {
            return (
              <Link
                href={`${isbaseUrl}/categories/${link}/${slug}`}
                key={id}
                className={styles.item}
              >
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
