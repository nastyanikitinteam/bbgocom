import { useMemo, useRef, FC, useEffect, useState } from "react";
import Select, { components } from "react-select";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./sortby.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close.svg";
import SortSvg from "images/icons/sort.svg";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice }) => {
  const [isChooseOption, setIsChooseOption] = useState(false);
  const [isOpenList, setIsOpenList] = useState(false);

  const isMobile = useMediaQuery(768);
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
  const handleListChange = (value: any) => {
    handleClickPrice("sortBy", value);
    setIsOpenList(false);
    setIsChooseOption(true);
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
      selectRef?.current?.clearValue();
    }
  }, [dataPrice]);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sort by:</h3>
      {!isMobile ? (
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
      ) : (
        <>
          <div
            className={cn("default-input sort sm", styles.input, {
              [styles.isChoose]: isChooseOption,
            })}
            onClick={() => setIsOpenList(true)}
          >
            {dataPrice.sortBy == undefined ? "Default" : dataPrice.sortBy}

            <span className={styles.arrow}>
              <ArrowSvg />
            </span>
          </div>
          <div className={cn(styles.content, { [styles.active]: isOpenList })}>
            <div className={styles.block}>
              <h3 className={styles.subtitle}>Short Buy</h3>
              <div className={styles.close}>
                <CloseIcon />
              </div>
              <div className={styles.list}>
                {sortList.map(({ value }) => {
                  return (
                    <div
                      key={value}
                      className={cn(styles.item, {
                        [styles.active]: value === dataPrice.sortBy,
                      })}
                      onClick={() => handleListChange(value)}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SortBy;
