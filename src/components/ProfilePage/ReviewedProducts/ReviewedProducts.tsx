import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import { productList } from "components/MainPage/Recommend/config";
import { useTranslation } from "react-i18next";
import cn from "classnames";
import styles from "./reviewed-products.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import DelIcon from "images/icons/delete.svg";
import HorizonalIcon from "images/icons/typeOfShow-2.svg";
import BlocksIcon from "images/icons/typeOfShow-1.svg";

const ReviewedProducts = () => {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isHorizontalShow, setIsHorizontalShow] = useState(false);
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);

  const [dataPrice, setDataPrice] = useState({});

  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const back = () => {
    router.back();
  };

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setCheckedItems([]);
    setSelectAllChecked(false);
  }, []);

  const deleteItems = useCallback(() => {
    setIsActiveDeleteModal(false);
    setCheckedItems([]);
    setSelectAllChecked(false);
  }, []);

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const handleSelectAllChange = () => {
    if (selectAllChecked || checkedItems.length > 0) {
      setCheckedItems([]);
      setSelectAllChecked(false);
    } else {
      const allItemIds = productList.map((item) => item.id);
      setCheckedItems(allItemIds);
      setSelectAllChecked(true);
    }
  };

  const handleClickPrice = (key, value) => {
    setDataPrice((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    isTablet && setIsHorizontalShow(false);
  }, [isTablet]);

  return (
    <div className={styles.container}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            {isMobile && (
              <div className={styles.top}>
                <div className="back" onClick={back}>
                  <span className="arrow">
                    <ArrowSvg />
                  </span>
                  {t(`general.back`)}
                </div>
                <h3 className={styles.title}>
                  {t(`profile.reviewedProducts`)}
                </h3>
                {checkedItems.length > 0 && (
                  <div
                    className={styles.button}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
                    <div className={styles.deleteSelected}>
                      <span className={styles.icon}>
                        <DelIcon />
                      </span>
                      {t(`general.delete`)}
                    </div>
                  </div>
                )}
              </div>
            )}
            <div className={styles.info}>
              {checkedItems.length > 0 && !selectAllChecked ? (
                <div className={styles.selected}>
                  <Field
                    name={`notificationSelected`}
                    type="checkbox"
                    component={Checkbox}
                    onChange={handleSelectAllChange}
                    checked={checkedItems.length > 0}
                    extClassName="blackWhenChecked"
                  >
                    {t(`general.selected`)}: {checkedItems.length}
                  </Field>
                </div>
              ) : (
                <div className={styles.selected}>
                  <Field
                    name={`notificationSelectedAll`}
                    type="checkbox"
                    component={Checkbox}
                    onChange={handleSelectAllChange}
                    checked={selectAllChecked}
                    extClassName="blackWhenChecked"
                  >
                    {selectAllChecked
                      ? `${t(`general.selected`)}: ${checkedItems.length}`
                      : isTablet
                      ? t(`general.selectAll`)
                      : t(`profile.selectAllAds`)}
                  </Field>
                </div>
              )}

              {checkedItems.length === 0 && (
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

                  <div
                    className={cn(styles.sort, {
                      [styles.big]: router.locale === "ru",
                    })}
                  >
                    <SortBy
                      dataPrice={dataPrice}
                      handleClickPrice={handleClickPrice}
                      withoutLabel
                    />
                  </div>
                </div>
              )}
              {checkedItems.length > 0 && !isMobile && (
                <div className={styles.button}>
                  <div
                    className={cn("default-button border sm", styles.button)}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
                    {t(`general.delete`)}
                  </div>
                </div>
              )}
            </div>
            <div
              className={cn(styles.main, {
                [styles.isHorizontal]: isHorizontalShow,
              })}
            >
              {productList.map(
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
                        isHorizontal={isHorizontalShow}
                      >
                        <Field
                          name={`notification${id}`}
                          type="checkbox"
                          component={Checkbox}
                          extClassName="noText"
                          onClick={() => handleCheckboxChange(id)}
                          checked={checkedItems.includes(id)}
                        />
                      </CardProduct>
                    </div>
                  );
                }
              )}
            </div>
          </form>
        )}
      ></Form>
      {isActiveDeleteModal && (
        <Modal
          closeModal={() => setIsActiveDeleteModal(false)}
          type="deleteCard"
          otherCloseIcon
          mobileIsBottom
        >
          <Confirm
            closeModal={deleteItems}
            event={t(`general.delete`)}
            description={t(`profile.confirmDeleteReviewedProducts`)}
            title={t(`general.delete`)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ReviewedProducts;
