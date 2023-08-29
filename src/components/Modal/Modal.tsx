import React, { ReactNode, FC } from "react";
import styles from "./modal.module.scss";
import cn from "classnames";

import CloseIcon from "images/icons/modal-close.svg";

interface IProps {
  children: ReactNode;
  closeModal: (bool: boolean) => void;
  type: string;
  otherCloseIcon?: boolean;
}

function Modal({
  children,
  closeModal,
  type,
  otherCloseIcon,
}: IProps): JSX.Element {
  return (
    <div className={cn(styles.container, "modal")}>
      <div className={cn(styles.block, `modal-${type}`)}>
        <div
          className={cn(styles.close, { [styles.other]: otherCloseIcon })}
          onClick={() => closeModal(false)}
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
