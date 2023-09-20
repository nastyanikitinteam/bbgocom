import React, { useState, useRef, FC, useEffect } from "react";
import styles from "./file-upload.module.scss";
import UploadIcon from "images/icons/upload-img.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  setSelectedFiles: (bool: any) => void;
  selectedFiles: any;
  title: string;
  description: string;
}

const FilesUpload: FC<IProps> = ({
  setSelectedFiles,
  selectedFiles,
  title,
  description,
}) => {
  const fileInputRef = useRef(null);
  const maxSizeInBytes = 1024 * 1024;

  const handleFileChange = (e) => {
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
        alert("The file is too big. Drag a file smaller than 1 MB.");
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
        alert("The file is too big. Drag a file smaller than 1 MB.");
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
    console.log(selectedFiles);
  }, [selectedFiles]);

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
        multiple
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
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <h3
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className={styles.description}>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FilesUpload;
