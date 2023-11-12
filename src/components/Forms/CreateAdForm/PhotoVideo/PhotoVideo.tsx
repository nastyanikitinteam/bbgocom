import { FC } from "react";
import { Field } from "react-final-form";
import CreateFilesInput from "components/FormElements/FilesInput/CreateFilesInput/CreateFilesInput";
import styles from "./photo-video.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

interface IProps {
  disabled?: boolean;
}

const PhotoVideo: FC<IProps> = ({ disabled }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>3</span>
        {t(`createad.photoAndVideo`)}
      </h3>
      {!disabled && (
        <div>
          <p className={styles.description}>
            <span> * {t(`createad.coverPhotoInstructions`)}</span> {"  "}
            {t(`createad.dragToReorderPhotos`)}
          </p>
          <Field
            name="photos"
            //@ts-ignore
            component={CreateFilesInput}
            title={t(`createad.dragImageOrOpenExplorer`)}
            description={t(`createad.photoSizeRecommendation`)}
          />
        </div>
      )}
    </div>
  );
};
export default PhotoVideo;
