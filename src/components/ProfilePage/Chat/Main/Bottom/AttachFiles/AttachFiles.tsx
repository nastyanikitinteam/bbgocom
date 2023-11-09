import React, { useState, useRef, FC, useEffect } from "react";
import styles from "./attach-files.module.scss";
import CloseIcon from "images/icons/close.svg";
import AttachIcon from "images/icons/attach.svg";
import cn from "classnames";

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

  const hadleFileInput = (e) => {
    const newFiles = Array.from(e.target.files);
    let updatedFiles = selectedFiles;
    if (Array.isArray(updatedFiles)) {
      if (updatedFiles.length + newFiles.length > 10) {
        alert("You can select no more than 10 files.");
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
        alert("The file is too big");
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
