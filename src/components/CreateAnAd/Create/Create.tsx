import { useMemo, useCallback, useState, useEffect, FC } from "react";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import useMediaQuery from "src/utils/useMediaQuery";
import ChooseCategory from "./ChooseCategory/ChooseCategory";
import TitleLanguage from "./TitleLanguage/TitleLanguage";
import PhotoVideo from "./PhotoVideo/PhotoVideo";
import Price from "./Price/Price";
import DetailedInformation from "./DetailedInformation/DetailedInformation";
import Location from "./Location/Location";
import Contacts from "./Contacts/Contacts";
import Modal from "components/Modal/Modal";
import SuccessfulModal from "./SuccessfulModal/SuccessfulModal";

import cn from "classnames";
import styles from "./create.module.scss";

import ArrowSvg from "images/icons/drop.svg";
interface IProps {
  isCurrentAd?: any;
}

const Create: FC<IProps> = ({ isCurrentAd }) => {
  const isMobile = useMediaQuery(768);
  const [dataArray, setDataArray] = useState(isCurrentAd ? isCurrentAd : {});
  const [isOpenModal, setsOpenModal] = useState(false);

  const router = useRouter();

  const validationSchema = yup.object().shape({});
  const validate = validateForm(validationSchema);

  const handleDataArray = (event, title) => {
    if (event?.length) {
      setDataArray((prev) => ({ ...prev, [title]: event }));
    } else {
      if (dataArray[title]) {
        let obj = dataArray;
        delete obj[title];
        setDataArray(obj);
      }
    }
  };

  const cancel = () => {
    setDataArray({});
    router.back();
  };

  useEffect(() => {
    console.log(dataArray, "data");
  }, [dataArray]);

  const onSubmit = useCallback((data, form) => {
    console.log(dataArray);
    setsOpenModal(true);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className="wrapper">
          {isMobile && (
            <div className={styles.top}>
              <div className="cancel" onClick={cancel}>
                Cancel
              </div>
              <h3 className={styles.title}>New Add</h3>
            </div>
          )}
          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <ChooseCategory
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                />
                <TitleLanguage
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                  handleDataArray={handleDataArray}
                  // @ts-ignore
                  disabled={!dataArray?.salesman}
                />
                <PhotoVideo
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                  handleDataArray={handleDataArray}
                  // @ts-ignore
                  disabled={!dataArray?.description}
                />
                <Price
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                  handleDataArray={handleDataArray}
                  // @ts-ignore
                  disabled={!isCurrentAd && !dataArray?.files}
                />
                <DetailedInformation
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                  handleDataArray={handleDataArray}
                  // @ts-ignore
                  disabled={!dataArray?.price}
                />
                <Location
                  dataArray={dataArray}
                  setDataArray={setDataArray}
                  handleDataArray={handleDataArray}
                  // @ts-ignore
                  disabled={!dataArray?.information?.totalArea}
                />
                <Contacts
                  dataArray={dataArray}
                  handleDataArray={handleDataArray}
                  setDataArray={setDataArray}
                  // @ts-ignore
                  disabled={!dataArray?.location?.name}
                  isCreate={isCurrentAd && true}
                />
              </form>
            )}
          ></Form>
        </div>
      </section>
      {isOpenModal && (
        <Modal
          closeModal={() => setsOpenModal(false)}
          type="successful"
          otherCloseIcon
        >
          <SuccessfulModal closeModal={cancel} isCurrentAd />
        </Modal>
      )}
    </>
  );
};

export default Create;
