import { useCallback, useState, FC } from "react";
import { Form } from "react-final-form";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import ChooseCategory from "./ChooseCategory/ChooseCategory";
import TitleLanguage from "./TitleLanguage/TitleLanguage";
import PhotoVideo from "./PhotoVideo/PhotoVideo";
import Price from "./Price/Price";
import DetailedInformation from "./DetailedInformation/DetailedInformation";
import Location from "./Location/Location";
import Contacts from "./Contacts/Contacts";
import styles from "./create-ad-form.module.scss";

interface IProps {
  currentAdInfo?: any;
  setIsOpenModal: () => void;
}

const createAdForm: FC<IProps> = ({ currentAdInfo, setIsOpenModal }) => {
  const [dataCategory, setDataCategory] = useState(
    currentAdInfo?.categoryInfo ? currentAdInfo?.categoryInfo : {}
  );

  const [choosedLang, setChoosedLang] = useState(
    currentAdInfo?.language ? currentAdInfo?.language : "EN"
  );

  const [adressName, setIsAdressName] = useState({ adress: "" });

  const [isActiveCurrency, setIsActiveCurrency] = useState(
    currentAdInfo?.currency ? currentAdInfo?.currency : "THB"
  );

  const validationSchema = yup.object().shape({
    //
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback(
    (data, form) => {
      console.log({
        ...data,
        categoryInfo: dataCategory,
        language: choosedLang,
      });
      setIsOpenModal();
    },
    [dataCategory, choosedLang]
  );

  const handleAdress = useCallback((val) => {
    setIsAdressName({ adress: val });
  }, []);

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={
          currentAdInfo
            ? {
                ...currentAdInfo,
              }
            : { ...adressName }
        }
        render={({ handleSubmit }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <ChooseCategory
              dataCategory={dataCategory}
              setDataCategory={setDataCategory}
            />
            <TitleLanguage
              choosedLang={choosedLang}
              setChoosedLang={setChoosedLang}
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
            <Location
              handleAdress={handleAdress}
              // disabled={}
            />
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
