import { useState, useMemo } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import Block from "./Block/Block";
import Rating from "./Rating/Rating";
import cn from "classnames";
import styles from "./reviews.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import Avatar1 from "images/profile/avatar2.png";
import Avatar2 from "images/profile/avatar3.png";
import Avatar3 from "images/profile/notification-avatar3.png";

const Reviews = () => {
  const [isShowReviews, setIsShowReviews] = useState(3);

  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const ReviewsList = useMemo(
    () => [
      {
        id: 0,
        avatar: Avatar1.src,
        name: "Darla",
        text: "“Nice place! Very nice host! We'll come again!”",
        date: "August 2022",
        rating: 3,
      },
      {
        id: 1,
        avatar: Avatar2.src,
        name: "Maria",
        text: "“Great nature getaway, nice hosts and a very atmospheric house. thank you and recommend🙂”",
        date: "July 2022",
        rating: 2,
      },
      {
        id: 2,
        avatar: Avatar3.src,
        name: "Alessandro",
        text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
        date: "August 2022",
        rating: 1,
      },
      {
        id: 3,
        avatar: Avatar3.src,
        name: "Daniela",
        text: "“It was very restful and quiet and cool at night. Felix and his parents were very helpful and accommodating”",
        date: "August 2022",
        rating: 5,
      },
      {
        id: 4,
        avatar: Avatar1.src,
        name: "Alessandro",
        text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
        date: "August 2022",
        rating: 1,
      },
      {
        id: 5,
        avatar: Avatar2.src,
        name: "Darla",
        text: "“Nice place! Very nice host! We'll come again!”",
        date: "August 2022",
        rating: 3,
      },
      {
        id: 6,
        avatar: Avatar3.src,
        name: "Alessandro",
        text: "“Felix is a wonderful person, helpful, welcoming and has recommended many places to visit and restaurants. House near the center and very clean. Easy self check-in. I absolutely recommend the place”",
        date: "August 2022",
        rating: 1,
      },
      {
        id: 7,
        avatar: Avatar3.src,
        name: "Maria",
        text: "“Great nature getaway, nice hosts and a very atmospheric house. thank you and recommend🙂”",
        date: "July 2022",
        rating: 2,
      },
    ],
    []
  );

  const back = () => {
    router.back();
  };

  const handleShowReviews = () => {
    if (isShowReviews + 2 <= ReviewsList.length) {
      setIsShowReviews(isShowReviews + 2);
    } else {
      setIsShowReviews(ReviewsList.length);
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
        {ReviewsList.slice(0, isShowReviews).map((item) => {
          return <Block key={item.id} item={item} />;
        })}
      </div>
      {isShowReviews !== ReviewsList.length && (
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
