import cn from "classnames";
import styles from "./textarea.module.scss";
import ErrorIcon from "images/icons/error.svg";

interface IProps {
  placeholder?: string;
  type?: string;
  serverErrors?: string;
  extClassName?: string;
  secondaryColor?: string;
  textColor?: string;
  input?: any;
  label?: string;
  meta?: any;
  required?: boolean;
  row?: number;
}

const Textarea: React.FC<IProps> = ({
  input,
  label,
  meta,
  placeholder,
  type = "text",
  serverErrors,
  extClassName,
  secondaryColor,
  textColor,
  row,
}) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.block}>
        <textarea
          {...input}
          type={type}
          className={cn(styles.input, {
            [styles.errorInput]:
              (serverErrors && !meta?.dirtySinceLastSubmit) ||
              (meta?.error && meta?.touched),
          })}
          id={input.value}
          placeholder={placeholder}
          rows={row ? row : 5}
        />
        {meta?.error && meta?.touched && (
          <div className={styles.errorIcon}>
            <ErrorIcon />
            <div className={styles.toolError}>{meta.error}</div>
          </div>
        )}
        {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
          <div className="error serverError">{serverErrors}</div>
        )}
      </div>
    </>
  );
};

export default Textarea;
