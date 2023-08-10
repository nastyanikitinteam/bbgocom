import styles from "./noresult.module.scss";
import SearchRefraction from "images/icons/search-refraction.svg";

const NoResult = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <SearchRefraction />
      </div>
      <h3 className={styles.subtitle}>You haven't searched yet</h3>
      <p className={styles.text}>Find the products you need</p>
    </div>
  );
};

export default NoResult;
