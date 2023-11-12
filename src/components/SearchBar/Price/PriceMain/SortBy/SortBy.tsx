import { FC, useEffect, useState } from "react";
import SelectContainer from "components/Select/Select";
import styles from "./sortby.module.scss";
import { useTranslation } from "react-i18next";

import { sortList } from "./config";
interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  withoutLabel?: boolean;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice, withoutLabel }) => {
  const { t } = useTranslation();
  const [isClearValue, setIsClearValue] = useState(false);
  const selectedSortItem = sortList.find(
    (item, id) => item.value === dataPrice.sortBy
  );

  const handleChange = (value: any) => {
    if (value != null) {
      // @ts-ignore
      handleClickPrice("sortBy", value);
    }
  };

  useEffect(() => {
    if (dataPrice.sortBy == undefined) {
      // @ts-ignore
      // selectRef?.current?.clearValue();
      setIsClearValue(true);
    } else {
      setIsClearValue(false);
    }
  }, [dataPrice]);

  return (
    <div className={styles.container}>
      {!withoutLabel && (
        <h3 className={styles.title}>{t(`searchbar.sortBy`)}:</h3>
      )}
      <SelectContainer
        options={sortList}
        chooseOption={selectedSortItem}
        classname="sort withIcon"
        placeholder={t(`general.default`)}
        title={t(`searchbar.sortBy`)}
        onChange={handleChange}
        // ref={selectRef}
        isClearValue={isClearValue}
      />
    </div>
  );
};

export default SortBy;
