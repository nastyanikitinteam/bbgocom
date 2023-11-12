import { useState, FC, useEffect } from "react";
import { Field, useFormState } from "react-final-form";

import SelectContainer from "components/FormElements/Select/Select";
import styles from "./selects.module.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { locationList } from "config/location";

interface IProps {
  handleCoordinates: (val: any) => void;
  setIsMapZoom: (val: number) => void;
  handleAdress: (val: string) => void;
}

const Selects: FC<IProps> = ({
  handleCoordinates,
  setIsMapZoom,
  handleAdress,
}) => {
  const { t } = useTranslation();
  const { values } = useFormState();

  const [selectedRegion, setSelectedRegion] = useState({});
  const [selectedProvince, setSelectedProvince] = useState({});
  const [selectedDistrict, setSelectedDistrict] = useState({});
  const [selectedSubDistrict, setSelectedSubDistrict] = useState({});

  const [isClearSubDistrict, setIsClearSubDistrict] = useState(false);
  const [isClearDistrict, setIsClearDistrict] = useState(false);
  const [isClearProvince, setIsClearProvince] = useState(false);

  useEffect(() => {
    if (values.location?.subdistrict) {
      handleCoordinates(values.location.subdistrict);
      setIsMapZoom(14);
      handleAdress("");
    } else if (values.location?.district) {
      handleCoordinates(values.location.district);
      setIsMapZoom(12);
      handleAdress("");
    } else if (values.location?.province) {
      handleCoordinates(values.location.province);
      setIsMapZoom(10);
      handleAdress("");
    } else if (values?.location?.region) {
      handleCoordinates(values.location.region);
      setIsMapZoom(7);
      handleAdress("");
    }
  }, [values]);

  return (
    <>
      <div className={styles.item}>
        <p className={styles.label}>{t(`createad.region`)}</p>
        <div className={styles.input}>
          <Field
            name="location.region"
            //@ts-ignore
            component={SelectContainer}
            options={locationList}
            placeholder={t(`createad.selectRegion`)}
            classname="big"
            onChange={(e) => {
              setSelectedRegion(e);
              setIsClearProvince(true);
            }}
          />
        </div>
      </div>
      <div
        className={cn(styles.item, {
          //@ts-ignore
          [styles.disabled]: !selectedRegion?.province,
        })}
      >
        <p className={styles.label}>{t(`createad.province`)}</p>
        <div className={styles.input}>
          <Field
            name="location.province"
            //@ts-ignore
            component={SelectContainer}
            //@ts-ignore
            options={selectedRegion?.province}
            placeholder={t(`createad.selectProvince`)}
            classname="big"
            onChange={(e) => {
              setSelectedProvince(e);
              setIsClearDistrict(true);
              setIsClearProvince(false);
            }}
            isClearValue={isClearProvince}
          />
        </div>
      </div>
      <div
        className={cn(styles.item, {
          //@ts-ignore
          [styles.disabled]: !selectedProvince?.district,
        })}
      >
        <p className={styles.label}>{t(`createad.district`)}</p>
        <div className={styles.input}>
          <Field
            name="location.district"
            //@ts-ignore
            component={SelectContainer}
            //@ts-ignore
            options={selectedProvince?.district}
            placeholder={t(`createad.selectDistrict`)}
            classname="big"
            onChange={(e) => {
              setSelectedDistrict(e);
              setIsClearSubDistrict(true);
              setIsClearDistrict(false);
            }}
            isClearValue={isClearDistrict}
          />
        </div>
      </div>
      <div
        className={cn(styles.item, {
          //@ts-ignore
          [styles.disabled]: !selectedDistrict?.subdistrict,
        })}
      >
        <p className={styles.label}>{t(`createad.subDistrict`)}</p>
        <div className={styles.input}>
          <Field
            name="location.subdistrict"
            //@ts-ignore
            component={SelectContainer}
            //@ts-ignore
            options={selectedDistrict?.subdistrict}
            placeholder={t(`createad.selectSubDistrict`)}
            classname="big"
            onChange={(e) => {
              setSelectedSubDistrict(e);
              setIsClearSubDistrict(false);
            }}
            isClearValue={isClearSubDistrict}
          />
        </div>
      </div>
    </>
  );
};
export default Selects;
