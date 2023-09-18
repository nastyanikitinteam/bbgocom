import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import NoCard from "./NoCard/NoCard";
import useMediaQuery from "src/utils/useMediaQuery";
import PortalContainer from "components/PortalContainer/PortalContainer";
import cn from "classnames";
import styles from "./wallet.module.scss";

import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";

import WalletIcon from "images/icons/wallet-big.svg";
import PlusIcon from "images/icons/plus.svg";
import VisaIcon from "images/icons/visa.svg";
import MastercardIcon from "images/icons/mastercard.svg";
import ArrowSvg from "images/icons/drop.svg";

const Wallet = () => {
  const [isWallet, setIsWallet] = useState(false);
  const [isActiveNewCard, setIsActiveNewCard] = useState(false);
  const isMobile = useMediaQuery(768);

  const router = useRouter();

  const [cardList, setCardList] = useState([
    {
      id: 0,
      typeOfCard: "Mastercard",
      icon: <MastercardIcon />,
      number: "1234567890123456",
      date: "03/24",
      cvv: "123",
      isMainCard: true,
    },
    {
      id: 1,
      typeOfCard: "Visa",
      icon: <VisaIcon />,
      number: "5908590859085908",
      date: "03/24",
      cvv: "123",
      isMainCard: false,
    },
    {
      id: 2,
      typeOfCard: "Visa",
      icon: <VisaIcon />,
      number: "5908590859085908",
      date: "03/24",
      cvv: "123",
      isMainCard: false,
    },
  ]);

  const back = () => {
    router.back();
  };

  const changeMainCard = useCallback((id: number) => {
    setCardList((prev) =>
      prev.map((item) => ({
        ...item,
        isMainCard: item.id === id,
      }))
    );
  }, []);

  return (
    <div className={styles.container}>
      {isMobile ? (
        <div className={styles.top}>
          <div className="back" onClick={back}>
            <span className="arrow">
              <ArrowSvg />
            </span>
            Back
          </div>
          <h3 className={styles.title}>Wallet</h3>
          <a
            href="#"
            className={styles.addCard}
            onClick={() => setIsActiveNewCard(true)}
          >
            <span className={styles.icon}>
              <PlusIcon />
            </span>
            Add New
          </a>
        </div>
      ) : (
        <></>
      )}
      {isMobile && (
        <PortalContainer>
          <div
            className={cn(styles.blockBg, { [styles.active]: isActiveNewCard })}
            onClick={() => setIsActiveNewCard(false)}
          ></div>
          <AddCard
            isActiveNewCard={isActiveNewCard}
            setIsActiveNewCard={setIsActiveNewCard}
            setIsWallet={setIsWallet}
          />
        </PortalContainer>
      )}
      {isWallet ? (
        <div className={styles.items}>
          {cardList.map((item, index) => {
            return (
              <Card
                key={index}
                item={item}
                changeMainCard={() => changeMainCard(item.id)}
              />
            );
          })}
          {!isMobile && (
            <AddCard
              isActiveNewCard={isActiveNewCard}
              setIsActiveNewCard={setIsActiveNewCard}
            />
          )}
        </div>
      ) : (
        <NoCard
          setIsWallet={setIsWallet}
          setIsActiveNewCard={setIsActiveNewCard}
        />
      )}
    </div>
  );
};

export default Wallet;
