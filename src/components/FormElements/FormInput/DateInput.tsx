import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import ErrorIcon from "images/icons/error.svg";

type IProps = React.ComponentPropsWithoutRef<"input"> & {
  input;
  label?: string;
  meta: any;
};

const DateInput: React.FC<IProps> = ({ label, meta, input, ...props }) => {
  const [isValue, setIsValue] = useState(input.value);

  const onChangeInput = useCallback((event) => {
    const input = event.target.value.replace(/\D/g, "");
    const currentLength = isValue.length;
    const formattedInput = input.replace(/^(\d{2})/, "$1/").substr(0, 5);
    if (currentLength > event.target.value.length) {
      setIsValue(input);
    } else {
      setIsValue(formattedInput);
    }
  }, []);

  const checkNumberInput = useCallback((event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div className={cn(styles.container, styles.smNoIcon, {})}>
        <input
          className={cn(styles.input, {
            [styles.errorInput]: meta?.error && meta?.touched,
          })}
          onKeyPress={checkNumberInput}
          {...input}
          onChange={(e) => {
            input.onChange(e);
            onChangeInput(e);
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

      {/* {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
        <div className="error serverError">{serverErrors}</div>
      )} */}
    </>
  );
};

export default DateInput;
