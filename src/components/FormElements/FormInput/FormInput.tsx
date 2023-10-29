import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import EyeClosed from "images/icons/eye-closed-svgrepo-com.svg";
import EyeOpen from "images/icons/eye-open-svgrepo-com.svg";
import ErrorIcon from "images/icons/error.svg";
import { CodeFixAction } from "typescript";

interface IProps {
  placeholder?: string;
  serverErrors?: string;
  extClassName?: string;
  secondaryColor?: string;
  textColor?: string;
  input: any;
  label?: string;
  meta: any;
  required?: boolean;
  onClick?: () => void;
  readonly?: boolean;
  number?: boolean;
  text?: string;
  isCardNumber?: boolean;
  isSmall?: boolean;
  isDate?: boolean;
  maxLength?: number;
  keyName?: string;
  onChange?: () => void;
  isPrice?: boolean;
}

const FormInput: React.FC<IProps> = ({
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
  isCardNumber,
  isSmall,
  isDate,
  maxLength,
  onChange,
  keyName,
  isPrice,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  const [isValue, setIsValue] = useState(text ? text : "");

  const handlePriceInput = useCallback((event) => {
    const inputValue = event.target.value.replace(/[^\d.]/g, "");
    const parts = inputValue.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    let formattedInput = integerPart;
    if (parts.length > 1) {
      formattedInput += "." + parts[1];
    }
    setIsValue(formattedInput);
  }, []);

  const onChangeInput = useCallback((event) => {
    if (isCardNumber) {
      const input = event.target.value.replace(/\D/g, "");
      const formattedInput = input.replace(/(\d{4})(?=\d)/g, "$1 ");
      setIsValue(formattedInput);
    } else if (isDate) {
      const input = event.target.value.replace(/\D/g, "");
      const formattedInput = input.replace(/^(\d{2})/, "$1/").substr(0, 5);
      setIsValue(formattedInput);
    } else if (isPrice) {
      handlePriceInput(event);
    } else {
      setIsValue(event.target.value);
    }
  }, []);

  const checkPriceInput = useCallback((event) => {
    if (
      !/[0-9.]/.test(event.key) ||
      (event.key === "." && event.target.value.includes("."))
    ) {
      event.preventDefault();
    }
    if (event.key === "." && event.target.value.includes(".")) {
      event.preventDefault();
    }
    const parts = event.target.value.split(".");
    if (parts[1] && parts[1].length >= 2) {
      event.preventDefault();
    }
  }, []);

  const checkNumberInput = useCallback((event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  const keyPress = useCallback((event) => {
    if (number) {
      checkNumberInput(event);
    } else if (isPrice) {
      checkPriceInput(event);
    }
  }, []);

  useEffect(() => {
    // @ts-ignore
    onChange && (keyName ? onChange(isValue, keyName) : onChange(isValue));
  }, [isValue]);

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.container, extClassName && styles[extClassName], {
          [styles.isSmall]: isSmall,
        })}
      >
        <input
          {...input}
          className={cn(
            styles.input,
            {
              [styles.errorInput]:
                (serverErrors && !meta?.dirtySinceLastSubmit) ||
                (meta?.error && meta?.touched),
            },
            input.type === "password" &&
              extClassName !== "smNoIcon" && [styles.password]
          )}
          style={
            secondaryColor && {
              background: secondaryColor,
              color: textColor,
              borderColor: textColor,
            }
          }
          id={placeholder}
          value={isValue}
          placeholder={placeholder}
          onClick={onClick}
          type={isShowPassword ? "text" : input.type}
          readOnly={readonly}
          onChange={onChangeInput}
          onKeyPress={keyPress}
          maxLength={maxLength ? maxLength : false}
        />
        {input.type === "password" && (
          <div
            className={styles.passwordShow}
            onClick={() => setIsShowPassword((prev) => !prev)}
          >
            {isShowPassword ? <EyeClosed /> : <EyeOpen />}
          </div>
        )}
        {meta?.error && meta?.touched && input.type !== "password" && (
          <div className={styles.errorIcon}>
            <ErrorIcon />
            <div className={styles.toolError}>{meta.error}</div>
          </div>
        )}
      </div>

      {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
        <div className="error serverError">{serverErrors}</div>
      )}
    </>
  );
};

export default FormInput;
