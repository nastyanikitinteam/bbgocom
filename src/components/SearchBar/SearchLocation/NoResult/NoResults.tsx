import { FC } from "react";
import styles from "./noresult.module.scss";
import SearchRefraction from "images/icons/search-refraction.svg";

interface IProps {
  title?: string;
  description?: string;
}

const NoResult: FC<IProps> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <SearchRefraction />
      </div>
      <h3 className={styles.subtitle}> {title}</h3>
      {description && <p className={styles.text}> {description}</p>}
    </div>
  );
};

export default NoResult;
