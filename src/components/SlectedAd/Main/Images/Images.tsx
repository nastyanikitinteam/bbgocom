import { FC, useCallback, useEffect, useState } from "react";
import styles from "./images.module.scss";
import ShareModal from "../../ShareModal/ShareModal";
import AddToWishList from "components/WishPage/AddToWishList/AddToWishList";
import Modal from "components/Modal/Modal";
import cn from "classnames";

import StarIcon from "images/icons/star.svg";
import ShareIcon from "images/icons/share.svg";
import MapIcon from "images/icons/map-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";

interface IProps {
  isCurrentProduct: any;
}

const Images: FC<IProps> = ({ isCurrentProduct }) => {
  return <></>;
};

export default Images;
