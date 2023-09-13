import { useMemo, useState, useCallback } from "react";
import styles from "./banner-list.module.scss";
import { Form, Field } from "react-final-form";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import cn from "classnames";

import DotsIcon from "images/icons/dots.svg";

const BannerList = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

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
      <h3 className={styles.title}>Your banners</h3>
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
                  <th className={styles.subtitle}>File name</th>
                  <th className={styles.subtitle}>Size</th>
                  <th className={styles.subtitle}>Data uploaded</th>
                  <th className={styles.subtitle}>Status</th>
                  <th className={styles.subtitle}>Action</th>
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
                                [styles.waiting]: status === "Waiting",
                              },
                              {
                                [styles.rejected]: status === "Rejected",
                              }
                            )}
                          >
                            {status}
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
