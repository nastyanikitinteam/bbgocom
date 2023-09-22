import { FC, useState } from "react";
import PriceMain from "../Price/PriceMain/PriceMain";
import Category from "../Category/Category";
import LocationMobile from "components/SearchBar/SearchLocation/LocationMobile/LocationMobile";
import cn from "classnames";

import styles from "./filter.module.scss";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  isActiveCategory: number;
  dataCategory: any;
  setDataCategory: (bool: any) => void;
  setIsSearchRegionQuery: (bool: string) => void;
  isSearchRegionQuery: string;
  handleClickRegion: (key: string, value: string) => void;
  setDataRegion: (bool: any) => void;
  dataRegion: any;
  sendResult: () => void;
  deleteFilterResult: (bool: string) => void;
}

const Filter: FC<IProps> = ({
  dataPrice,
  handleClickPrice,
  setIsActiveChoice,
  isActiveChoice,
  isActiveCategory,
  dataCategory,
  setDataCategory,
  setIsSearchRegionQuery,
  isSearchRegionQuery,
  handleClickRegion,
  setDataRegion,
  dataRegion,
  sendResult,
  deleteFilterResult,
}) => {
  const [isOpenLocationList, setIsOpenLocationList] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Filter</h3>
      <div className={styles.item}>
        <PriceMain dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
      </div>
      <div className={styles.item}>
        <h3 className={styles.subtitle}>Category</h3>
        <Category
          handleActive={() =>
            setIsActiveChoice(isActiveChoice === "Category" ? "" : "Category")
          }
          isActiveChoice={isActiveChoice === "Category"}
          dataCategory={dataCategory}
          placeholder="All"
        />
      </div>
      <div className={styles.item}>
        <LocationMobile
          setIsSearchRegionQuery={setIsSearchRegionQuery}
          isSearchRegionQuery={isSearchRegionQuery}
          setIsActiveChoice={setIsActiveChoice}
          handleClickRegion={handleClickRegion}
          setDataRegion={setDataRegion}
          dataRegion={dataRegion}
        />
      </div>
      <div className={styles.buttons}>
        <button
          className={cn("default-button", styles.apply)}
          onClick={sendResult}
        >
          Apply
        </button>
        <button
          className={cn("default-button border", styles.reset)}
          onClick={() => deleteFilterResult("reset")}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Filter;
