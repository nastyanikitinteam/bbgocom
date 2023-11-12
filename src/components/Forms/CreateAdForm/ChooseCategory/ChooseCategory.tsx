import { FC, useState, useEffect, useRef } from "react";
import useMediaQuery from "src/utils/useMediaQuery";
import SelectContainer from "components/FormElements/Select/Select";
import Category from "components/SearchBar/Category/Category";
import CategoryMain from "components/SearchBar/Category/CategoryMain/CategoryMain";
import { Field } from "react-final-form";
import styles from "../steps.module.scss";
import { useTranslation } from "react-i18next";
import { useFormState } from "react-final-form";

import { dealTypes, salesmanList } from "./config";

import cn from "classnames";

interface IProps {
  dataCategory: any;
  setDataCategory: (arr: any) => void;
  setIsRestartForm: (bol: boolean) => void;
  disabled: boolean;
  isRestartForm?: boolean;
}

const ChooseCategory: FC<IProps> = ({
  dataCategory,
  setDataCategory,
  setIsRestartForm,
  disabled,
  isRestartForm,
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(768);
  const { values, pristine } = useFormState();
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

  useEffect(() => {
    pristine && !dataCategory
      ? setIsRestartForm(true)
      : setIsRestartForm(false);
  }, [pristine]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <span className={styles.num}>1</span>
        {t(`createad.chooseCategory`)}
      </h3>
      <div className={styles.items}>
        <div className={styles.item} ref={categoryContainerRef}>
          <p className={styles.label}>{t(`createad.category`)}</p>
          <div className={styles.input}>
            <Category
              dataCategory={dataCategory}
              handleActive={() => setIsOpenCategoryMenu(!isOpenCategoryMenu)}
              isOpenCategoryMenu={isOpenCategoryMenu}
              isBig
              placeholder={t(`createad.chooseCategory`)}
              isCreatePage
            />
          </div>
        </div>
        <div className={cn(styles.item, { [styles.disabled]: disabled })}>
          <p className={styles.label}>{t(`createad.dealType`)}</p>
          <div className={cn(styles.input)}>
            <Field
              name="dealType"
              //@ts-ignore
              component={SelectContainer}
              options={dealTypes}
              placeholder={t(`createad.chooseDealType`)}
              classname="dealType big withIcon"
              chooseOption={
                values.dealType &&
                dealTypes.filter((item) => item.value === values.dealType)
              }
              isClearValue={isRestartForm}
            />
          </div>
        </div>
        <div className={cn(styles.item, { [styles.disabled]: disabled })}>
          <p className={styles.label}>{t(`createad.salesman`)}</p>
          <div className={cn(styles.input)}>
            <Field
              name="salesman"
              //@ts-ignore
              component={SelectContainer}
              options={salesmanList}
              placeholder={t(`createad.chooseSalesman`)}
              classname="salesman big withIcon"
              chooseOption={
                values.salesman &&
                salesmanList.filter((item) => item.value === values.salesman)
              }
              isClearValue={isRestartForm}
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
