import React, { ReactNode, FC, useEffect } from "react";
import styles from "./modal.module.scss";
import cn from "classnames";

import CloseIcon from "images/icons/modal-close.svg";

interface IProps {
  children: ReactNode;
  closeModal: () => void;
  type: string;
  otherCloseIcon?: boolean;
  mobileIsBottom?: boolean;
}

const Modal: FC<IProps> = ({
  children,
  closeModal,
  type,
  otherCloseIcon,
  mobileIsBottom,
}) => {
  return (
    <div className={cn(styles.container, "modal")}>
      <div
        className={cn(styles.block, `modal-${type}`, {
          [styles.noModal]: mobileIsBottom,
        })}
      >
        <div
          className={cn(styles.close, { [styles.other]: otherCloseIcon })}
          onClick={closeModal}
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
