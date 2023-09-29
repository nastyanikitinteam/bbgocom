import { useMemo, useState, FC, useEffect } from "react";
import { Form, Field } from "react-final-form";
import FormInput from "components/FormElements/FormInput/FormInput";
import Select from "components/Select/Select";
import Textarea from "components/FormElements/Textarea/Textarea";
import SelectContainer from "components/Select/Select";
import { CountriesList } from "components/Authorization/config";
import Country from "components/Authorization/Country/Country";
import styles from "./contacts.module.scss";
import cn from "classnames";

import PostIcon from "images/icons/post.svg";

import { regionList, adressList } from "../DetailedInformation/config";

interface IProps {
  dataArray: any;
  disabled: boolean;
  handleDataArray: (event: any, title: any) => void;
  setDataArray: (bool: any) => void;
}

const Contacts: FC<IProps> = ({
  dataArray,
  disabled,
  handleDataArray,
  setDataArray,
}) => {
  const [isCountryList, setIsCountryList] = useState([]);
  const [isPhone, setIsPhone] = useState({});

  const handlePhoneCode = (value: any) => {
    if (value != null) {
      setIsPhone((prev) => ({ ...prev, code: value?.value }));
    }
  };

  const handlePhoneNumber = (value, title) => {
    if (value.length > 0) {
      setIsPhone((prev) => ({ ...prev, [title]: value }));
    } else {
      if (isPhone[title]) {
        const newObj = { ...isPhone };
        delete newObj[title];
        setIsPhone(newObj);
      }
    }
  };

  const processingCounrtryList = () => {
    let arr = CountriesList.map(({ value, icon, name, code }) => {
      return {
        value: `${value} ${code}`,
        label: <Country icon={icon} name={name} code={code} />,
      };
    });
    setIsCountryList(arr);
  };

  useEffect(() => {
    if (!isCountryList.length) {
      processingCounrtryList();
    }
  }, [CountriesList]);

  useEffect(() => {
    setDataArray((prev) => ({ ...prev, phone: isPhone }));
  }, [isPhone]);

  return (
    <div className={styles.container}>
      <h3 className={cn(styles.title, { [styles.disabled]: disabled })}>
        <span className={styles.num}>7</span>Contacts
      </h3>
      {disabled && (
        <>
          <div className={styles.items}>
            {isCountryList.length && (
              <div className={styles.item}>
                <p className={styles.label}>Phone</p>
                <div className={cn(styles.input, styles.phone)}>
                  <div className={styles.code}>
                    <Select
                      options={isCountryList}
                      isSearch
                      classname="phone"
                      title="Choose Country"
                      onChange={handlePhoneCode}
                    />
                  </div>
                  <div className={styles.number}>
                    <Field
                      name="phone"
                      type="text"
                      placeholder={"Phone"}
                      component={FormInput}
                      number
                      extClassName="noIcon"
                      keyName="number"
                      onChange={handlePhoneNumber}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={styles.item}>
              <p className={styles.label}>Email</p>
              <div className={styles.input}>
                <Field
                  name="email"
                  type="email"
                  placeholder={"Enter email"}
                  component={FormInput}
                  extClassName="email"
                  keyName="email"
                  onChange={handleDataArray}
                />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              If you want to receive messages from users ( your mail will be
              visible to the sender only if the question is answered)
            </p>
            <p>
              By clicking «Post Ad» you accept the{" "}
              <a href="#">License Agreement</a> and agree to the{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </div>
          <div className={styles.buttons}>
            <div className={cn("default-button border", styles.button)}>
              Cancel
            </div>
            <button
              type="submit"
              className={cn("default-button", styles.button)}
              aria-label={`Post Ad`}
            >
              <span className="icon">
                <PostIcon />
              </span>
              Post Ad
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Contacts;
