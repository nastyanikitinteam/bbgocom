import { useMemo, useRef, FC, useEffect, useState } from "react";
import Select, { components } from "react-select";
import PortalContainer from "components/PortalContainer/PortalContainer";
import useMediaQuery from "src/utils/useMediaQuery";
import cn from "classnames";
import styles from "./sortby.module.scss";

import ArrowSvg from "images/icons/drop.svg";
import CloseIcon from "images/icons/close.svg";
import SortSvg from "images/icons/sort.svg";

interface IProps {
  dataPrice: any;
  handleClickPrice: (key: string, value: string) => void;
  withoutLabel?: boolean;
}

const SortBy: FC<IProps> = ({ dataPrice, handleClickPrice, withoutLabel }) => {
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
      setIsChooseOption(false);
    }
  }, [dataPrice]);

  return (
    <div className={styles.container}>
      {!withoutLabel && <h3 className={styles.title}>Sort by:</h3>}
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
          <PortalContainer>
            <div
              className={cn(styles.blockBg, { [styles.active]: isOpenList })}
              onClick={() => setIsOpenList(false)}
            ></div>
            <div className={cn(styles.block, { [styles.active]: isOpenList })}>
              <h3 className={styles.subtitle}>Sort Buy</h3>
              <div
                className={styles.close}
                onClick={() => setIsOpenList(false)}
              >
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
          </PortalContainer>
        </>
      )}
    </div>
  );
};

export default SortBy;
