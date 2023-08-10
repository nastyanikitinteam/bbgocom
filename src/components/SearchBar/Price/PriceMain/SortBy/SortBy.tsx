import { useMemo, useRef, FC, useEffect, useState } from "react";
import Select, { components } from "react-select";
import cn from "classnames";
import styles from "./sortby.module.scss";

import ArrowSvg from "images/icons/drop.svg";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice }) => {
  // const [isDefaultOption, setIsDefaultOption] = useState(false);

  const selectRef = useRef();

  const sortList = useMemo(
    () => [
      {
        value: "The cheapest",
        label: "The cheapest",
      },
      {
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

  const handleChange = (value: any) => {
    if (value != null) {
      handleClickPrice("sortBy", value?.value);
    }
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <ArrowSvg />
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    if (dataPrice.sortBy == undefined) {
      // @ts-ignore
      selectRef.current.clearValue();
    }
  }, [dataPrice]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sort by:</h3>
      <Select
        ref={selectRef}
        options={sortList}
        placeholder="Default"
        className={cn(`default-select sort`, { fill: dataPrice.sortBy })}
        classNamePrefix="default"
        isSearchable={false}
        components={{ DropdownIndicator }}
        onChange={handleChange}
      />
    </div>
  );
};

export default SortBy;
