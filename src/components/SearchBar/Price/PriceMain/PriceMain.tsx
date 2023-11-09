import { FC } from "react";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";
import { useTranslation } from "react-i18next";

import Currency from "./Currency/Currency";
import SortBy from "./SortBy/SortBy";
import Price from "./Price/Price";
import styles from "./price-main.module.scss";

import DelIcon from "images/icons/del.svg";

interface IProps {
  isSearchBarTop?: boolean;
  dataPrice: any;
  handleClickPrice: (key: string, value: any) => void;
}

const PriceMain: FC<IProps> = ({
  isSearchBarTop,
  dataPrice,
  handleClickPrice,
}) => {
  const isMobile = useMediaQuery(768);
  const { t } = useTranslation();

  return (
    <div className={cn(styles.container, { [styles.menuTop]: isSearchBarTop })}>
      {!isMobile && (
        <div className={styles.top}>
          <h3>{t(`searchbar.priceFilter`)}</h3>
          <div
            className={styles.clean}
            onClick={() => handleClickPrice("default", null)}
          >
            <span className={styles.icon}>
              <DelIcon />
            </span>
            {t(`searchbar.cleanAll`)}
          </div>
        </div>
      )}

      <div className={styles.blocks}>
        <Currency dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
        <SortBy dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
      </div>
      <div className={styles.block}>
        <Price dataPrice={dataPrice} handleClickPrice={handleClickPrice} />
      </div>
    </div>
  );
};

export default PriceMain;
