import React, { ReactNode, FC, useEffect, useRef } from "react";
import PortalContainer from "components/PortalContainer/PortalContainer";
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
  const containerRef = useRef(null as null | HTMLDivElement);

  return (
    <PortalContainer>
      <div className={cn(styles.container, "modal")}>
        <div className={styles.back} onClick={closeModal}></div>
        <div
          className={cn(styles.block, `modal-${type}`, {
            [styles.noModal]: mobileIsBottom,
          })}
          ref={containerRef}
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
    </PortalContainer>
  );
};

export default Modal;
