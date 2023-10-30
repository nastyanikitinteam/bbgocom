import { useMemo, useRef, FC, useEffect, useState } from "react";
import SelectContainer from "components/Select/Select";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./sortby.module.scss";

import { sortList } from "./config";
interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  withoutLabel?: boolean;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice, withoutLabel }) => {
  const [isChooseOption, setIsChooseOption] = useState(false);
  const [isClearValue, setIsClearValue] = useState(false);

  const selectRef = useRef();

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
      {!withoutLabel && <h3 className={styles.title}>Sort by:</h3>}
      <SelectContainer
        options={sortList}
        chooseOption={selectedSortItem}
        classname="sort withIcon"
        placeholder="Default"
        title="Sort by"
        onChange={handleChange}
        // ref={selectRef}
        isClearValue={isClearValue}
      />
    </div>
  );
};

export default SortBy;
