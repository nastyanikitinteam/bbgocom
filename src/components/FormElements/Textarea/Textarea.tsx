import cn from "classnames";
import styles from "./textarea.module.scss";

interface IProps {
  placeholder: string;
  type?: string;
  serverErrors?: string;
  extClassName?: string;
  secondaryColor?: string;
  textColor?: string;
  input: any;
  label?: string;
  meta: any;
  required?: boolean;
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
}) => {
  return (
    <div className={styles.wrap}>
      <label htmlFor={placeholder} className={styles.label}>
        {label && (
          <p
            className={styles.title}
            style={
              secondaryColor && {
                color: textColor,
              }
            }
          >
            {label}
          </p>
        )}
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
          />
        </div>
        {meta?.error && meta?.touched && (
          <div className="error">{meta.error}</div>
        )}
        {!meta?.error && !meta?.dirtySinceLastSubmit && serverErrors && (
          <div className="error">{serverErrors}</div>
        )}
      </label>
    </div>
  );
};

export default Textarea;
