import { FC, useState } from "react";
import Select, { components } from "react-select";
import PortalContainer from "components/PortalContainer/PortalContainer";
import useMediaQuery from "src/utils/useMediaQuery";

import styles from "./select.module.scss";
import cn from "classnames";

import LanguageSvg from "images/icons/language.svg";
import ArrowSvg from "images/icons/drop.svg";
import ArrowSmSvg from "images/icons/drop-sm.svg";
import CloseIcon from "images/icons/close.svg";

interface IPprops {
  options: any;
  classname?: string;
  language?: boolean;
  placeholder?: string;
  onChange?: (value: any) => void;
  isPhoneList?: boolean;
  title?: string;
}
const SelectContainer: FC<IPprops> = ({
  options,
  classname,
  language,
  placeholder,
  onChange,
  title,
  isPhoneList,
}) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [isChooseOption, setIsChooseOption] = useState(options[0].value);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fillClass, setFillClass] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption) {
      setFillClass("fill");
    } else {
      setFillClass("");
    }
    onChange && onChange(selectedOption);
  };

  const isMobile = useMediaQuery(768);

  const handleListChange = (value: any) => {
    setIsOpenList(false);
    setIsChooseOption(value);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {language ? <ArrowSmSvg /> : <ArrowSvg />}
      </components.DropdownIndicator>
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
        defaultValue={!placeholder && options[0]}
        placeholder={placeholder && placeholder}
        className={cn(`default-select ${classname} ${fillClass}`)}
        classNamePrefix="default"
        isSearchable={isPhoneList ? true : false}
        components={{ DropdownIndicator }}
        onChange={handleChange}
        // menuIsOpen
      />
    </div>
  ) : (
    <div className={cn(`default-select ${classname}`, styles.container)}>
      <div
        className={cn("default__control", styles.input)}
        onClick={() => setIsOpenList(true)}
      >
        {options
          .filter(({ value }) => value === isChooseOption)
          .map(({ value, label }) => {
            return <div key={value}>{label}</div>;
          })}
        <span className={styles.arrow}>
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
        </div>
      </PortalContainer>
    </div>
  );
};

export default SelectContainer;
