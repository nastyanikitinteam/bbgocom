import { FC } from "react";
import PriceMain from "../Price/PriceMain/PriceMain";
import Category from "../Category/Category";

import styles from "./filter.module.scss";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  isActiveCategory: number;
  dataCategory: any;
}

const Filter: FC<IProps> = ({
  dataPrice,
  handleClickPrice,
  setIsActiveChoice,
  isActiveChoice,
  isActiveCategory,
  dataCategory,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Filter</h3>
      <PriceMain dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
      <div className={styles.item}>
        <h3 className={styles.subtitle}>Category</h3>
        <Category
          setIsActiveChoice={setIsActiveChoice}
          isActiveChoice={isActiveChoice}
          isActiveCategory={isActiveCategory}
          dataCategory={dataCategory}
        />
      </div>
    </div>
  );
};

export default Filter;
