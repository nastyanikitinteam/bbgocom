import Link from "next/link";
import styles from "./hero.module.scss";
import heroImg from "images/category-page/real-estate-hero.jpg";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className="wrapper">
        <div
          className={styles.block}
          style={{
            backgroundImage: `url(${heroImg.src})`,
          }}
        >
          <div className={styles.button}>
            <Link href="" className="default-button">
              Сreate an Ad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
