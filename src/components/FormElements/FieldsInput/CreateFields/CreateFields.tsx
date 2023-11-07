import React, { useState, useRef, FC, useEffect, useCallback } from "react";
import Previews from "./Previews/Previews";
import styles from "./create-fields.module.scss";
import cn from "classnames";

import UploadIcon from "images/icons/upload-img.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  title: string;
  description: string;
  input;
}

const CreateFields: FC<IProps> = ({ title, description, input, ...rest }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const maxSizeImages = 10 * 1024 * 1024;
  const maxSizeVideos = 20 * 1024 * 1024;
  const fileInputRef = useRef(null);

  const hadleFileInput = (newFiles) => {
    let updatedFiles = [...selectedFiles];
    if (updatedFiles.length + newFiles.length > 30) {
      alert("You cannot add more than 6 files.");
      return;
    }
    newFiles.forEach((file) => {
      // @ts-ignore
      if (file.type.startsWith("video/") && file.size > maxSizeVideos) {
        alert("The file is too big. Drag a file smaller than 20 MB.");
      } else if (!file.type.startsWith("video/") && file.size > maxSizeImages) {
        alert("The file is too big. Drag a file smaller than 10 MB.");
      } else {
        updatedFiles.push(file);
      }
    });
    setSelectedFiles(updatedFiles);
  };

  //
  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    hadleFileInput(newFiles);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    handleFileChange(newFiles);
  }, []);

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      const temp = selectedFiles[draggedIndex];
      const newFiles = [...selectedFiles];
      newFiles[draggedIndex] = selectedFiles[index];
      newFiles[index] = temp;
      setSelectedFiles(newFiles);
      setDraggedIndex(index);
    }
  };

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", "");
    setDraggedIndex(index);
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
    <div className={styles.container}>
      <input
        type="file"
        accept=".mov, .jpg, .jpeg, .png"
        onChange={handleFileChange}
        ref={fileInputRef}
        multiple
        className={styles.input}
        {...rest}
      />
      {selectedFiles.length ? (
        <div
          className={styles.block}
          draggable="true"
          onDragStart={(e) => handleDragStart(e, 0)}
          onDragOver={(e) => handleDragOver(e, 0)}
          onDragEnd={handleDragEnd}
        >
          <div className={styles.mainPreview}>
            {selectedFiles[0].type.startsWith("video/") ? (
              <div className={styles.video}>
                <video
                  src={URL.createObjectURL(selectedFiles[0])}
                  muted={true}
                ></video>
              </div>
            ) : (
              <div className={styles.image}>
                <img
                  src={URL.createObjectURL(selectedFiles[0])}
                  alt={selectedFiles[0].name}
                />
              </div>
            )}
            <div className={styles.deleteContainer}>
              <div
                className={styles.deleteButton}
                onClick={() => handleRemoveFile(0)}
              >
                <CloseIcon />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={cn(styles.block)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()}
        >
          <div className={styles.info}>
            <div className={styles.icon}>
              <UploadIcon />
            </div>
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
      )}
      <Previews
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragEnd={handleDragEnd}
        handleRemoveFile={handleRemoveFile}
        fileInputRef={fileInputRef}
      />
    </div>
  );
};

export default CreateFields;
