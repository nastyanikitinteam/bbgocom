import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import CardProduct from "components/CardProduct/CardProduct";
import SortBy from "components/SearchBar/Price/PriceMain/SortBy/SortBy";
import Modal from "components/Modal/Modal";
import DeactivateModal from "../MyAds/DeactivateModal/DeactivateModal";
import { productList } from "components/MainPage/Recommend/config";
import cn from "classnames";
import styles from "./reviewed-products.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import DelIcon from "images/icons/delete.svg";
import HorizonalIcon from "images/icons/typeOfShow-2.svg";
import BlocksIcon from "images/icons/typeOfShow-1.svg";

const ReviewedProducts = () => {
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
                  Back
                </div>
                <h3 className={styles.title}>Reviewed products</h3>
                {checkedItems.length > 0 && (
                  <div
                    className={styles.button}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
                    <div className={styles.deleteSelected}>
                      <span className={styles.icon}>
                        <DelIcon />
                      </span>
                      Delete
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
              )}
              {checkedItems.length > 0 && !isMobile && (
                <div className={styles.button}>
                  <div
                    className={cn("default-button border sm", styles.button)}
                    onClick={() => setIsActiveDeleteModal(true)}
                  >
                    Delete
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
          <DeactivateModal
            closeModal={() => setIsActiveDeleteModal(false)}
            event="Delete"
            description="Are you sure you want to delete reviewed products?"
            title="Delete"
          />
        </Modal>
      )}
    </div>
  );
};

export default ReviewedProducts;
