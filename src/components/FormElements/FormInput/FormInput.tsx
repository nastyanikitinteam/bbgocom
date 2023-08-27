import { useState } from "react";
import cn from "classnames";
import styles from "./form-input.module.scss";

import EyeClosed from "images/icons/eye-closed-svgrepo-com.svg";
import EyeOpen from "images/icons/eye-open-svgrepo-com.svg";
import ErrorIcon from "images/icons/error.svg";

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
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isValue, setIsValue] = useState(text ? text : "");

  const onChangeInput = (event) => {
    setIsValue(event.target.value);
  };

  return (
    <>
      <div
        className={cn(styles.container, extClassName && styles[extClassName])}
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
          onKeyPress={
            number &&
            ((event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            })
          }
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
          </div>

          // <div className="error sendMessage">{meta.error}</div>
        )}
      </div>

      {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
        <div className="error serverError">{serverErrors}</div>
      )}
    </>
  );
};

export default FormInput;
