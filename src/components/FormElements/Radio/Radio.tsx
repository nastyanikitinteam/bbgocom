import React, { ReactNode, useState, useEffect } from "react";
import styles from "./radio.module.scss";
import cn from "classnames";
import { useSSR } from "react-i18next";

interface IProps {
  placeholder?: string;
  serverErrors?: string;
  extClassName?: string;
  secondaryColor?: string;
  textColor?: string;
  input?: any;
  label?: string;
  meta?: any;
  required?: boolean;
  readonly?: boolean;
  number?: boolean;
  text?: string;
  children?: ReactNode;
  name?: string;
  value?: string;
  onChange?: (str: string) => void;
  isCheked?: string;
}

const Radio: React.FC<IProps> = ({
  input,
  label,
  meta,
  placeholder,
  extClassName,
  readonly = false,
  children,
  name,
  value,
  onChange,
  isCheked,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    console.log(event);
    setSelectedOption(event.target.value);
    onChange && onChange(event.target.value);
  };

  useEffect(() => {
    isCheked && setSelectedOption(isCheked);
  }, [isCheked]);

  return (
    <label
      className={cn(styles.container, extClassName && styles[extClassName])}
    >
      <input
        {...input}
        name={!input && name}
        value={!input && value}
        className={styles.input}
        id={placeholder}
        onChange={handleRadioChange}
        type="radio"
        readOnly={readonly}
        checked={selectedOption === children}
      />
      <div className={styles.block}></div>
      {children && <p className={styles.text}>{children}</p>}
    </label>
  );
};

export default Radio;
