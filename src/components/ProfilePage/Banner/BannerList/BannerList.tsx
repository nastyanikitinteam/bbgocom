import { useMemo, useState, useCallback } from "react";
import styles from "./banner-list.module.scss";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import { bannerList } from "config/profilePage";
import { useTranslation } from "react-i18next";
import DotsIcon from "images/icons/dots.svg";

const BannerList = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const { t } = useTranslation();

  const handleSelectAllChange = () => {
    if (selectAllChecked || checkedItems.length > 0) {
      setCheckedItems([]);
      setSelectAllChecked(false);
    } else {
      const allItemIds = bannerList.map((item) => item.id);
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

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t(`profile.yourBanners`)}</h3>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <table className={styles.table}>
              <thead className={styles.thead}>
                <tr>
                  <th className={styles.subtitle}>
                    <span className={styles.checkbox}>
                      <Field
                        name={`allBannersSelect`}
                        type="checkbox"
                        component={Checkbox}
                        onChange={handleSelectAllChange}
                        checked={checkedItems.length === bannerList.length}
                        extClassName="noText"
                      ></Field>
                    </span>
                  </th>
                  <th className={styles.subtitle}>{t(`profile.fileName`)}</th>
                  <th className={styles.subtitle}>{t(`profile.size`)}</th>
                  <th className={styles.subtitle}>
                    {t(`profile.dataUploaded`)}
                  </th>
                  <th className={styles.subtitle}>{t(`profile.status`)}</th>
                  <th className={styles.subtitle}>{t(`profile.action`)}</th>
                </tr>
              </thead>
              <tbody>
                {bannerList.map(
                  ({ id, name, weight, size, dataUploaded, status }) => {
                    return (
                      <tr className={styles.row} key={id}>
                        <td className={styles.item}>
                          <span className={styles.checkbox}>
                            <Field
                              name={`banner${id}`}
                              type="checkbox"
                              component={Checkbox}
                              extClassName="noText"
                              onClick={() => handleCheckboxChange(id)}
                              checked={checkedItems.includes(id)}
                              onChange={() => handleCheckboxChange(id)}
                            ></Field>
                          </span>
                        </td>
                        <td className={styles.item}>
                          <p className={styles.name}>{name}</p>
                          <p className={styles.weight}>{weight}</p>
                        </td>
                        <td className={styles.item}>{size}</td>
                        <td className={styles.item}>{dataUploaded}</td>
                        <td className={styles.item}>
                          <span
                            className={cn(
                              styles.status,
                              {
                                [styles.waiting]: status.name === "waiting",
                              },
                              {
                                [styles.rejected]: status.name === "rejected",
                              }
                            )}
                          >
                            {t(status.value)}
                          </span>
                        </td>
                        <td className={styles.item}>
                          <span className={styles.action}>
                            <DotsIcon />
                          </span>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </form>
        )}
      ></Form>
    </div>
  );
};

export default BannerList;
