import React, { useRef, FC, useEffect } from "react";
import styles from "./banner-file-input.module.scss";
import CloseIcon from "images/icons/close.svg";
import UploadIcon from "images/icons/upload-img.svg";
import { useTranslation } from "react-i18next";
interface IProps {
  title: string;
  description: string;
  isSmall?: boolean;
  setSelectedFile: (bool: any) => void;
  selectedFile: any;
  setImageDimensions: (bool: any) => void;
  imageDimensions: any;
  input;
}

const BannerFileInput: FC<IProps> = ({
  title,
  description,
  isSmall,
  setSelectedFile,
  selectedFile,
  setImageDimensions,
  imageDimensions,
  input,
  ...rest
}) => {
  const fileInputRef = useRef(null);
  const maxSizeInBytes = 1024 * 1024;
  const { t } = useTranslation();

  const hadleFileInput = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    if (file.size > maxSizeInBytes) {
      alert(t(`errors.fileTooBig1MB`));
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
      alert(t(`errors.fileTooBig1MB`));
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

  useEffect(() => {
    input.onChange(selectedFile);
  }, [selectedFile]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={hadleFileInput}
          ref={fileInputRef}
          multiple
          className={styles.input}
          {...rest}
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
              <h3
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className={styles.description}>{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BannerFileInput;
