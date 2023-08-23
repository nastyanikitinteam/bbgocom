import { useRef, useEffect, useState, ReactNode, FC } from "react";
import { createPortal } from "react-dom";
import styles from "./portal-container.module.scss";

interface PortalProps {
  children: ReactNode;
}

const Portal: FC<PortalProps> = ({ children }) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    console.log(ref.current);
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className={styles.container}>{children}</div>,
        ref.current
      )
    : null;
};

export default Portal;
