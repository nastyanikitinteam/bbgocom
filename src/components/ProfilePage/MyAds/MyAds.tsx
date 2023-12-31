import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import Card from "./Card/Card";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import NoResult from "./NoResult/NoResults";

import { categorieList, adsList } from "config/adsList";
import { useTranslation } from "react-i18next";
import Modal from "components/Modal/Modal";
import Confirm from "components/Modal/Confirm/Confirm";
import cn from "classnames";
import styles from "./my-ads.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import DelIcon from "images/icons/delete.svg";

const MyAds = () => {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isActiveDeleteModal, setIsActiveDeleteModal] = useState(false);

  const [isActiveCategory, setIsActiveCategory] = useState(categorieList[0]);

  const [isActiveCategoryList, setIsActiveCategoryList] = useState(
    adsList.filter((product) => product.adsList === isActiveCategory.title)
  );

  const [isShowCategory, setIsShowCategory] = useState(false);

  const [dataPrice, setDataPrice] = useState({});

  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const back = () => {
    if (isShowCategory) {
      setIsShowCategory(false);
      setCheckedItems([]);
      setSelectAllChecked(false);
    } else {
      router.back();
    }
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
      const allItemIds = isActiveCategoryList.map((item) => item.id);
      setCheckedItems(allItemIds);
      setSelectAllChecked(true);
    }
  };

  const handleClickPrice = (key, value) => {
    setDataPrice((prev) => ({ ...prev, [key]: value }));
  };

  const handleCategories = useCallback(
    (item) => {
      setIsActiveCategory(item);
      const filteredList = adsList.filter(
        (product) => product.adsList === item.title
      );
      setIsActiveCategoryList(filteredList);
      setCheckedItems([]);
      setSelectAllChecked(false);
      if (isMobile) {
        setIsShowCategory(true);
      }
    },
    [isMobile]
  );

  const countList = useCallback((title) => {
    const filteredList = adsList.filter((product) => product.adsList === title);
    return filteredList.length;
  }, []);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.categories}>
          {categorieList.map((item) => {
            return (
              <div
                className={cn(
                  styles.category,
                  {
                    [styles.active]: isActiveCategory.title === item.title,
                  },
                  { [styles.rus]: router.locale === "ru" }
                )}
                key={item.id}
                onClick={() => handleCategories(item)}
              >
                {t(item.name)} <span>({countList(item.title)})</span>
              </div>
            );
          })}
        </div>
      )}
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
                  {isShowCategory
                    ? `${t(isActiveCategory.name)} (${
                        isActiveCategoryList.length
                      })`
                    : t(`profile.myAdsSecond`)}
                </h3>
                {checkedItems.length > 0 && (
                  <div className={styles.button}>
                    <button
                      type="submit"
                      className={styles.deleteSelected}
                      aria-label={`Delete`}
                    >
                      <span className={styles.icon}>
                        <DelIcon />
                      </span>
                      {/* {isActiveCategory.title === "Active"
                        ? t(`general.deactivate`)
                        : t(`general.delete`)} */}
                    </button>
                  </div>
                )}
              </div>
            )}
            {isMobile && !isShowCategory && (
              <div className={styles.categories}>
                {categorieList.map((item) => {
                  return (
                    <div
                      className={cn(styles.category)}
                      key={item.id}
                      onClick={() => handleCategories(item)}
                    >
                      <h3>
                        {t(item.name)} ({countList(item.title)})
                      </h3>
                      <span className={styles.arrow}>
                        <ArrowSvg />
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {(!isMobile || (isMobile && isShowCategory)) && (
              <>
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
                        className={cn(
                          "default-button border sm",
                          styles.button
                        )}
                        onClick={() => setIsActiveDeleteModal(true)}
                      >
                        {isActiveCategory.title === "Active"
                          ? t(`general.deactivate`)
                          : t(`general.delete`)}
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.main}>
                  {isActiveCategoryList.length > 0 ? (
                    isActiveCategoryList.map((item) => {
                      return (
                        <div className={styles.block} key={item.id}>
                          <Card item={item} type={isActiveCategory.title}>
                            <Field
                              name={`notification${item.id}`}
                              type="checkbox"
                              component={Checkbox}
                              extClassName="noText"
                              onClick={() => handleCheckboxChange(item.id)}
                              checked={checkedItems.includes(item.id)}
                            />
                          </Card>
                        </div>
                      );
                    })
                  ) : (
                    <NoResult isActiveCategory={isActiveCategory.title} />
                  )}
                </div>
              </>
            )}
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
            event={
              isActiveCategory.title === "Active"
                ? t(`general.deactivate`)
                : t(`general.delete`)
            }
            description={`${t(`profile.areYouSure`)} ${
              isActiveCategory.title === "Active"
                ? t(`profile.deactivate`)
                : t(`profile.delete`)
            } ${t(`profile.ads`)}? `}
            title={`${
              isActiveCategory.title === "Active"
                ? t(`general.deactivate`)
                : t(`general.delete`)
            } ${t(`profile.ads`)}`}
          />
        </Modal>
      )}
    </div>
  );
};

export default MyAds;
