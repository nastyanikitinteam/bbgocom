import { FC, useState } from "react";
import PriceMain from "../Price/PriceMain/PriceMain";
import Category from "../Category/Category";
import LocationMobile from "components/SearchBar/SearchLocation/LocationMobile/LocationMobile";

import styles from "./filter.module.scss";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  setIsActiveChoice: (bool: string) => void;
  isActiveChoice: string;
  isActiveCategory: number;
  dataCategory: any;
  setIsSearchRegionQuery: (bool: string) => void;
  isSearchRegionQuery: string;
  handleClickRegion: (key: string, value: string) => void;
  setDataRegion: (bool: string) => void;
  dataRegion: any;
}

const Filter: FC<IProps> = ({
  dataPrice,
  handleClickPrice,
  setIsActiveChoice,
  isActiveChoice,
  isActiveCategory,
  dataCategory,
  setIsSearchRegionQuery,
  isSearchRegionQuery,
  handleClickRegion,
  setDataRegion,
  dataRegion,
}) => {
  const [isOpenLocationList, setIsOpenLocationList] = useState(false);

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
    </div>
  );
};

export default Filter;
