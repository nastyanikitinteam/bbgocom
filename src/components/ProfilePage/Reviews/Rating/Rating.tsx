import { useMemo, useState } from "react";
import styles from "./rating.module.scss";
import cn from "classnames";

import BadIcon from "images/profile/Bad.svg";
import AcceptableIcon from "images/profile/Acceptable.svg";
import NormalIcon from "images/profile/Normal.svg";
import GoodIcon from "images/profile/Good.svg";
import ExcellentIcon from "images/profile/Excellent.svg";
import StarIcon from "images/icons/star-rating.svg";

const Rating = () => {
  const [isYourRating, setIsYourRating] = useState(5);

  const ratingStatus = useMemo(
    () => [
      {
        rating: 1,
        icon: <BadIcon />,
        title: "Bad",
        description: "This author has received many bad reviews",
      },
      {
        rating: 2,
        icon: <AcceptableIcon />,
        title: "Acceptable",
        description: "This author has received many acceptable reviews",
      },
      {
        rating: 3,
        icon: <NormalIcon />,
        title: "Normal",
        description: "This author has received many normal reviews",
      },
      {
        rating: 4,
        icon: <GoodIcon />,
        title: "Good",
        description: "This author has received many good reviews",
      },
      {
        rating: 5,
        icon: <ExcellentIcon />,
        title: "Excellent",
        description: "This author has received many excellent reviews",
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      {ratingStatus
        .filter(({ rating }) => rating === isYourRating)
        .map(({ rating, icon, title, description }) => {
          return (
            <>
              <div className={styles.icon}>{icon}</div>
              <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
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
