import { FC } from "react";
import Select, { components } from "react-select";

import styles from "./select.module.scss";
import cn from "classnames";

import LanguageSvg from "images/icons/language.svg";
import ArrowSvg from "images/icons/drop.svg";
import ArrowSmSvg from "images/icons/drop-sm.svg";

interface IPprops {
  options: any;
  classname?: string;
  language?: boolean;
  placeholder?: string;
}
const SelectContainer: FC<IPprops> = ({
  options,
  classname,
  language,
  placeholder,
}) => {
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {language ? <ArrowSmSvg /> : <ArrowSvg />}
      </components.DropdownIndicator>
    );
  };
  return (
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
        className={cn(`default-select ${classname}`)}
        classNamePrefix="default"
        isSearchable={false}
        components={{ DropdownIndicator }}
        // menuIsOpen
      />
    </div>
  );
};

export default SelectContainer;
