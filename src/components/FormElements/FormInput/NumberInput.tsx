import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import ErrorIcon from "images/icons/error.svg";

type IProps = React.ComponentPropsWithoutRef<"input"> & {
  extClassName?: string;
  label?: string;
  meta: any;
  input;
};

const NumberInput: React.FC<IProps> = ({
  label,
  meta,
  extClassName,
  input,
  ...props
}) => {
  const checkNumberInput = useCallback((event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.container, extClassName && styles[extClassName])}
      >
        <input
          className={cn(styles.input, {
            [styles.errorInput]: meta?.error && meta?.touched,
          })}
          onKeyPress={checkNumberInput}
          {...input}
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

export default NumberInput;
