import { useCallback, useState, FC, useEffect } from "react";
import { Form } from "react-final-form";
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

import cn from "classnames";
import styles from "./create-ad-form.module.scss";

interface IProps {
  currentAdInfo?: any;
  setIsOpenModal: () => void;
}

const createAdForm: FC<IProps> = ({ currentAdInfo, setIsOpenModal }) => {
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

  const onSubmit = useCallback((data, form) => {
    console.log(
      { ...data, ...dataCategory, ["language"]: isActiveLang },
      "data"
    );
    setIsOpenModal();
  }, []);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={{
          ...currentAdInfo,
        }}
        render={({ handleSubmit }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <ChooseCategory
              dataCategory={dataCategory}
              setDataCategory={setDataCategory}
            />
            <TitleLanguage
              isActiveLang={isActiveLang}
              setIsActiveLang={setIsActiveLang}
              // disabled={}
            />
            <PhotoVideo
            // disabled={}
            />
            <Price
              isActiveCurrency={isActiveCurrency}
              setIsActiveCurrency={setIsActiveCurrency}
              // disabled={}
            />
            <DetailedInformation
            // disabled={}
            />
            {/* <Location
              dataArray={adInfo}
              setDataArray={setAdInfo}
              handleDataArray={handleDataArray}
              // disabled={}
            /> */}
            <Contacts
              isCreate={currentAdInfo && true} // disabled={}
            />
          </form>
        )}
      ></Form>
    </>
  );
};

export default createAdForm;
