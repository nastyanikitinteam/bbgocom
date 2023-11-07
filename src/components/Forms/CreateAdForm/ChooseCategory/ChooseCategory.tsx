import { FC, useState, useEffect, useRef } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import SelectContainer from "components/FormElements/Select/Select";
import Category from "components/SearchBar/Category/Category";
import CategoryMain from "components/SearchBar/Category/CategoryMain/CategoryMain";
import { Field } from "react-final-form";
import styles from "../steps.module.scss";

import { useFormState } from "react-final-form";

import { dealTypes, salesmanList } from "./config";

import cn from "classnames";

interface IProps {
  dataCategory: any;
  setDataCategory: (arr: any) => void;
  disabled: boolean;
}

const ChooseCategory: FC<IProps> = ({
  dataCategory,
  setDataCategory,
  disabled,
}) => {
  const isMobile = useMediaQuery(768);
  const { values, errors, submitFailed } = useFormState();
  const [isActiveCategory, setIsActiveCategory] = useState(null);
  const categoryContainerRef = useRef(null as null | HTMLDivElement);
  const categoryMenuRef = useRef(null as null | HTMLDivElement);

  const [isOpenCategoryMenu, setIsOpenCategoryMenu] = useState(false);

  const handleClickCategory = (key, value) => {
    setDataCategory((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    const onClick = (e) => {
      if (
        !categoryMenuRef?.current?.contains(e.target) &&
        !categoryContainerRef?.current?.contains(e.target)
      ) {
        setIsOpenCategoryMenu(false);
      }
    };
    !isMobile && document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [isOpenCategoryMenu]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.num}>1</span>Choose category
      </h3>
      <div className={styles.items}>
        <div className={styles.item} ref={categoryContainerRef}>
          <p className={styles.label}>Category</p>
          <div className={styles.input}>
            <Category
              dataCategory={dataCategory}
              handleActive={() => setIsOpenCategoryMenu(!isOpenCategoryMenu)}
              isOpenCategoryMenu={isOpenCategoryMenu}
              isBig
              placeholder="Choose category"
              isCreatePage
              // error={submitFailed && errors.location}
            />
          </div>
        </div>
        <div className={cn(styles.item, { [styles.disabled]: disabled })}>
          <p className={styles.label}>Deal type</p>
          <div className={cn(styles.input)}>
            <Field
              name="dealType"
              //@ts-ignore
              component={SelectContainer}
              options={dealTypes}
              placeholder="Choose deal type"
              classname="dealType big withIcon"
              chooseOption={
                values.dealType &&
                dealTypes.filter((item) => item.value === values.dealType)
              }
            />
          </div>
        </div>
        <div className={cn(styles.item, { [styles.disabled]: disabled })}>
          <p className={styles.label}>Salesman</p>
          <div className={cn(styles.input)}>
            <Field
              name="salesman"
              //@ts-ignore
              component={SelectContainer}
              options={salesmanList}
              placeholder="Choose salesman"
              classname="salesman big withIcon"
              chooseOption={
                values.salesman &&
                salesmanList.filter((item) => item.value === values.salesman)
              }
            />
          </div>
        </div>
        {isOpenCategoryMenu && (
          <div className={styles.categoryMenu} ref={categoryMenuRef}>
            <CategoryMain
              isActiveCategory={isActiveCategory}
              setIsActiveCategory={setIsActiveCategory}
              dataCategory={dataCategory}
              setDataCategory={setDataCategory}
              handleClick={handleClickCategory}
              setIsActiveChoice={() => setIsOpenCategoryMenu(false)}
              isCreatePage
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChooseCategory;
