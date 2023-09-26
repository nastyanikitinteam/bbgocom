import React, { useState, useRef, FC, useEffect } from "react";
import styles from "./files-upload.module.scss";
import UploadIcon from "images/icons/upload-img.svg";
import CloseIcon from "images/icons/close.svg";
import PlusIcon from "images/icons/plus.svg";
import cn from "classnames";

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
  const emptyBlocks = Array(6).fill(null);
  const maxSizeImages = 10 * 1024 * 1024;
  const maxSizeVideos = 20 * 1024 * 1024;
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", "");
    setDraggedIndex(index);
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

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const hadleFileInput = (newFiles) => {
    let updatedFiles = [...selectedFiles];

    if (updatedFiles.length + newFiles.length > 6) {
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

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    hadleFileInput(newFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    hadleFileInput(newFiles);
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
        accept=".mov, .jpg, .jpeg, .png"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
        multiple
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
              <button
                className={styles.deleteButton}
                onClick={() => handleRemoveFile(0)}
              >
                <CloseIcon />
              </button>
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
      <div className={styles.bottom}>
        {emptyBlocks.map((_, index) => {
          if (selectedFiles.length > index) {
            return (
              <div
                className={styles.preview}
                key={index}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragEnd={handleDragEnd}
              >
                {selectedFiles[index].type.startsWith("video/") ? (
                  <div className={styles.video}>
                    <video
                      src={URL.createObjectURL(selectedFiles[index])}
                      muted={true}
                    ></video>
                  </div>
                ) : (
                  <div className={styles.image}>
                    <img
                      src={URL.createObjectURL(selectedFiles[index])}
                      alt={selectedFiles[index].name}
                    />
                  </div>
                )}
                <div className={styles.deleteContainer}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleRemoveFile(index)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div
                className={styles.preview}
                key={index}
                onClick={() => fileInputRef.current.click()}
              >
                <span className={styles.icon}>
                  <PlusIcon />
                </span>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FilesUpload;
