import { useMemo, useRef, FC, useEffect, useState } from "react";
import SelectContainer from "components/Select/Select";
import useMediaQuery from "src/utils/useMediaQuery";
import styles from "./sortby.module.scss";
interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  withoutLabel?: boolean;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice, withoutLabel }) => {
  const [isChooseOption, setIsChooseOption] = useState(false);

  const selectRef = useRef();

  const sortList = useMemo(
    () => [
      {
        value: "The cheapest",
        label: "The cheapest",
      },
      {
        id: 1,
        value: "The most expensive",
        label: "The most expensive",
      },
      {
        value: "The latest",
        label: "The latest",
      },
      {
        value: "Recommended",
        label: "Recommended",
      },
    ],
    []
  );

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
      selectRef?.current?.clearValue();
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
      />
    </div>
  );
};

export default SortBy;
