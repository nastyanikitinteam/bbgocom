import { FC } from "react";
import cn from "classnames";
import useMediaQuery from "src/utils/useMediaQuery";

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

  return (
    <div className={cn(styles.container, { [styles.menuTop]: isSearchBarTop })}>
      {!isMobile && (
        <div className={styles.top}>
          <h3>Price Filter</h3>
          <div
            className={styles.clear}
            onClick={() => handleClickPrice("default", null)}
          >
            <span className={styles.icon}>
              <DelIcon />
            </span>
            Clean All
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
