import { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./textarea.module.scss";
import ErrorIcon from "images/icons/error.svg";

interface IProps {
  placeholder?: string;
  type?: string;
  serverErrors?: string;
  extClassName?: string;
  input?: any;
  label?: string;
  meta?: any;
  required?: boolean;
  isSmall?: boolean;
}

const Textarea: React.FC<IProps> = ({
  label,
  meta,
  placeholder,
  serverErrors,
  extClassName,
  isSmall,
  input,
  ...props
}) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(
          styles.block,
          { [styles.isSmall]: isSmall },
          extClassName && styles[extClassName]
        )}
      >
        <textarea
          className={cn(styles.input, {
            [styles.errorInput]:
              (serverErrors && !meta?.dirtySinceLastSubmit) ||
              (meta?.error && meta?.touched),
          })}
          placeholder={placeholder && placeholder}
          rows={5}
          {...input}
          {...props}
        />
        {meta?.error && meta?.touched && (
          <div className={styles.errorIcon}>
            <ErrorIcon />
            <div className={styles.toolError}>{meta.error}</div>
          </div>
        )}
        {/* {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
          <div className="error serverError">{serverErrors}</div>
        )} */}
      </div>
    </>
  );
};

export default Textarea;
