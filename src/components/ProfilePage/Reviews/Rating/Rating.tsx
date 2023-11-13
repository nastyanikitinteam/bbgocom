import { useMemo, useState } from "react";
import styles from "./rating.module.scss";
import cn from "classnames";
import { ratingStatus } from "config/profilePage";
import { useTranslation } from "react-i18next";
import StarIcon from "images/icons/star-rating.svg";

const Rating = () => {
  const [isYourRating, setIsYourRating] = useState(5);
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      {ratingStatus
        .filter(({ rating }) => rating === isYourRating)
        .map(({ rating, icon, title, description }) => {
          return (
            <>
              <div className={styles.icon}>{icon}</div>
              <div className={styles.info}>
                <h3 className={styles.title}>{t(title)}</h3>
                <p className={styles.description}>{t(description)}</p>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={cn(styles.star, {
                        [styles.active]: index < rating,
                      })}
                    >
                      <StarIcon />
                    </span>
                  ))}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Rating;
