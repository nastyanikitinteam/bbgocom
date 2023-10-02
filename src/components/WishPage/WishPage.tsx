import { useState, useMemo } from "react";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import Create from "./Create/Create";
import List from "./List/List";
import styles from "./wish-page.module.scss";
import { wishlistArr } from "./List/config";

const WishPage = () => {
  const [isWishList, setIsWishList] = useState(true);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
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
            <BreadCrumbs crumbs={breadCrumbs} />
            <h1 className={styles.title}>
              {isWishList ? "My Wishlists" : "Wishlists"}
            </h1>
            {isWishList ? <List list={wishlistArr} /> : <Create />}
          </div>
        </div>
      </section>
    </>
  );
};

export default WishPage;
