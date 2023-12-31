import { FC, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useMediaQuery from "src/utils/useMediaQuery";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "react-i18next";

import styles from "./hero.module.scss";

interface IProps {
  isCurrentList: any;
}

const Hero: FC<IProps> = ({ isCurrentList }) => {
  const isMobile = useMediaQuery(500);
  const { t } = useTranslation();
  const [isHeroBg, setIsHeroBg] = useState(
    isMobile ? isCurrentList.heroMobileImg : isCurrentList.heroImg
  );

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.home`,
        url: "/",
      },
      {
        id: 0,
        title: isCurrentList.title,
      },
    ],
    [isCurrentList]
  );

  useEffect(() => {
    isMobile
      ? setIsHeroBg(isCurrentList.heroMobileImg)
      : setIsHeroBg(isCurrentList.heroImg);
  }, [isMobile, isCurrentList]);

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div
          className={styles.block}
          style={{
            backgroundImage: `url(${isHeroBg})`,
          }}
          data-aos-anchor-placement="top-bottom"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className={styles.image}>
            <img src={isHeroBg} alt="" />
          </div>
          <div className={styles.button}>
            <Link href="/create-an-ad" className="default-button">
              {t(`general.createButton`)}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
