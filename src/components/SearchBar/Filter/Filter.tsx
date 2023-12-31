import { FC } from "react";
import PriceMain from "../Price/PriceMain/PriceMain";
import Category from "../Category/Category";
import LocationMobile from "components/SearchBar/SearchLocation/LocationMobile/LocationMobile";
import cn from "classnames";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{t(`searchbar.filter`)}</h3>
      <div className={styles.item}>
        <PriceMain dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
      </div>
      <div className={styles.item}>
        <h3 className={styles.subtitle}>{t(`searchbar.category`)}</h3>
        <Category
          handleActive={() =>
            setIsActiveChoice(isActiveChoice === "Category" ? "" : "Category")
          }
          isActiveChoice={isActiveChoice === "Category"}
          dataCategory={dataCategory}
          placeholder={t(`searchbar.all`)}
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
          {t(`searchbar.apply`)}
        </button>
        <button
          className={cn("default-button border", styles.reset)}
          onClick={() => deleteFilterResult("reset")}
        >
          {t(`searchbar.reset`)}
        </button>
      </div>
    </div>
  );
};

export default Filter;
