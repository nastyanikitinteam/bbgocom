import { FC, useEffect, useState, useCallback, useRef } from "react";
import Select, { components } from "react-select";
import useMediaQuery from "src/utils/useMediaQuery";
import MobileSelect from "./MobileSelect";
import { CountriesList } from "config/countryList";
import Country from "components/FormElements/Select/Country/Country";

import styles from "./select.module.scss";
import cn from "classnames";

import ArrowSvg from "images/icons/drop.svg";
import ArrowSmSvg from "images/icons/drop-sm.svg";

interface IProps {
  classname?: string;
  language?: boolean;
  placeholder?: string;
  options;
  chooseOption?: any;
  isClearValue?: boolean;
  input: any;
  rest: any;
}
const PhoneCodeSelect: FC<IProps> = ({
  classname,
  language,
  placeholder,
  options,
  chooseOption,
  isClearValue,
  input,
  rest,
  ...props
}) => {
  const selectRef = useRef();
  const isMobile = useMediaQuery(768);
  const [fillClass, setFillClass] = useState(chooseOption ? "fill" : "");
  const [isCountryList, setIsCountryList] = useState([]);

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setFillClass("fill");
    } else {
      setFillClass("");
    }
  };

  const processingCounrtryList = useCallback(() => {
    // TODO: Move to utils
    const countries = CountriesList.map(({ value, icon, name, code }) => ({
      value: `${value} ${code}`,
      label: <Country icon={icon} name={name} code={code} />,
    }));
    setIsCountryList(countries);
  }, [CountriesList]);

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

  useEffect(() => {
    if (!isCountryList.length) {
      processingCounrtryList();
    }
  }, [CountriesList]);
  // {isCountryList.length && (
  return (
    isCountryList.length &&
    (!isMobile ? (
      <div className={styles.container}>
        <Select
          name={input.name}
          options={isCountryList}
          defaultValue={
            chooseOption
              ? isCountryList.filter((item) => item.value === chooseOption)
              : !placeholder && isCountryList[0]
          }
          className={cn(`default-select phone ${fillClass}`)}
          classNamePrefix="default"
          isSearchable={true}
          components={{ DropdownIndicator, NoOptionsMessage }}
          onChange={(e) => {
            input.onChange(e);
            handleChange(e);
          }}
          ref={selectRef}
          // menuIsOpen
        />
      </div>
    ) : (
      <MobileSelect
        options={isCountryList}
        classname="phone"
        placeholder={placeholder}
        isSearch={true}
        isClearValue={isClearValue}
        input={input}
        props={props}
      />
    ))
  );
};

export default PhoneCodeSelect;
