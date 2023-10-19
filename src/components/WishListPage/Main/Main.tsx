import { FC } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import styles from "./main.module.scss";
import cn from "classnames";
import ArrowIcon from "images/icons/drop.svg";
import ShareIcon from "images/icons/share.svg";
import DropMenu from "components/DropMenu/DropMenu";
import MapIcon from "images/icons/map-icon.svg";

interface IProps {
  isOpenFullMap: boolean;
  back: () => void;
  isCurrentList: any;
  setIsOpenShare: () => void;
  setIsOpenMap: () => void;
  dropMenuList: any;
}

const Main: FC<IProps> = ({
  isOpenFullMap,
  back,
  isCurrentList,
  setIsOpenShare,
  dropMenuList,
  setIsOpenMap,
}) => {
  const isMobile = useMediaQuery(768);

  return (
    <div className={cn(styles.container, { [styles.open]: isOpenFullMap })}>
      {!isMobile && (
        <div className={cn(styles.back, "back")} onClick={back}>
          <span className="arrow">
            <ArrowIcon />
          </span>
          Back
        </div>
      )}

      <div className={styles.info}>
        {!isMobile && (
          <div className={styles.top}>
            <h1 className={styles.title}>{isCurrentList.name}</h1>
            <div className={styles.actions}>
              <button className={styles.share} onClick={setIsOpenShare}>
                <ShareIcon />
              </button>
              <DropMenu list={dropMenuList} />
            </div>
          </div>
        )}
        <p className={styles.ads}>
          {isCurrentList.items.length} ads
          {isMobile && (
            <div className={styles.toMap} onClick={setIsOpenMap}>
              <span className={styles.icon}>
                <MapIcon />
              </span>
              To map
            </div>
          )}
        </p>
        {isCurrentList.description && (
          <p className={styles.description}>{isCurrentList.description}</p>
        )}
      </div>
      <div className={styles.list}>
        {isCurrentList.items.map(
          ({ id, name, slug, images, price, oldPrice, location }) => {
            return (
              <div
                className={styles.block}
                key={id}
                data-aos-anchor-placement="top-bottom"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <CardProduct
                  id={id}
                  title={name}
                  slug={slug}
                  images={images}
                  price={price}
                  oldPrice={oldPrice}
                  location={location}
                  isWish={true}
                ></CardProduct>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Main;
