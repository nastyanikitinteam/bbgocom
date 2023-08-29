import { useState, useMemo } from "react";
import NoCard from "./NoCard/NoCard";
import cn from "classnames";
import styles from "./wallet.module.scss";

import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";

import WalletIcon from "images/icons/wallet-big.svg";
import PlusIcon from "images/icons/plus.svg";
import VisaIcon from "images/icons/visa.svg";
import MastercardIcon from "images/icons/mastercard.svg";

const Wallet = () => {
  const [isWallet, setIsWallet] = useState(false);
  const [isActiveNewCard, setIsActiveNewCard] = useState(false);

  const cardList = useMemo(
    () => [
      {
        id: 0,
        typeOfCard: "Mastercard",
        icon: <MastercardIcon />,
        number: "5908 5908 5908 5908",
        date: "03/24",
        cvv: "123",
        isMainCard: true,
      },
      {
        id: 1,
        typeOfCard: "Visa",
        icon: <VisaIcon />,
        number: "5908 5908 5908 5908",
        date: "03/24",
        cvv: "123",
        isMainCard: false,
      },
      {
        id: 2,
        typeOfCard: "Visa",
        icon: <VisaIcon />,
        number: "5908 5908 5908 5908",
        date: "03/24",
        cvv: "123",
        isMainCard: false,
      },
    ],
    []
  );

  return (
    <div className={styles.container}>
      {isWallet ? (
        <div className={styles.items}>
          {cardList.map((item, index) => {
            return <Card key={index} item={item} />;
          })}
          <AddCard
            isActiveNewCard={isActiveNewCard}
            setIsActiveNewCard={setIsActiveNewCard}
          />
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
