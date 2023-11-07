import { useMemo, useState, FC, useEffect } from "react";
import { Field } from "react-final-form";
import FileInputField from "components/FormElements/FieldsInput/CreateFields/CreateFields";
import styles from "./photo-video.module.scss";
import cn from "classnames";

interface IProps {
  disabled?: boolean;
}

const PhotoVideo: FC<IProps> = ({ disabled }) => {
  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>3</span>Photo and video
      </h3>
      {!disabled && (
        <div>
          <p className={styles.description}>
            <span> * The first photo will be on the cover of the ad.</span>{" "}
            {"  "}
            Drag to reorder photos.
          </p>
          <Field
            name="photos"
            //@ts-ignore
            component={FileInputField}
            title="Drag the image or <span>Open explorer</span>"
            description="1600x1200 or higher is recommended. <br> Max. 10 MB each (20 MB for video)"
          />
        </div>
      )}
    </div>
  );
};
export default PhotoVideo;
