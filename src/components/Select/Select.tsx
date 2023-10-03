import { FC, useEffect, useState } from "react";
import Select, { components } from "react-select";
import PortalContainer from "components/PortalContainer/PortalContainer";
import SelectSearch from "./SelectSearch/SelectSearch";
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
  language?: boolean;
  placeholder?: string;
  onChange?: (value: any) => void;
  isSearch?: boolean;
  title?: string;
  chooseOption?: any;
}
const SelectContainer: FC<IProps> = ({
  options,
  classname,
  language,
  placeholder,
  onChange,
  title,
  isSearch,
  chooseOption,
}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isChooseOption, setIsChooseOption] = useState(
    placeholder ? placeholder : options[0].value
  );
  const [selectedOption, setSelectedOption] = useState(null);
  const [fillClass, setFillClass] = useState(chooseOption ? "fill" : "");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      setFillClass("fill");
    } else {
      setFillClass("");
    }
    onChange && onChange(selectedOption.value);
  };

  const isMobile = useMediaQuery(768);

  const handleListChange = (value: any) => {
    setIsOpenList(false);
    setIsChooseOption(value);
    onChange && onChange(value);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {language ? <ArrowSmSvg /> : <ArrowSvg />}
      </components.DropdownIndicator>
    );
  };

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span className={styles.noresult}>No result</span>
      </components.NoOptionsMessage>
    );
  };

  return !isMobile ? (
    <div className={styles.container}>
      {language && (
        <span className={styles.icon}>
          <LanguageSvg />
        </span>
      )}
      <Select
        options={options}
        defaultValue={chooseOption ? chooseOption : !placeholder && options[0]}
        placeholder={placeholder && placeholder}
        className={cn(`default-select ${classname} ${fillClass}`)}
        classNamePrefix="default"
        isSearchable={isSearch ? true : false}
        components={{ DropdownIndicator, NoOptionsMessage }}
        onChange={handleChange}
        // menuIsOpen
      />
    </div>
  ) : (
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
              return <div key={value}>{label}</div>;
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
          <h3 className={styles.subtitle}>{title}</h3>
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

export default SelectContainer;
