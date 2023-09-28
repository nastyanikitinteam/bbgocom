import { useMemo, useCallback, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BreadCrumbs from "components/BreadCrumbs/BreadCrumbs";
import { Form, Field } from "react-final-form";
import Select from "components/Select/Select";
import * as yup from "yup";
import { validateForm } from "../../../utils/validateForm";
import FormInput from "components/FormElements/FormInput/FormInput";
import styles from "./advertise-with-us-page.module.scss";
import { CountriesList } from "../../Authorization/config";
import Country from "../../Authorization/Country/Country";
import Textarea from "components/FormElements/Textarea/Textarea";
import cn from "classnames";

const AdvertiseWithUs = () => {
  const [isCountryList, setIsCountryList] = useState([]);
  const router = useRouter();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required(`Введіть електрону пошту`),
    message: yup.string().email().required(`Введіть електрону пошту`),
    // password: yup.string().required(`Wrong phone format`),
  });

  const validate = validateForm(validationSchema);

  const onSubmit = useCallback((data, form) => {
    console.log(data);
  }, []);

  const breadCrumbs = useMemo(
    () => [
      {
        id: 0,
        title: "Home",
        url: "/",
      },
      {
        id: 0,
        title: "Advertise with us",
      },
    ],
    []
  );

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

  const back = () => {
    router.back();
  };

  return (
    <section className={styles.container}>
      <div className="wrapper">
        <BreadCrumbs crumbs={breadCrumbs} />
        <div className={styles.content}>
          <h1 className={styles.title}>Advertise with us</h1>
          <p className={styles.text}>
            If you need display advertising, please fill out the form below. We
            will determine your needs and form a suitable offer. If you would
            like to advertise your product or service, you can do so{" "}
            <a href="/">here</a>. If you have a question about working with the
            service, you can find the answer <a href="/">here</a>.
          </p>
          {isCountryList.length && (
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.item}>
                    <Field
                      name="name"
                      placeholder={"Enter name"}
                      type="text"
                      component={FormInput}
                      extClassName="firstName"
                      label="Name"
                    />
                  </div>
                  <div className={cn(styles.phone, styles.item)}>
                    <div className={styles.code}>
                      <p className={styles.label}>Your phone</p>
                      <Select
                        options={isCountryList}
                        isSearch
                        classname="phone"
                        title="Choose Country"
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
                      />
                    </div>
                  </div>
                  <div className={styles.items}>
                    <div className={styles.item}>
                      <Field
                        name="company"
                        placeholder={"Enter name"}
                        type="text"
                        component={FormInput}
                        extClassName="company"
                        label="Company’s name"
                      />
                    </div>
                    <div className={styles.item}>
                      <Field
                        name="email"
                        placeholder={"Enter email"}
                        type="email"
                        component={FormInput}
                        extClassName="email"
                        label="Email for Request"
                      />
                    </div>
                  </div>
                  <div className={styles.item}>
                    <Field
                      name="message"
                      placeholder={"Enter Message"}
                      type="text"
                      component={Textarea}
                      label="Message"
                    />
                  </div>
                  <p className={styles.description}>
                    By clicking «Post Ad» you accept the{" "}
                    <Link href="/">License Agreement</Link> and agree to the{" "}
                    <Link href="/">Privacy Policy</Link>
                  </p>
                  <div className={styles.buttons}>
                    <div className={styles.button}>
                      <div
                        onClick={back}
                        className={cn("default-button  border", styles.button)}
                      >
                        Cancel
                      </div>
                    </div>
                    <div className={styles.button}>
                      <button
                        type="submit"
                        className={cn("default-button", styles.button)}
                        aria-label={`Send`}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              )}
            ></Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;
