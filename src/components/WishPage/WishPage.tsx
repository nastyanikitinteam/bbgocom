import { useState, useMemo } from "react";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import useMediaQuery from "src/utils/useMediaQuery";
import Create from "./Create/Create";
import List from "./Lists/List";
import styles from "./wish-page.module.scss";
import { wishlistArr } from "./Lists/config";
import { useTranslation } from "react-i18next";
import PlusIcon from "images/icons/plus.svg";

const WishPage = () => {
  const { t } = useTranslation();
  const [isWishList, setIsWishList] = useState(false);

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
        title: "My Whishlist",
      },
    ],
    []
  );

  return (
    <>
      <section className={styles.section}>
        <div className="wrapper">
          <div className={styles.container}>
            {!isMobile && <BreadCrumbs crumbs={breadCrumbs} />}

            <div className={styles.top}>
              <h1 className={styles.title}>
                {isWishList ? "My Wishlists" : "Wishlists"}
              </h1>
              {isMobile && (
                <a href="#" className={styles.add}>
                  <span className={styles.icon}>
                    <PlusIcon />
                  </span>
                  Add New
                </a>
              )}
            </div>

            {isWishList ? (
              <List list={wishlistArr} />
            ) : (
              <div className={styles.block}>
                <Create setIsWishList={() => setIsWishList(true)} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishPage;
