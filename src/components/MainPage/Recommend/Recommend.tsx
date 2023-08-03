import CardProduct from "components/CardProduct/CardProduct";
import styles from "./recommend.module.scss";
import cn from "classnames";

const Recommend = () => {
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <h2 className={cn("title", styles.title)}>Recommend</h2>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
          <div className={styles.block}>
            <CardProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommend;
