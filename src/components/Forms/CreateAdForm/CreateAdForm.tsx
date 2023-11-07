import { useCallback, useState, FC, useEffect } from "react";
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
  const [isDisabled, setIsDisabled] = useState(true);

  const [choosedLang, setChoosedLang] = useState(
    currentAdInfo?.language ? currentAdInfo?.language : "EN"
  );

  const [adressName, setIsAdressName] = useState({ adress: "" });

  const [isActiveCurrency, setIsActiveCurrency] = useState(
    currentAdInfo?.currency ? currentAdInfo?.currency : "THB"
  );

  const validationSchema = yup.object().shape({
    title: yup.string().required(`Enter title`),
    price: yup.string().required(`Enter price`),
    description: yup.string().required(`Enter description`),
    dealType: yup.mixed().required(`Selected option`),
    salesman: yup.mixed().required(`Selected option`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback(
    (data, form) => {
      console.log({
        ...data,
        language: choosedLang,
      });
      setIsOpenModal();
    },
    [dataCategory, choosedLang]
  );

  const handleAdress = useCallback((val) => {
    setIsAdressName({ adress: val });
  }, []);

  const checkDisabled = useCallback(
    (obj) => {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          setIsDisabled(false);
        }
      }
    },
    [dataCategory]
  );

  useEffect(() => {
    checkDisabled(dataCategory);
  }, [dataCategory]);

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
            : { ...adressName, categoryInfo: dataCategory }
        }
        render={({ handleSubmit }) => (
          <form className={styles.container} onSubmit={handleSubmit}>
            <ChooseCategory
              dataCategory={dataCategory}
              setDataCategory={setDataCategory}
              disabled={isDisabled}
            />
            <TitleLanguage
              choosedLang={choosedLang}
              setChoosedLang={setChoosedLang}
              disabled={isDisabled}
            />
            <PhotoVideo disabled={isDisabled} />
            <Price
              isActiveCurrency={isActiveCurrency}
              setIsActiveCurrency={setIsActiveCurrency}
              disabled={isDisabled}
            />
            <DetailedInformation disabled={isDisabled} />
            <Location handleAdress={handleAdress} disabled={isDisabled} />
            <Contacts isCreate={currentAdInfo && true} disabled={isDisabled} />
          </form>
        )}
      ></Form>
    </>
  );
};

export default createAdForm;
