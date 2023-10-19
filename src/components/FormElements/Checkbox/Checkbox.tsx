import React, { ReactNode } from "react";
import styles from "./checkbox.module.scss";
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
  onChange?: (bool: any) => void;
  checked?: boolean;
  name?: string;
}

const Checkbox: React.FC<IProps> = ({
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
  children,
  onChange,
  checked,
  name,
}) => {
  return (
    <label
      className={cn(styles.container, extClassName && styles[extClassName])}
    >
      <input
        {...input}
        name={!input && name}
        className={styles.input}
        style={
          secondaryColor && {
            background: secondaryColor,
            color: textColor,
            borderColor: textColor,
          }
        }
        id={placeholder}
        onClick={onClick}
        type="checkbox"
        readOnly={readonly}
        onChange={onChange}
        checked={checked}
      />
      <div className={styles.block}></div>
      {children && <p className={styles.text}>{children}</p>}
    </label>
  );
};

export default Checkbox;
