import { FC, useEffect, useState, forwardRef, useRef } from "react";
import Select, { components } from "react-select";
import useMediaQuery from "src/utils/useMediaQuery";
import MobileSelect from "./MobileSelect";

import styles from "./select.module.scss";
import cn from "classnames";

import ArrowSvg from "images/icons/drop.svg";
import ArrowSmSvg from "images/icons/drop-sm.svg";

interface IProps {
  options: any;
  classname?: string;
  language?: boolean;
  placeholder?: string;
  isSearch?: boolean;
  chooseOption?: any;
  isClearValue?: boolean;
  input: any;
  rest: any;
}
const SelectContainer: FC<IProps> = ({
  options,
  classname,
  language,
  placeholder,
  isSearch,
  chooseOption,
  isClearValue,
  input,
  rest,
  ...props
}) => {
  const selectRef = useRef();
  const [fillClass, setFillClass] = useState(chooseOption ? "fill" : "");

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setFillClass("fill");
    } else {
      setFillClass("");
    }
  };

  const isMobile = useMediaQuery(768);

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

  useEffect(() => {
    if (isClearValue) {
      //@ts-ignore
      selectRef?.current?.clearValue();
    }
  }, [isClearValue]);

  return !isMobile ? (
    <div className={styles.container}>
      <Select
        name={input.name}
        options={options}
        defaultValue={chooseOption ? chooseOption : !placeholder && options[0]}
        placeholder={placeholder && placeholder}
        className={cn(`default-select ${classname} ${fillClass}`)}
        classNamePrefix="default"
        isSearchable={isSearch ? true : false}
        components={{ DropdownIndicator, NoOptionsMessage }}
        onChange={(e) => {
          input.onChange(e);
          handleChange(e);
          //@ts-ignore
          props.onChange && props.onChange(e);
        }}
        ref={selectRef}
        // {...props}
        // menuIsOpen
      />
    </div>
  ) : (
    <MobileSelect
      options={options}
      classname={classname}
      placeholder={placeholder}
      isSearch={isSearch}
      isClearValue={isClearValue}
      input={input}
      //@ts-ignore
      props={props}
    />
  );
};

export default SelectContainer;
