import { useMemo, useState, useCallback, useEffect, FC } from "react";
import styles from "./banner-list-mobile.module.scss";
import { Form, Field } from "react-final-form";
import useMediaQuery from "src/utils/useMediaQuery";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import DotsIcon from "images/icons/dots.svg";
import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isOpenRules: boolean;
  setIsOpenRules: (bool: boolean) => void;
}

const BannerListMobile: FC<IProps> = ({ isOpenRules, setIsOpenRules }) => {
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);

  const bannerList = useMemo(
    () => [
      {
        id: 0,
        name: "My banners ads.jpg",
        weight: "50 KB",
        size: "1200x90 px",
        dataUploaded: "May 4, 2023",
        status: "Approved",
      },
      {
        id: 1,
        name: "123sdfd.jpg",
        weight: "32 KB",
        size: "970x90 px",
        dataUploaded: "Apr 12, 2023",
        status: "Waiting",
      },
      {
        id: 2,
        name: "Picture2023-03-03.png",
        weight: "12 KB",
        size: "728x90 px",
        dataUploaded: "Apr 4, 2023",
        status: "Rejected",
      },
      {
        id: 3,
        name: "My banners ads.jpg",
        weight: "55 KB",
        size: "320x600 px",
        dataUploaded: "Feb 7, 2023",
        status: "Approved",
      },
      {
        id: 4,
        name: "70-descuento-desktop-v3 1.png",
        weight: "67 KB",
        size: "320x250 px",
        dataUploaded: "Mar 23, 2023",
        status: "Approved",
      },
    ],
    []
  );

  const categoriesList = useMemo(
    () => [
      {
        id: 0,
        name: "Approved",
      },
      {
        id: 1,
        name: "Waiting",
      },
      {
        id: 2,
        name: "Rejected",
      },
    ],
    []
  );
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isActiveStatus, setIsActiveStatus] = useState("Approved");
  const [isActiveCategoryList, setIsActiveCategoryList] = useState(bannerList);

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

  const handleCheckboxChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    setCheckedItems([]);
    setSelectAllChecked(false);
  }, []);

  const handleCategories = (name) => {
    setIsActiveStatus(name);
    setCheckedItems([]);
    setSelectAllChecked(false);
  };

  useEffect(() => {
    setIsActiveCategoryList(
      bannerList.filter(({ status }) => status === isActiveStatus)
    );
  }, [isActiveStatus]);

  return (
    <>
      <div className={styles.container}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className={styles.form} onSubmit={handleSubmit}>
              {!isMobile && <h3 className={styles.title}>Your banners</h3>}

              <div className={styles.categories}>
                {categoriesList.map(({ id, name }) => {
                  return (
                    <div
                      className={cn(styles.category, {
                        [styles.active]: name === isActiveStatus,
                      })}
                      key={id}
                      onClick={() => handleCategories(name)}
                    >
                      {name}
                    </div>
                  );
                })}
              </div>
              <div className={styles.list}>
                {checkedItems.length > 0 && !selectAllChecked ? (
                  <div className={styles.checkboxMain}>
                    <Field
                      name={`bannerSelectedAll`}
                      type="checkbox"
                      component={Checkbox}
                      onChange={handleSelectAllChange}
                      checked={checkedItems.length > 0}
                      extClassName="blackWhenChecked"
                    >
                      Choosed: {checkedItems.length}
                    </Field>
                  </div>
                ) : (
                  <div className={styles.checkboxMain}>
                    <Field
                      name={`bannerSelectedAll`}
                      type="checkbox"
                      component={Checkbox}
                      onChange={handleSelectAllChange}
                      checked={selectAllChecked}
                      extClassName="blackWhenChecked"
                    >
                      {selectAllChecked
                        ? `Choosed: ${checkedItems.length}`
                        : "Choose all"}
                    </Field>
                  </div>
                )}
                {isActiveCategoryList.map(
                  ({ id, name, weight, size, dataUploaded, status }) => {
                    return (
                      <div className={styles.item} key={id}>
                        <div className={styles.checkbox}>
                          <Field
                            name={`banner${id}`}
                            type="checkbox"
                            component={Checkbox}
                            extClassName="noText"
                            onClick={() => handleCheckboxChange(id)}
                            checked={checkedItems.includes(id)}
                            onChange={() => handleCheckboxChange(id)}
                          ></Field>
                        </div>
                        <div className={styles.info}>
                          <div className={styles.infoItem}>
                            <p className={styles.name}>{name}</p>{" "}
                            <p>{weight}</p>
                          </div>
                          <div className={styles.infoItem}>
                            <p>{size},</p>
                            <p>{dataUploaded}</p>
                          </div>
                        </div>
                        <div className={styles.action}>
                          <DotsIcon />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </form>
          )}
        ></Form>
      </div>
      {isMobile && (
        <div
          className={styles.rullesButton}
          onClick={() => setIsOpenRules(true)}
        >
          Rules and requirements for banner advertising
          <span className={styles.icon}>
            <ArrowIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default BannerListMobile;
