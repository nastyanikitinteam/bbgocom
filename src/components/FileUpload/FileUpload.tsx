import React, { useState, useRef, FC } from "react";
import styles from "./fileUpload.module.scss";
import UploadIcon from "images/icons/upload-img.svg";
import CloseIcon from "images/icons/close.svg";

interface IProps {
  setSelectedFile: (bool: any) => void;
  selectedFile: any;
  setImageDimensions: (bool: any) => void;
  imageDimensions: any;
}

const FileUpload: FC<IProps> = ({
  setSelectedFile,
  selectedFile,
  setImageDimensions,
  imageDimensions,
}) => {
  const fileInputRef = useRef(null);
  const maxSizeInBytes = 1024 * 1024;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file.size > maxSizeInBytes) {
      alert("The file is too big. Drag a file smaller than 1 MB.");
      setSelectedFile(null);
      setImageDimensions({ width: 0, height: 0 });
      return;
    }

    getDimensions(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    if (file.size > maxSizeInBytes) {
      alert("The file is too big. Drag a file smaller than 1 MB.");
      setSelectedFile(null);
      setImageDimensions({ width: 0, height: 0 });
      return;
    }

    getDimensions(file);
  };

  const getDimensions = (file) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      setImageDimensions({ width, height });
    };
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setImageDimensions({ width: 0, height: 0 });
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      {selectedFile ? (
        <div className={styles.uploaded}>
          <div className={styles.preview}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt={selectedFile.name}
            />
          </div>

          <p className={styles.description}>
            Size:{" "}
            <span className={styles.black}>
              {imageDimensions.width}x{imageDimensions.height} px
            </span>
          </p>
          <button onClick={handleRemoveFile} className={styles.delete}>
            <CloseIcon />
          </button>
        </div>
      ) : (
        <>
          <div
            className={styles.drop}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current.click()}
          >
            <div className={styles.icon}>
              <UploadIcon />
            </div>
            <h3 className={styles.title}>
              Drag the image or <span> Open explorer</span>
            </h3>
            <p
              className={styles.description}
            >{`size <100KB and file type PNG/GIF/JPEG`}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUpload;
