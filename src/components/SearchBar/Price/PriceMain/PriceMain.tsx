import { FC } from "react";
import cn from "classnames";

import Currency from "./Currency/Currency";
import SortBy from "./SortBy/SortBy";
import styles from "./price-main.module.scss";

import DelIcon from "images/icons/del.svg";

interface IProps {
  isSearchBarTop: boolean;
}

const PriceMain: FC<IProps> = ({ isSearchBarTop }) => {
  return (
    <div className={cn(styles.container, { [styles.menuTop]: isSearchBarTop })}>
      <div className={styles.top}>
        <h3>Price Filter</h3>
        <div className={styles.clear}>
          <span className={styles.icon}>
            <DelIcon />
          </span>
          Clean All
        </div>
      </div>
      <div className={styles.blocks}>
        <Currency />
        <SortBy />
      </div>
    </div>
  );
};

export default PriceMain;
