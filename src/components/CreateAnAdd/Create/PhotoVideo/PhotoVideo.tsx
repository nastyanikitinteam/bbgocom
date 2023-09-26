import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Textarea from "components/FormElements/Textarea/Textarea";
import FilesUpload from "../../FilesUpload/FilesUpload";
import styles from "./photo-video.module.scss";
import cn from "classnames";

interface IProps {
  dataArray: any;
  setDataArray: (bool: any) => void;
  disabled: boolean;
}

const PhotoVideo: FC<IProps> = ({ dataArray, setDataArray, disabled }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleTitleInput = (event) => {
    if (event.length) {
      setDataArray((prev) => ({ ...prev, title: event }));
    } else {
      if (dataArray.title) {
        let obj = dataArray;
        delete obj.title;
        setDataArray(obj);
      }
    }
  };

  const handleRemoveFile = () => {
    setSelectedFiles(null);
  };

  useEffect(() => {
    if (selectedFiles.length) {
      setDataArray((prev) => ({ ...prev, files: selectedFiles }));
    } else {
      if (dataArray.files) {
        let obj = dataArray;
        delete obj.files;
        setDataArray(obj);
      }
    }
  }, [selectedFiles]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>3</span>Photo and video
      </h3>
      {!disabled && (
        <>
          <div>
            <p className={styles.description}>
              <span> * The first photo will be on the cover of the ad.</span>{" "}
              {"  "}
              Drag to reorder photos.
            </p>
            <FilesUpload
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
              title="Drag the image or <span>Open explorer</span>"
              description="1600x1200 or higher is recommended. <br> Max. 10 MB each (20 MB for video)"
            />
          </div>
        </>
      )}
    </div>
  );
};
export default PhotoVideo;
