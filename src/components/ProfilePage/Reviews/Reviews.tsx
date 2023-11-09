import { useState } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import Block from "./Block/Block";
import Rating from "./Rating/Rating";
import styles from "./reviews.module.scss";

import ArrowSvg from "images/icons/drop.svg";

import { reviewsList } from "config/profilePage";

const Reviews = () => {
  const [isShowReviews, setIsShowReviews] = useState(3);
  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const handleShowReviews = () => {
    if (isShowReviews + 2 <= reviewsList.length) {
      setIsShowReviews(isShowReviews + 2);
    } else {
      setIsShowReviews(reviewsList.length);
    }
  };

  return (
    <div className={styles.container}>
      {isMobile && (
        <div className={styles.top}>
          <div className="back" onClick={back}>
            <span className="arrow">
              <ArrowSvg />
            </span>
            Back
          </div>
          <h3 className={styles.title}>Reviews</h3>
        </div>
      )}
      <div className={styles.main}>
        <div className={styles.rating}>
          <Rating />
        </div>
        <h3 className={styles.subtitle}>Your reviews</h3>
        {reviewsList.slice(0, isShowReviews).map((item) => {
          return <Block key={item.id} item={item} />;
        })}
        {isMobile && isShowReviews !== reviewsList.length && (
          <div className={styles.more} onClick={handleShowReviews}>
            Show more
            <span className={styles.icon}>
              <ArrowSvg />
            </span>
          </div>
        )}
      </div>
      {!isMobile && isShowReviews !== reviewsList.length && (
        <div className={styles.more} onClick={handleShowReviews}>
          Show more
          <span className={styles.icon}>
            <ArrowSvg />
          </span>
        </div>
      )}
    </div>
  );
};

export default Reviews;
