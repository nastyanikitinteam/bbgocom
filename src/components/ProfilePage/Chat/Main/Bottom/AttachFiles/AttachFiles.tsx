import React, { useState, useRef, FC, useEffect } from "react";
import styles from "./attach-files.module.scss";
import AttachIcon from "images/icons/attach.svg";
import { useTranslation } from "react-i18next";

interface IProps {
  setSelectedFiles: (bool: any) => void;
  selectedFiles: any;
  input;
}

const AttachFiles: FC<IProps> = ({
  setSelectedFiles,
  selectedFiles,
  input,
  ...rest
}) => {
  const fileInputRef = useRef(null);
  const maxSizeInBytes = 10 * 1024 * 1024;
  const { t } = useTranslation();

  const hadleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    let updatedFiles = selectedFiles;
    if (Array.isArray(updatedFiles)) {
      if (updatedFiles.length + newFiles.length > 10) {
        alert(t(`errors.selectNoMoreThan10Files`));
      } else {
        updatedFiles = updatedFiles.concat(newFiles);
      }
    } else {
      updatedFiles = [...newFiles];
    }
    setSelectedFiles(updatedFiles);
    newFiles.forEach((file) => {
      // @ts-ignore
      if (file.size > maxSizeInBytes) {
        alert(t(`errors.fileTooBig`));
        setSelectedFiles([]);
        return;
      }
    });
  };

  useEffect(() => {
    input.onChange(selectedFiles);
  }, [selectedFiles]);

  return (
    <label className={styles.container}>
      <AttachIcon />
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={hadleFileInput}
        ref={fileInputRef}
        multiple
        className={styles.input}
        {...rest}
      />
    </label>
  );
};

export default AttachFiles;
