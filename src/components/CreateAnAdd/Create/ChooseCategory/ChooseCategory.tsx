import { useMemo, FC, useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import SelectContainer from "components/Select/Select";
import FormInput from "components/FormElements/FormInput/FormInput";
import Checkbox from "components/FormElements/Checkbox/Checkbox";
import Category from "components/SearchBar/Category/Category";
import CategoryMain from "components/SearchBar/Category/CategoryMain/CategoryMain";
import styles from "../steps.module.scss";

import cn from "classnames";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
}

const ChooseCategory: FC<IProps> = ({ dataArray, setDataArray }) => {
  const [isActiveCategory, setIsActiveCategory] = useState(null);
  const [dataCategory, setDataCategory] = useState({});
  const [isOpenCategoryMenu, setIsOpenCategoryMenu] = useState(false);

  const dealTypes = useMemo(
    () => [
      {
        value: "Sale",
        label: "Sale",
      },
      {
        value: "Daily Rent",
        label: "Daily Rent",
      },
      {
        value: "Long Rent",
        label: "Long Rent",
      },
    ],
    []
  );
  const salesmanList = useMemo(
    () => [
      {
        value: "Company",
        label: "Company",
      },
      {
        value: "Man",
        label: "Man",
      },
    ],
    []
  );

  const handleClickCategory = (key, value) => {
    setDataCategory((prev) => ({ ...prev, [key]: value }));
  };

  const handleChangeDealType = (value: any) => {
    if (value != null) {
      setDataArray((prev) => ({ ...prev, dealType: value }));
    }
  };
  const handleSalesMan = (value: any) => {
    if (value != null) {
      setDataArray((prev) => ({ ...prev, salesman: value }));
    }
  };

  useEffect(() => {
    setDataArray((prev) => ({ ...prev, category: dataCategory }));
  }, [dataCategory]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.num}>1</span>Choose category
      </h3>
      <div className={styles.items}>
        <div className={styles.item}>
          <p className={styles.label}>Category</p>
          <div className={styles.input}>
            <Category
              dataCategory={dataCategory}
              handleActive={() => setIsOpenCategoryMenu(!isOpenCategoryMenu)}
              isOpenCategoryMenu={isOpenCategoryMenu}
              isBig
              placeholder="Choose category"
            />
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.label}>Deal type</p>
          <div
            className={cn(styles.input, {
              // @ts-ignore
              [styles.disabled]: !dataArray?.category?.nameOfCategoryItem,
            })}
          >
            <SelectContainer
              options={dealTypes}
              classname="dealType big withIcon"
              placeholder="Choose deal type"
              title="Choose deal type"
              onChange={handleChangeDealType}
            />
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.label}>Salesman</p>
          <div
            className={cn(styles.input, {
              // @ts-ignore
              [styles.disabled]: !dataArray.dealType,
            })}
          >
            <SelectContainer
              options={salesmanList}
              classname="salesman big withIcon"
              placeholder="Choose salesman"
              title="Choose salesman"
              onChange={handleSalesMan}
            />
          </div>
        </div>
        {isOpenCategoryMenu && (
          <div className={styles.categoryMenu}>
            <CategoryMain
              isActiveCategory={isActiveCategory}
              setIsActiveCategory={setIsActiveCategory}
              dataCategory={dataCategory}
              setDataCategory={setDataCategory}
              handleClick={handleClickCategory}
              setIsActiveChoice={() => setIsOpenCategoryMenu(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseCategory;
