import { useCallback, useState, FC, useEffect } from "react";
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
import SuccessfulCreate from "components/Modal/SuccessfulCreate/SuccessfulCreate";

import cn from "classnames";
import styles from "./create.module.scss";

import ArrowSvg from "images/icons/drop.svg";
interface IProps {
  currentAdInfo?: any;
}

const Create: FC<IProps> = ({ currentAdInfo }) => {
  const isMobile = useMediaQuery(768);
  const [adInfo, setAdInfo] = useState(currentAdInfo ? currentAdInfo : {});

  const [dataCategory, setDataCategory] = useState(
    currentAdInfo?.subcategorieItem
      ? {
          category: currentAdInfo?.category,
          subcategorie: currentAdInfo?.subcategorie,
          subcategorieItem: currentAdInfo?.subcategorieItem,
        }
      : {}
  );

  const [isActiveLang, setIsActiveLang] = useState(
    currentAdInfo?.language ? currentAdInfo?.language : "EN"
  );

  const [isActiveCurrency, setIsActiveCurrency] = useState(
    currentAdInfo?.currency ? currentAdInfo?.currency : "THB"
  );

  const [isOpenModal, setsOpenModal] = useState(false);

  const router = useRouter();

  const validationSchema = yup.object().shape({
    //
  });

  const validate = validateForm(validationSchema);

  const handleDataArray = (event, title) => {
    if (event?.length) {
      setAdInfo((prev) => ({ ...prev, [title]: event }));
    } else {
      // if (adInfo[title]) {
      //   let obj = adInfo;
      //   delete obj[title];
      //   setAdInfo(obj);
      // }
    }
  };

  const cancel = () => {
    setAdInfo({});
    router.back();
  };

  const onSubmit = useCallback((data, form) => {
    // console.log(dataCategory, "dataCategory");
    console.log(
      { ...data, ...dataCategory, ["language"]: isActiveLang },
      "data"
    );
    // console.log(adInfo);
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
            initialValues={{
              ...currentAdInfo,
            }}
            render={({ handleSubmit }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <ChooseCategory
                  dataCategory={dataCategory}
                  setDataCategory={setDataCategory}
                />
                <TitleLanguage
                  isActiveLang={isActiveLang}
                  setIsActiveLang={setIsActiveLang}
                  // disabled={}
                />
                {/* <PhotoVideo
                  dataArray={adInfo}
                  setDataArray={setAdInfo}
                  handleDataArray={handleDataArray}
                   // disabled={}
                /> */}
                <Price
                  isActiveCurrency={isActiveCurrency}
                  setIsActiveCurrency={setIsActiveCurrency}
                  // disabled={}
                />
                <DetailedInformation
                // disabled={}
                />
                <Location
                  dataArray={adInfo}
                  setDataArray={setAdInfo}
                  handleDataArray={handleDataArray}
                  // disabled={}
                />
                <Contacts
                  isCreate={currentAdInfo && true} // disabled={}
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
          <SuccessfulCreate closeModal={cancel} isCurrentAd />
        </Modal>
      )}
    </>
  );
};

export default Create;
