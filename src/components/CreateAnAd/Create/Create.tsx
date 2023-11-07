import { useState, FC } from "react";
import { useRouter } from "next/router";
import useMediaQuery from "src/utils/useMediaQuery";

import Modal from "components/Modal/Modal";
import SuccessfulCreate from "components/Modal/SuccessfulCreate/SuccessfulCreate";

import CreateAdForm from "components/Forms/CreateAdForm/CreateAdForm";

import styles from "./create.module.scss";

interface IProps {
  currentAdInfo?: any;
}

const Create: FC<IProps> = ({ currentAdInfo }) => {
  const isMobile = useMediaQuery(768);
  const [adInfo, setAdInfo] = useState(currentAdInfo ? currentAdInfo : {});
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
                Cancel
              </div>
              <h3 className={styles.title}>New Add</h3>
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
