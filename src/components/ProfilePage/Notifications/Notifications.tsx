import { useState, useMemo, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import useMediaQuery from "src/utils/useMediaQuery";
import PortalContainer from "components/PortalContainer/PortalContainer";
import Block from "./Block/Block";
import cn from "classnames";
import styles from "./notifications.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import Avatar1 from "images/profile/notification-avatar1.png";
import Avatar2 from "images/profile/notification-avatar2.png";
import Avatar3 from "images/profile/notification-avatar3.png";
import Avatar4 from "images/profile/notification-avatar4.png";
import DelIcon from "images/icons/delete.svg";

const Notifications = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [isShowNotification, setIsShowNotification] = useState(4);

  const isMobile = useMediaQuery(768);
  const router = useRouter();

  const NotificationsList = useMemo(
    () => [
      {
        id: 0,
        avatar: Avatar1.src,
        title: "<span>Kia Carnival, 2016</span> has fallen in price 🤩",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Go to Ad",
          link: "/",
        },
        isNew: true,
      },
      {
        id: 1,
        avatar: Avatar2.src,
        title:
          "Unfortunately, the Mercedes-Benz C-Class, 2017 has already been sold",
        date: "June 2023, 12:38 PM",
        isNew: true,
      },
      {
        id: 2,
        avatar: Avatar3.src,
        title: "User <span>Julia Wells</span> left a review about you",
        text: "",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Show",
          link: "/",
        },
        isNew: true,
      },
      {
        id: 3,
        avatar: Avatar4.src,
        title: "Update in BBGO",
        text: "We have updated our service and now you have more opportunities to buy and sell",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Show",
          link: "/",
        },
        isNew: false,
      },
      {
        id: 4,
        avatar: Avatar1.src,
        title: "<span>Kia Carnival, 2016</span> has fallen in price 🤩",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Go to Ad",
          link: "/",
        },
        isNew: false,
      },
      {
        id: 5,
        avatar: Avatar2.src,
        title:
          "Unfortunately, the Mercedes-Benz C-Class, 2017 has already been sold",
        date: "June 2023, 12:38 PM",
        isNew: false,
      },
      {
        id: 6,
        avatar: Avatar3.src,
        title: "User <span>Julia Wells</span> left a review about you",
        text: "",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Show",
          link: "/",
        },
        isNew: false,
      },
      {
        id: 7,
        avatar: Avatar4.src,
        title: "Update in BBGO",
        text: "We have updated our service and now you have more opportunities to buy and sell",
        date: "June 2023, 12:38 PM",
        button: {
          name: "Show",
          link: "/",
        },
        isNew: false,
      },
    ],
    []
  );

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
                  Back
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
            </div>
            {isShowNotification !== NotificationsList.length && (
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
