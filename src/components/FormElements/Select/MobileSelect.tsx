import { FC, useEffect, useState, forwardRef, useRef } from "react";
import Select, { components } from "react-select";
import PortalContainer from "components/PortalContainer/PortalContainer";
import SelectSearch from "components/Select/SelectSearch/SelectSearch";
import useMediaQuery from "src/utils/useMediaQuery";

import styles from "./select.module.scss";
import cn from "classnames";

import LanguageSvg from "images/icons/language.svg";
import ArrowSvg from "images/icons/drop.svg";
import ArrowSmSvg from "images/icons/drop-sm.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  options: any;
  classname?: string;
  placeholder?: string;
  isSearch?: boolean;
  title?: string;
  isClearValue?: boolean;
}
const MobileSelect: FC<IProps> = ({
  options,
  classname,
  placeholder,
  title,
  isSearch,
  isClearValue,
}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isChooseOption, setIsChooseOption] = useState(
    placeholder ? placeholder : options[0].value
  );

  const handleListChange = (value: any) => {
    setIsOpenList(false);
    setIsChooseOption(value);
  };

  useEffect(() => {
    if (isClearValue) {
      setIsChooseOption(placeholder);
    }
  }, [isClearValue]);

  return (
    <div
      className={cn(`default-select ${classname}`, styles.container, {
        fill: isChooseOption != placeholder,
      })}
    >
      <div
        className={cn("default__control", styles.input)}
        onClick={() => setIsOpenList(true)}
      >
        {isChooseOption === placeholder ? (
          <p className={styles.placeholder}>{isChooseOption}</p>
        ) : (
          options
            .filter(({ value }) => value === isChooseOption)
            .map(({ value, label }) => {
              return (
                <div key={value} className={styles.text}>
                  {label}
                </div>
              );
            })
        )}
        <span className={cn(styles.arrow, "default__indicator")}>
          <ArrowSvg />
        </span>
      </div>
      <PortalContainer>
        <div
          className={cn(styles.blockBg, { [styles.active]: isOpenList })}
          onClick={() => setIsOpenList(false)}
        ></div>
        <div
          className={cn(`default-select ${classname}`, styles.block, {
            [styles.active]: isOpenList,
          })}
        >
          <h3 className={styles.subtitle}>{placeholder}</h3>
          <div className={styles.close} onClick={() => setIsOpenList(false)}>
            <CloseIcon />
          </div>
          {isSearch ? (
            <SelectSearch
              list={options}
              handleListChange={handleListChange}
              isChooseOption={isChooseOption}
            />
          ) : (
            <div className={styles.list}>
              {options.map(({ value, label }) => {
                return (
                  <div
                    key={value}
                    className={cn(styles.item, {
                      [styles.active]: value === isChooseOption,
                    })}
                    onClick={() => handleListChange(value)}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </PortalContainer>
    </div>
  );
};

export default MobileSelect;
