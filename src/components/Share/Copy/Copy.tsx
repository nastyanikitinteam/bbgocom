import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./copy.module.scss";
import cn from "classnames";

import CopyIcon from "images/icons/copy.svg";

const Copy = () => {
  // const [inputValue, setInputValue] = useState("https://bbgo.com/ad_id1234456");
  const [isCopied, setIsCopied] = useState(false);
  const [currentFullUrl, setCurrentFullUrl] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setIsCopied(true);
  };

  useEffect(() => {
    const baseUrl = window.location.origin;
    const fullUrl = baseUrl + router.asPath;
    setCurrentFullUrl(fullUrl);
  }, [router.asPath]);

  return (
    <div className={cn(styles.container, { [styles.copy]: isCopied })}>
      <input
        ref={inputRef}
        type="text"
        value={currentFullUrl}
        // onChange={(e) => setInputValue(e.target.value)}
        readOnly
        className="default-input sm withoutIcon"
      />
      <button onClick={handleCopyClick} className={styles.button}>
        <CopyIcon />
      </button>
    </div>
  );
};

export default Copy;
