import { useMemo, FC, ReactNode, useState } from "react";
import Link from "next/link";
import styles from "./card.module.scss";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import Slider from "components/Slider/Slider";
import Modal from "components/Modal/Modal";
import DeactivateModal from "../DeactivateModal/DeactivateModal";
import ActivateModal from "../ActivateModal/ActivateModal";

import MapIcon from "images/icons/map-icon.svg";
import EditIcon from "images/icons/edit.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";
import ViewIcon from "images/icons/eye-open-svgrepo-com.svg";
import LightningIcon from "images/icons/lightning.svg";

interface IProps {
  item: any;
  children?: ReactNode;
  type: string;
}

const Card: FC<IProps> = ({ item, children, type }) => {
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
  const [isActiveActivateModal, setIsActiveActivateModal] = useState(false);
  const [isCurrency, setIsCurrency] = useState(
    item.currency === "THB" ? "฿" : item.currency === "RUB" ? "₽" : "$"
  );

  const isTablet = useMediaQuery(998);

  return (
    <div className={styles.container}>
      {!isTablet && <div className={styles.checkbox}>{children}</div>}
      <div className={styles.block}>
        {!isTablet && (
          <div className={styles.image}>
            <div className={styles.photos}>
              <Slider slides={item.images} isCardProduct />
            </div>
          </div>
        )}
        <div className={styles.info}>
          {isTablet && (
            <>
              <div className={styles.top}>
                <div className={styles.checkbox}>{children}</div>
                {isTablet && (
                  <div className={styles.date}>
                    <span className={styles.icon}>
                      <CalendarIcon />
                    </span>
                    {item.date}
                  </div>
                )}
              </div>
              <div className={styles.main}>
                <div className={styles.image}>
                  <img src={item.images[0].image} alt="" />
                </div>
                <div className={styles.description}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.location}>
                    <span className={styles.icon}>
                      <MapIcon />
                    </span>
                    {item.location.name}
                  </div>
                </div>
              </div>
            </>
          )}

          <div className={styles.items}>
            {!isTablet && (
              <div className={styles.item}>
                <p className={styles.mainCategory}>
                  {item.category.nameOfCategory}
                </p>
                <p className={styles.subCategory}>
                  {item.category.nameOfSubCategory}
                </p>
              </div>
            )}
            <div className={styles.item}>
              <p>ID: {item.id}</p>
              <p>Views: {item.views}</p>
            </div>
          </div>

          {!isTablet && (
            <>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.items}>
                <div className={styles.location}>
                  <span className={styles.icon}>
                    <MapIcon />
                  </span>
                  {item.location.name}
                </div>
                <div className={styles.date}>
                  <span className={styles.icon}>
                    <CalendarIcon />
                  </span>
                  {item.date}
                </div>
              </div>
            </>
          )}

          <div className={styles.bottom}>
            <div className={styles.price}>
              {isCurrency} {item.price}
              {item.oldPrice && (
                <span className={styles.old}>
                  {isCurrency}
                  {item.oldPrice}
                </span>
              )}
            </div>
            {type === "Active" && (
              <div className={styles.action}>
                <span className={styles.icon}>
                  <MessagesIcon />
                </span>
                {item.messages}
              </div>
            )}
            {type === "Waiting" && (
              <Link
                href="/selected-ad/[slug]"
                as={`/selected-ad/${item.slug}`}
                className={styles.action}
              >
                <span className={styles.icon}>
                  <ViewIcon />
                </span>
                View
              </Link>
            )}
            {type === "Inactive" && (
              <div
                className={styles.action}
                onClick={() => setIsActiveActivateModal(true)}
              >
                <span className={styles.icon}>
                  <LightningIcon />
                </span>
                Activate
              </div>
            )}

            <div className={styles.buttons}>
              <div
                className={cn("default-button border sm", styles.button)}
                onClick={() => setIsActiveDeleteModal(true)}
              >
                {type === "Active" ? "Deactivate" : "Delete"}
              </div>
              <Link
                href="/create-an-ad/[slug]"
                as={`/create-an-ad/${item.slug}`}
                className={cn("default-button sm", styles.button)}
              >
                <span className={cn("icon", styles.icon)}>
                  <EditIcon />
                </span>
                Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isActiveDeleteModal && (
        <Modal
          closeModal={() => setIsActiveDeleteModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <DeactivateModal
            closeModal={() => setIsActiveDeleteModal(false)}
            type={type}
          />
        </Modal>
      )}
      {isActiveActivateModal && (
        <Modal
          closeModal={() => setIsActiveActivateModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <ActivateModal
            closeModal={() => setIsActiveActivateModal(false)}
            type={type}
          />
        </Modal>
      )}
    </div>
  );
};

export default Card;
