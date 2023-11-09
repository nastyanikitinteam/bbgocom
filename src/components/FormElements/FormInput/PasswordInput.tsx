import { useCallback, useEffect, useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import EyeClosed from "images/icons/eye-closed-svgrepo-com.svg";
import EyeOpen from "images/icons/eye-open-svgrepo-com.svg";
import ErrorIcon from "images/icons/error.svg";

type IProps = React.ComponentPropsWithoutRef<"input"> & {
  extClassName?: string;
  label?: string;
  meta: any;
  input;
};

const PasswordInput: React.FC<IProps> = ({
  label,
  extClassName,
  input,
  meta,
  ...props
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.container, extClassName && styles[extClassName])}
      >
        <input
          className={cn(
            styles.input,
            extClassName !== "smNoIcon" && [styles.password],
            {
              [styles.errorInput]: meta?.error && meta?.touched,
            }
          )}
          {...input}
          type={isShowPassword ? "text" : "password"}
          {...props}
        />
        <div
          className={styles.passwordShow}
          onClick={() => setIsShowPassword((prev) => !prev)}
        >
          {isShowPassword ? <EyeClosed /> : <EyeOpen />}
        </div>
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

export default PasswordInput;
