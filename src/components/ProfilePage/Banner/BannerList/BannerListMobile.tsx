import { useMemo, useState, useCallback, useEffect, FC } from "react";
import styles from "./banner-list-mobile.module.scss";
import { Form, Field } from "react-final-form";
import useMediaQuery from "src/utils/useMediaQuery";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import { bannerList, bannersCategories } from "config/profilePage";
import { useTranslation } from "react-i18next";
import DotsIcon from "images/icons/dots.svg";
import ArrowIcon from "images/icons/drop.svg";

interface IProps {
  isOpenRules: boolean;
  setIsOpenRules: (bool: boolean) => void;
}

const BannerListMobile: FC<IProps> = ({ isOpenRules, setIsOpenRules }) => {
  const isTablet = useMediaQuery(998);
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isActiveStatus, setIsActiveStatus] = useState("approved");
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
      bannerList.filter(({ status }) => status.name === isActiveStatus)
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
                {bannersCategories.map(({ id, name, value }) => {
                  return (
                    <div
                      className={cn(styles.category, {
                        [styles.active]: name === isActiveStatus,
                      })}
                      key={id}
                      onClick={() => handleCategories(name)}
                    >
                      {t(value)}
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
                      {t("profile.choosed")}: {checkedItems.length}
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
                        ? `${t("profile.choosed")}: ${checkedItems.length}`
                        : t(`profile.chooseAll`)}
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
          {t(`rules.rulesAndRequirements`)}
          <span className={styles.icon}>
            <ArrowIcon />
          </span>
        </div>
      )}
    </>
  );
};

export default BannerListMobile;
