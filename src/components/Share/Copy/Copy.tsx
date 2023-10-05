import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import styles from "./copy.module.scss";

import CopyIcon from "images/icons/copy.svg";

const Copy = () => {
  const [inputValue, setInputValue] = useState("https://bbgo.com/ad_id1234456");
  const [currentFullUrl, setCurrentFullUrl] = useState("");
  const router = useRouter();
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  useEffect(() => {
    const baseUrl = window.location.origin;
    const fullUrl = baseUrl + router.asPath;
    setCurrentFullUrl(fullUrl);
  }, [router.asPath]);

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        value={currentFullUrl}
        onChange={(e) => setInputValue(e.target.value)}
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
