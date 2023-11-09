import { useCallback, useMemo, useState, FC } from "react";
import { Form, Field } from "react-final-form";
import Textarea from "components/FormElements/Textarea/Textarea";
import FormInput from "components/FormElements/FormInput/FormInput";
import * as yup from "yup";
import { validateForm } from "../../../../../utils/validateForm";
import cn from "classnames";

import { messageTags } from "config/messageTags";

import AttachFiles from "./AttachFiles/AttachFiles";

import styles from "./bottom.module.scss";
import CloseIcon from "images/icons/close.svg";
import SendIcon from "images/icons/send.svg";

interface IProps {
  setSelectedFiles: (bool: any) => void;
  selectedFiles: any;
}

const Bottom: FC<IProps> = ({ setSelectedFiles, selectedFiles }) => {
  const validationSchema = yup.object().shape({
    // email: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
    form.restart();
    setSelectedFiles([]);
  }, []);

  const handleRemoveFile = (indexToRemove) => {
    const updatedFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(updatedFiles);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      mutators={{
        changeValue: ([field, value], state, { changeValue }) => {
          changeValue(state, field, () => value);
        },
      }}
      render={({ handleSubmit, form }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <div className={styles.main}>
            <Field
              name="files"
              //@ts-ignore
              component={AttachFiles}
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            />
            {/* <AttachFiles
              selectedFiles={selectedFiles}
              setSelectedFiles={setSelectedFiles}
            /> */}
            <div className={styles.item}>
              <Field
                name="message"
                component={Textarea}
                rows={1}
                placeholder="text"
                extClassName="chat"
              />
            </div>
            <button type="submit" className={styles.button} aria-label={`Send`}>
              <SendIcon />
            </button>
          </div>
          {selectedFiles.length !== 0 && (
            <div className={styles.files}>
              {selectedFiles.map((file, index) => (
                <div className={styles.preview} key={index}>
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className={styles.delete}
                  >
                    <span className={styles.deleteIcon}>
                      <CloseIcon />
                    </span>
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className={styles.bottom}>
            <div className={styles.tags}>
              {messageTags.map(({ id, title }) => {
                return (
                  <div
                    className={cn(styles.tag, {
                      [styles.active]: form.getState().values.message === title,
                    })}
                    key={id}
                    onClick={() => {
                      form.mutators.changeValue("message", title);
                    }}
                  >
                    {title}
                  </div>
                );
              })}
            </div>
          </div>
        </form>
      )}
    ></Form>
  );
};

export default Bottom;
