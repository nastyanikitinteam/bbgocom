import { FC, useState } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import { productLst } from "components/MainPage/Recommend/config";
import styles from "./main.module.scss";
import cn from "classnames";

import HorizonalIcon from "images/icons/typeOfShow-2.svg";
import BlocksIcon from "images/icons/typeOfShow-1.svg";
import ArrowSvg from "images/icons/drop.svg";
interface IProps {
  title: string;
}

const Main: FC<IProps> = ({ title }) => {
  const [isHorizontalShow, setIsHorizontalShow] = useState(false);
  const [dataPrice, setDataPrice] = useState({});
  const [isViewAll, setIsViewAll] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(5);

  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  const handleClickPrice = (key, value) => {
    setDataPrice((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.info}>
        <p className={styles.description}>12,215 units avaliable</p>
        <div className={styles.filter}>
          {!isTablet && (
            <>
              <div
                className={cn(styles.filterButton, {
                  [styles.active]: !isHorizontalShow,
                })}
                onClick={() => setIsHorizontalShow(false)}
              >
                <BlocksIcon />
              </div>
              <div
                className={cn(styles.filterButton, {
                  [styles.active]: isHorizontalShow,
                })}
                onClick={() => setIsHorizontalShow(true)}
              >
                <HorizonalIcon />
              </div>
            </>
          )}

          <div className={styles.sort}>
            <SortBy
              dataPrice={dataPrice}
              handleClickPrice={handleClickPrice}
              withoutLabel
            />
          </div>
        </div>
      </div>
      <div
        className={cn(styles.main, {
          [styles.isHorizontal]: isHorizontalShow,
        })}
      >
        {productLst.map(({ id, name, images, price, oldPrice, location }) => {
          return (
            <div
              className={styles.block}
              key={id}
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <CardProduct
                title={name}
                images={images}
                price={price}
                oldPrice={oldPrice}
                location={location}
                isHorizontal={isHorizontalShow}
              ></CardProduct>
            </div>
          );
        })}
      </div>
      <div
        className={styles.all}
        onClick={() => setIsViewAll((prev) => !prev)}
        data-aos-anchor-placement="center-bottom"
        data-aos="fade"
        data-aos-delay="300"
      >
        {/* {isViewAll ? "Hide latest deals" : "View all latest deals"} */}
        View more
        <span className={cn(styles.icon, { [styles.open]: isViewAll })}>
          <ArrowSvg />
        </span>
      </div>
    </div>
  );
};

export default Main;
