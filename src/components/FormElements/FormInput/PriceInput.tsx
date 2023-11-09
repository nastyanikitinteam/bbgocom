import { useCallback, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import ErrorIcon from "images/icons/error.svg";

type IProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  meta: any;
  input;
};

const PriceInput: React.FC<IProps> = ({ label, meta, input, ...props }) => {
  const [isValue, setIsValue] = useState(input.value);

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

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles.container, styles.price)}>
        <input
          className={cn(styles.input, {
            [styles.errorInput]: meta?.error && meta?.touched,
          })}
          onKeyPress={checkPriceInput}
          {...input}
          onChange={(e) => {
            input.onChange(e);
            handlePriceInput(e);
          }}
          value={isValue}
          {...props}
        />
        {meta?.error && meta?.touched && (
          <div className={styles.errorIcon}>
            <ErrorIcon />
            <div className={styles.toolError}>{meta.error}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default PriceInput;
