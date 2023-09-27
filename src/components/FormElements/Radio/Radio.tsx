import React, { ReactNode } from "react";
import styles from "./radio.module.scss";
import cn from "classnames";

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
  onClick?: () => void;
  readonly?: boolean;
  number?: boolean;
  text?: string;
  children?: ReactNode;
  name?: string;
  value?: string;
  onChange?: () => void;
}

const Radio: React.FC<IProps> = ({
  input,
  label,
  meta,
  placeholder,
  serverErrors,
  extClassName,
  secondaryColor,
  textColor,
  onClick,
  readonly = false,
  number,
  text,
  children,
  name,
  value,
  onChange,
}) => {
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
        onClick={onClick}
        onChange={onChange && onChange}
        type="radio"
        readOnly={readonly}
      />
      <div className={styles.block}></div>
      {children && <p className={styles.text}>{children}</p>}
    </label>
  );
};

export default Radio;
