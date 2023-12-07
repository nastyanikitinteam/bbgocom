import React, { useRef, FC, useEffect } from "react";
import styles from "./service-files-input.module.scss";
import CloseIcon from "images/icons/close.svg";
import cn from "classnames";
import { useTranslation } from "react-i18next";
interface IProps {
  title: string;
  description: string;
  isSmall?: boolean;
  label?: string;
  setSelectedFiles: (bool: any) => void;
  selectedFiles: any;
  input;
}

const ServiceFilesInput: FC<IProps> = ({
  title,
  description,
  isSmall,
  label,
  setSelectedFiles,
  selectedFiles,
  input,
  ...rest
}) => {
  const fileInputRef = useRef(null);
  const maxSizeInBytes = 1024 * 1024;
  const { t } = useTranslation();

  const hadleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    let updatedFiles = selectedFiles;
    if (Array.isArray(updatedFiles)) {
      updatedFiles = updatedFiles.concat(newFiles);
    } else {
      updatedFiles = [...newFiles];
    }
    setSelectedFiles(updatedFiles);

    newFiles.forEach((file) => {
      // @ts-ignore
      if (file.size > maxSizeInBytes) {
        alert(t(`errors.fileTooBig1MB`));
        setSelectedFiles([]);
        return;
      }
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    let updatedFiles = selectedFiles;
    if (Array.isArray(updatedFiles)) {
      updatedFiles = updatedFiles.concat(newFiles);
    } else {
      updatedFiles = [...newFiles];
    }
    setSelectedFiles(updatedFiles);

    newFiles.forEach((file) => {
      // @ts-ignore
      if (file.size > maxSizeInBytes) {
        alert(t(`errors.fileTooBig1MB`));
        setSelectedFiles([]);
        return;
      }
    });
  };

  const handleRemoveFile = (indexToRemove) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);
  };

  useEffect(() => {
    input.onChange(selectedFiles);
  }, [selectedFiles]);

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={cn(styles.container, { [styles.small]: isSmall })}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={hadleFileInput}
          ref={fileInputRef}
          multiple
          className={styles.input}
          {...rest}
        />
        {selectedFiles.length > 0 ? (
          <div className={styles.files}>
            {selectedFiles.map((file, index) => (
              <div className={styles.preview} key={index}>
                <img src={URL.createObjectURL(file)} alt={file.name} />
                <button
                  onClick={() => handleRemoveFile(index)}
                  className={styles.delete}
                >
                  <span className={styles.deleteIcon}>
                    <CloseIcon />
                  </span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div
              className={styles.drop}
              onClick={() => fileInputRef.current.click()}
            >
              <div className={styles.info}>
                <h3
                  className={styles.title}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ServiceFilesInput;
