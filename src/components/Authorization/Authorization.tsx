import styles from "./authorization.module.scss";
import Login from "./Login/Login";

import girl from "images/authorization/girl.png";
import bag from "images/authorization/bag.png";
import image1 from "images/authorization/image-1.png";
import image2 from "images/authorization/image-2.png";
import shadow from "images/authorization/login-shadow.png";
import LogoSvg from "images/main/logo.svg";

const Authorization = () => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.logo} data-aos="fade" data-aos-delay="300">
          <LogoSvg />
        </div>
        <div className={styles.girl} data-aos="fade-up" data-aos-delay="300">
          <img src={girl.src} alt="" />
        </div>
        <div className={styles.bag} data-aos="fade-up" data-aos-delay="600">
          <img src={bag.src} alt="" />
        </div>
        <div className={styles.card} data-aos="fade-up" data-aos-delay="500">
          <img src={image1.src} alt="" />
        </div>

        <div
          className={styles.shadow}
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <img src={shadow.src} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.icons} data-aos="fade" data-aos-delay="400">
          <img src={image2.src} alt="" />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Authorization;
