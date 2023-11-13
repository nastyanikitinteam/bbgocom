import React, { FC, useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Head from "next/head";
import { scrollSpy } from "react-scroll";
import useMediaQuery from "src/utils/useMediaQuery";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Info from "../Info/Info";
import cn from "classnames";
import { useTranslation, Trans } from "react-i18next";

import styles from "./layout.module.scss";

interface IProps {
  title: string;
  list?: any;
  infoContent?: any;
  isBlocktype?: boolean;
  isUserArgeement?: boolean;
}

const Layout: FC<IProps> = ({
  title = "Page",
  list,
  infoContent,
  isBlocktype,
  isUserArgeement,
}) => {
  const { t } = useTranslation();
  const [isActiveRules, setIsActiveRules] = useState(null);
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: `general.home`,
        url: "/",
      },
      {
        id: 0,
        title: title,
      },
    ],
    []
  );

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const blockRefs = list.map((_, id) =>
      document.getElementById(`section${id}`)
    );

    let activeBlockId = null;

    for (let i = 0; i < blockRefs.length; i++) {
      const block = blockRefs[i];
      if (block) {
        const blockTop = block.getBoundingClientRect().top + scrollY;
        const blockBottom = block.getBoundingClientRect().bottom + scrollY;
        if (scrollY >= blockTop - 100 && scrollY < blockBottom - 100) {
          activeBlockId = i;
          break;
        }
      }
    }
    setIsActiveRules(activeBlockId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles["app"]}>
      <Head>
        <title>{t(title)}</title>
      </Head>
      {!isMobile && <Header withoutSearchBar />}

      <div className={styles.container}>
        <div className="wrapper">
          <BreadCrumbs crumbs={breadCrumbs} />
          <h1 className={styles.title}>{t(title)}</h1>
          <div className={styles.content}>
            {isTablet && <Info content={infoContent} />}
            <div
              className={cn(styles.info, { [styles.blocksType]: isBlocktype })}
            >
              <ul className={styles.list}>
                {list.map((item, id) => (
                  <li
                    key={id}
                    className={cn({
                      [styles.active]: id === isActiveRules,
                    })}
                  >
                    <Link href={`#section${id}`}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.main}>
              {!isTablet && <Info content={infoContent} />}
              {isBlocktype ? (
                <div className={styles.blocks}>
                  {list.map((item, id) => {
                    return (
                      <div
                        id={`section${id}`}
                        className={styles.block}
                        key={id}
                      >
                        <div className={styles.blockContent}>
                          <div className={styles.cover}>
                            <img src={item.content.cover} alt="" />
                          </div>
                          <div className={styles.blockInfo}>
                            <h3>{item.title}</h3>
                            <p className={styles.text}>{item.content.text} </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.sections}>
                  {isUserArgeement && (
                    <>
                      <p>
                        <b>{t("rules.documentOffer")}</b>
                      </p>
                      <p>
                        <b>
                          <Trans
                            i18nKey={"rules.offerTerms"}
                            components={[<Link href="/" />]}
                          />
                        </b>
                      </p>
                    </>
                  )}
                  {list.map((item, id) => {
                    return (
                      <div
                        id={`section${id}`}
                        className={styles.block}
                        key={id}
                      >
                        <div className={styles.blockContent}>
                          <h3>
                            {id + 1}. {item.title}
                          </h3>
                          <div
                            dangerouslySetInnerHTML={{ __html: item.content }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              {isUserArgeement && (
                <div className={styles.argeementBlock}>
                  {t("rules.concludedAgreement")}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
