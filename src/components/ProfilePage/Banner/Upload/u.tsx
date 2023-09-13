import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import styles from "./upload.module.scss";
import cn from "classnames";

import UploadIcon from "images/icons/upload-img.svg";

const { Dragger } = Upload;

const App: React.FC = () => {
  const [fileList, setFileList] = useState(null);

  const [fileUpload, setIsFileUpload] = useState(false);

  const props: UploadProps = {
    name: "file",
    maxCount: 1,
    // multiple: true,
    // action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      console.log("work");
      setFileList(info.fileList);
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        console.log(info.file, info.fileList);
        setIsFileUpload(true);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  useEffect(() => {
    console.log(fileList);
  }, [fileList]);

  const onPreview = async (file) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  // function formatBytes(bytes, decimals = 2) {
  //   if (bytes === 0) return "0 Bytes";

  //   const k = 1024;
  //   const dm = decimals < 0 ? 0 : decimals;
  //   const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  //   const i = Math.floor(Math.log(bytes) / Math.log(k));

  //   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  // }

  return (
    <div className={styles.container}>
      <div
        className={cn(styles.uploader, {
          [styles.hidden]: fileList?.length === 0 || fileList === null,
        })}
      >
        <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        ></Upload>
        {fileList && <img src={fileList[0].thumbUrl} />}
      </div>
      <div
        className={cn(styles.dragger, {
          [styles.hidden]: fileList?.length > 0,
        })}
      >
        {/* <ImgCrop rotationSlider aspect={2 / 1} showReset={true}> */}
        <Dragger {...props}>
          <div className={styles.icon}>
            <UploadIcon />
          </div>
          <h3 className={styles.title}>
            Drag the image or <span> Open explorer</span>
          </h3>
          <p
            className={styles.description}
          >{`size <100KB and file type PNG/GIF/JPEG`}</p>
        </Dragger>
        {/* </ImgCrop> */}
      </div>
    </div>
  );
};

export default App;
