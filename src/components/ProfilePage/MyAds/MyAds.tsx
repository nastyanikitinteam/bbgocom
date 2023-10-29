import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import Card from "./Card/Card";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
// import { productList } from "components/MainPage/Recommend/config";
import NoResult from "./NoResult/NoResults";
import { categorieList, adList } from "./config";
import cn from "classnames";
import styles from "./my-ads.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import DelIcon from "images/icons/delete.svg";

const MyAds = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const [isActiveCategory, setIsActiveCategory] = useState(
    categorieList[0].title
  );

  const [isActiveCategoryList, setIsActiveCategoryList] = useState(
    adList.filter((product) => product.adsList === isActiveCategory)
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
    (title) => {
      setIsActiveCategory(title);
      const filteredList = adList.filter(
        (product) => product.adsList === title
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
    const filteredList = adList.filter((product) => product.adsList === title);
    return filteredList.length;
  }, []);

  return (
    <div className={styles.container}>
      {!isMobile && (
        <div className={styles.categories}>
          {categorieList.map(({ id, title }) => {
            return (
              <div
                className={cn(styles.category, {
                  [styles.active]: isActiveCategory === title,
                })}
                key={id}
                onClick={() => handleCategories(title)}
              >
                {title} ({countList(title)})
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
                  Back
                </div>
                <h3 className={styles.title}>
                  {isShowCategory
                    ? `${isActiveCategory} (${isActiveCategoryList.length})`
                    : "My Ads"}
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
                      {isActiveCategory === "Active" ? "Deactivate" : "Delete"}
                    </button>
                  </div>
                )}
              </div>
            )}
            {isMobile && !isShowCategory && (
              <div className={styles.categories}>
                {categorieList.map(({ id, title }) => {
                  return (
                    <div
                      className={cn(styles.category)}
                      key={id}
                      onClick={() => handleCategories(title)}
                    >
                      <h3>
                        {title} ({countList(title)})
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
                        Selected: {checkedItems.length}
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
                          ? `Selected: ${checkedItems.length}`
                          : isTablet
                          ? "Select all"
                          : "Select all the desired ads from the list to apply the same actions to them"}
                      </Field>
                    </div>
                  )}

                  {checkedItems.length === 0 && (
                    <div className={styles.filter}>
                      <div className={styles.sort}>
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
                      <button
                        type="submit"
                        className={cn(
                          "default-button border sm",
                          styles.button
                        )}
                        aria-label={`Deactivate`}
                      >
                        {isActiveCategory === "Active"
                          ? "Deactivate"
                          : "Delete"}
                      </button>
                    </div>
                  )}
                </div>
                <div className={styles.main}>
                  {isActiveCategoryList.length > 0 ? (
                    isActiveCategoryList.map((item) => {
                      return (
                        <div className={styles.block} key={item.id}>
                          <Card item={item} type={isActiveCategory}>
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
                    <NoResult isActiveCategory={isActiveCategory} />
                  )}
                </div>
              </>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};

export default MyAds;
