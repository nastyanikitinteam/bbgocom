import React, { useState, useRef } from "react";
import styles from "./upload.module.scss";
import UploadIcon from "images/icons/upload-img.svg";
import CloseIcon from "images/icons/close.svg";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Отримайте ширину та висоту завантаженого зображення
    getDimensions(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    // Отримайте ширину та висоту завантаженого зображення
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

  const handleSubmit = () => {
    // Тут ви можете виконати обробку завантаженого файлу, наприклад, відправити його на сервер
    console.log(selectedFile);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null); // Видалити обраний файл
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
      {/* <button onClick={() => fileInputRef.current.click()}>Вибрати файл</button> */}
      {selectedFile ? (
        <div className={styles.uploaded}>
          {/* <p>Вибраний файл: {selectedFile.name}</p> */}
          <div className={styles.preview}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Завантажений файл"
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
          {/* <button onClick={handleSubmit}>Завантажити</button> */}
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
}

export default FileUpload;
