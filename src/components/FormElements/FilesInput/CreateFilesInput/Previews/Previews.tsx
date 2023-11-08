import React, { useState, useRef, FC, useEffect, useCallback } from "react";
import styles from "./previews.module.scss";
import cn from "classnames";

import CloseIcon from "images/icons/close.svg";
import PlusIcon from "images/icons/plus.svg";

interface IProps {
  selectedFiles: any;
  setSelectedFiles: (any: any) => void;
  handleDragStart: (any: any, num: number) => void;
  handleDragOver: (any: any, num: number) => void;
  handleDragEnd: () => void;
  handleRemoveFile: (num: number) => void;
  fileInputRef: any;
}

const Previews: FC<IProps> = ({
  selectedFiles,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
  handleRemoveFile,
  fileInputRef,
}) => {
  const emptyBlocks = Array(6).fill(null);

  return (
    <div
      className={cn(styles.bottom, {
        [styles.big]: selectedFiles.length > 6,
      })}
    >
      <div className={styles.previews}>
        {[...Array(Math.max(emptyBlocks.length, selectedFiles.length))].map(
          (_, index) => {
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
                    <div
                      className={styles.deleteButton}
                      onClick={() => handleRemoveFile(index)}
                    >
                      <CloseIcon />
                    </div>
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
          }
        )}
      </div>
    </div>
  );
};

export default Previews;
