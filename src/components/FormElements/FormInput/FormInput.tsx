import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import ErrorIcon from "images/icons/error.svg";

type IProps = React.ComponentPropsWithoutRef<"input"> & {
  extClassName?: string;
  label?: string;
  meta: any;
  isSmall?: boolean;
  input;
};

const FormInput: React.FC<IProps> = ({
  label,
  meta,
  extClassName,
  isSmall,
  input,
  ...props
}) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.container, extClassName && styles[extClassName], {
          [styles.isSmall]: isSmall,
        })}
      >
        <input
          className={cn(styles.input, {
            [styles.errorInput]: meta?.error && meta?.touched,
          })}
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

export default FormInput;
