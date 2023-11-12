import { useState, FC } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";
import Modal from "components/Modal/Modal";
import SuccessfulCreate from "components/Modal/SuccessfulCreate/SuccessfulCreate";
import { useTranslation } from "react-i18next";
import CreateAdForm from "components/Forms/CreateAdForm/CreateAdForm";

import styles from "./create.module.scss";

interface IProps {
  currentAdInfo?: any;
}

const Create: FC<IProps> = ({ currentAdInfo }) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(768);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const router = useRouter();

  const cancel = () => {
    router.back();
  };

  return (
    <>
      <section className={styles.container}>
        <div className="wrapper">
          {isMobile && (
            <div className={styles.top}>
              <div className="cancel" onClick={cancel}>
                {t(`general.cancel`)}
              </div>
              <h3 className={styles.title}>{t(`createad.newAd`)}</h3>
            </div>
          )}
          <CreateAdForm
            currentAdInfo={currentAdInfo}
            setIsOpenModal={() => setIsOpenModal(true)}
          />
        </div>
      </section>
      {isOpenModal && (
        <Modal
          closeModal={() => setIsOpenModal(false)}
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
