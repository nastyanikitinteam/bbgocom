import { FC, ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import styles from "./card.module.scss";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import { categoriesList } from "config/categoriesList";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import Slider from "components/Slider/Slider";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";

import MapIcon from "images/icons/map-icon.svg";
import EditIcon from "images/icons/edit.svg";
import MessagesIcon from "images/icons/messages-icon.svg";
import CalendarIcon from "images/icons/calendar.svg";
import ViewIcon from "images/icons/eye-open-svgrepo-com.svg";
import ActivateIcon from "images/icons/activate.svg";
import LightningIcon from "images/icons/lightning.svg";

interface IProps {
  item: any;
  children?: ReactNode;
  type: string;
}

const Card: FC<IProps> = ({ item, children, type }) => {
  const isTablet = useMediaQuery(998);
  const router = useRouter();
  const { t } = useTranslation();
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);
  const [isActiveActivateModal, setIsActiveActivateModal] = useState(false);
  const [isCurrency, setIsCurrency] = useState(
    item.currency === "THB" ? "฿" : item.currency === "RUB" ? "₽" : "$"
  );

  const [category, setCategory] = useState({});
  const [subcategory, setSubcategory] = useState({});
  const [subcategoryItem, setSubcategoryItem] = useState({});

  useEffect(() => {
    const selectedCategory = categoriesList.find(
      (cat) => cat.id === item.categoryInfo.category
    );
    if (selectedCategory) {
      setCategory(selectedCategory);
    }
  }, [categoriesList, item.categoryInfo.category]);

  useEffect(() => {
    //@ts-ignore
    if (category.subcategories) {
      // @ts-ignore
      const selectedSubcategory = category.subcategories.find(
        (cat) => cat.id === item.categoryInfo.subcategorie
      );
      if (selectedSubcategory) {
        setSubcategory(selectedSubcategory);
      }
    }
  }, [category]);

  useEffect(() => {
    //@ts-ignore
    if (subcategory.items) {
      // @ts-ignore
      const selectedSubcategoryItem = subcategory.items.find(
        (cat) => cat.id === item.categoryInfo.subcategorieItem
      );
      if (selectedSubcategoryItem) {
        setSubcategoryItem(selectedSubcategoryItem);
      }
    }
  }, [subcategory]);

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
                {category && (
                  //@ts-ignore
                  <p className={styles.mainCategory}>{category.title}</p>
                )}
                {subcategory && (
                  //@ts-ignore
                  <p className={styles.subCategory}>{subcategory.title}</p>
                )}
              </div>
            )}
            <div className={styles.item}>
              <p>
                {t(`selectedad.id`)}: {item.id}
              </p>
              <p>
                {t(`selectedad.views`)}: {item.views}
              </p>
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
                {t(`general.view`)}
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
                {t(`general.activate`)}
              </div>
            )}

            <div
              className={cn(styles.buttons, {
                [styles.other]: router.locale === "ru",
              })}
            >
              <div
                className={cn("default-button border sm", styles.button)}
                onClick={() => setIsActiveDeleteModal(true)}
              >
                {type === "Active"
                  ? t(`general.deactivate`)
                  : t(`general.delete`)}
              </div>
              <Link
                href="/create-an-ad/[slug]"
                as={`/create-an-ad/${item.slug}`}
                className={cn("default-button sm", styles.button)}
              >
                <span className={cn("icon", styles.icon)}>
                  <EditIcon />
                </span>
                {t(`general.edit`)}
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
          <Confirm
            closeModal={() => setIsActiveDeleteModal(false)}
            event={
              type === "Active" ? t(`general.deactivate`) : t(`general.delete`)
            }
            description={`${t(`profile.areYouSure`)} ${
              type === "Active" ? t(`profile.deactivate`) : t(`profile.delete`)
            } ${t(`general.ad`)}? `}
            title={`${
              type === "Active" ? t(`general.deactivate`) : t(`general.delete`)
            } ${t(`general.ad`)}`}
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
          <Confirm
            closeModal={() => setIsActiveActivateModal(false)}
            event={t(`general.activate`)}
            description={t(`profile.confirmActivateAd`)}
            title={`${t(`general.activate`)} ${t(`general.ad`)}`}
            icon={<ActivateIcon />}
            isGreen
          />
        </Modal>
      )}
    </div>
  );
};

export default Card;
