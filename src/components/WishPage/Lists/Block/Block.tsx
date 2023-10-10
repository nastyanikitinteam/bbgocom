import { FC, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./block.module.scss";
import useMediaQuery from "src/utils/useMediaQuery";
import DropMenu from "components/DropMenu/DropMenu";
import Modal from "components/Modal/Modal";
import NewWishList from "components/WishPage/NewWishList/NewWishList";
import Delete from "components/WishPage/Delete/Delete";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import cn from "classnames";

import DelIcon from "images/icons/delete.svg";
import EditIcon from "images/icons/edit.svg";

interface IProps {
  item: any;
}

const Block: FC<IProps> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDel, setIsOpenDel] = useState(false);
  const isMobile = useMediaQuery(768);
  const emptyBlocks = Array(isMobile ? 4 : 3).fill(null);

  const [startDate, setStartDate] = useState(item.update);

  const dropMenuList = useMemo(
    () => [
      {
        id: 0,
        title: "Edit",
        icon: <EditIcon />,
        fn: () => setIsOpenEdit(true),
      },
      {
        id: 1,
        title: "Delete",
        icon: <DelIcon />,
        fn: () => setIsOpenDel(true),
      },
    ],
    []
  );

  const getTimeAgoString = (differenceInSeconds) => {
    let timeAgoString = "";
    if (differenceInSeconds >= 31536000) {
      const years = Math.floor(differenceInSeconds / 31536000);
      timeAgoString = `${years} ${years > 1 ? "years" : "year"}`;
    } else if (differenceInSeconds >= 2592000) {
      const months = Math.floor(differenceInSeconds / 2592000);
      timeAgoString = `${months} ${months > 1 ? "months" : "month"}`;
    } else if (differenceInSeconds >= 86400) {
      const days = Math.floor(differenceInSeconds / 86400);
      timeAgoString = `${days} ${days > 1 ? "days" : "day"}`;
    } else if (differenceInSeconds >= 3600) {
      const hours = Math.floor(differenceInSeconds / 3600);
      timeAgoString = `${hours} ${hours > 1 ? "hours" : "hour"}`;
    } else if (differenceInSeconds >= 60) {
      const minutes = Math.floor(differenceInSeconds / 60);
      timeAgoString = `${minutes} ${minutes > 1 ? "minutes" : "minute"}`;
    } else {
      timeAgoString = `${differenceInSeconds} ${
        differenceInSeconds > 1 ? "seconds" : "second"
      }`;
    }
    return timeAgoString;
  };

  const [timeAgo, setTimeAgo] = useState(null);

  useEffect(() => {
    if (startDate) {
      const date = new Date(startDate * 1000);

      const currentDate = new Date();
      // @ts-ignore
      const differenceInSeconds = Math.floor((currentDate - date) / 1000);

      const timeAgoString = getTimeAgoString(differenceInSeconds);
      setTimeAgo(timeAgoString);
    }
  }, [startDate]);

  return (
    <div className={cn(styles.container, { [styles.hover]: isHover })}>
      <Link
        href={`wishlist/${item.slug}`}
        className={styles.images}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {emptyBlocks.map((_, index) => {
          if (item.items.length > index) {
            return (
              <div key={index} className={styles.image}>
                {item.items[index].images && item.items[index].images[0] && (
                  <img src={item.items[index].images[0].image} alt="" />
                )}
              </div>
            );
          } else {
            return <div key={index} className={styles.image}></div>;
          }
        })}
      </Link>
      <div className={styles.bottom}>
        <div
          className={styles.info}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <h3 className={styles.title}>{item.name}</h3>
          <p className={styles.ads}>{item.items.length} ads</p>
          <p className={styles.date}>Updated {timeAgo} ago</p>
        </div>
        <div className={styles.more}>
          <DropMenu list={dropMenuList} />
        </div>
      </div>
      {isOpenEdit && (
        <Modal
          closeModal={() => setIsOpenEdit(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <NewWishList cancel={() => setIsOpenEdit(false)} item={item} />
        </Modal>
      )}
      {isOpenDel && (
        <Modal
          closeModal={() => setIsOpenDel(false)}
          type="successful"
          otherCloseIcon
          mobileIsBottom
        >
          <Delete cancel={() => setIsOpenDel(false)} item={item} />
        </Modal>
      )}
    </div>
  );
};

export default Block;
