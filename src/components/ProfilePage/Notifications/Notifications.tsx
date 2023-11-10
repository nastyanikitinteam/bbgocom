import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import Block from "./Block/Block";
import cn from "classnames";
import styles from "./notifications.module.scss";

import { NotificationsList } from "config/profilePage";
import { useTranslation } from "react-i18next";

import ArrowSvg from "images/icons/drop.svg";

import DelIcon from "images/icons/delete.svg";

const Notifications = () => {
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(4);

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
      const allItemIds = NotificationsList.slice(0, isShowNotification).map(
        (item) => item.id
      );
      setCheckedItems(allItemIds);
      setSelectAllChecked(true);
    }
  };

  const handleShowNotifications = () => {
    if (isShowNotification + 2 <= NotificationsList.length) {
      setIsShowNotification(isShowNotification + 2);
    } else {
      setIsShowNotification(NotificationsList.length);
    }
  };

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
                <h3 className={styles.title}>Notifications</h3>
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
                      Delete
                    </button>
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
                      : "Select all"}
                  </Field>
                </div>
              )}

              {checkedItems.length > 0 && !isMobile && (
                <div className={styles.button}>
                  <button
                    type="submit"
                    className={cn("default-button border sm", styles.button)}
                    aria-label={`Delete`}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className={styles.main}>
              {NotificationsList.slice(0, isShowNotification).map((item) => {
                return (
                  <Block key={item.id} item={item}>
                    <Field
                      name={`notification${item.id}`}
                      type="checkbox"
                      component={Checkbox}
                      extClassName="noText"
                      onClick={() => handleCheckboxChange(item.id)}
                      checked={checkedItems.includes(item.id)}
                    />
                  </Block>
                );
              })}
              {isMobile && isShowNotification !== NotificationsList.length && (
                <div className={styles.more} onClick={handleShowNotifications}>
                  Show more
                  <span className={styles.icon}>
                    <ArrowSvg />
                  </span>
                </div>
              )}
            </div>
            {!isMobile && isShowNotification !== NotificationsList.length && (
              <div className={styles.more} onClick={handleShowNotifications}>
                Show more
                <span className={styles.icon}>
                  <ArrowSvg />
                </span>
              </div>
            )}
          </form>
        )}
      ></Form>
    </div>
  );
};

export default Notifications;
