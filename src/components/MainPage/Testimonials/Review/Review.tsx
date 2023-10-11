import { FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import styles from "./review.module.scss";

import cover from "images/main/card-product.png";

interface IProps {
  info: any;
}

const Review: FC<IProps> = ({ info }) => {
  const isMobile = useMediaQuery(768);
  const card = [
    {
      id: 0,
      title: "Rolex Daytona, 2022+ Daytona 116519 White Gold Black",
      images: [
        {
          id: 0,
          image: cover.src,
        },
        {
          id: 1,
          image: cover.src,
        },
        {
          id: 2,
          image: cover.src,
        },
        {
          id: 3,
          image: cover.src,
        },
      ],
      price: "$35,255.00",
      location: {
        name: "Krung Thep Maha Nakhon, Thailand",
        lat: 13.889370459447255,
        lng: 100.59778134546144,
      },
    },
  ];
  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.product}>
          <CardProduct
            title={info.title}
            images={info.images}
            price={info.price}
            location={info.location}
            isGreenCard
          />
        </div>
      )}

      <div className={styles.main}>
        <p className={styles.text}>{info.review}</p>
        <div className={styles.info}>
          <p className={styles.name}>{info.name}</p>
          <p className={styles.date}>{info.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
