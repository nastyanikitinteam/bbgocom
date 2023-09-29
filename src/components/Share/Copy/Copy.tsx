import { useMemo, useState, useRef } from "react";
import styles from "./copy.module.scss";

import CopyIcon from "images/icons/copy.svg";

const Copy = () => {
  const [inputValue, setInputValue] = useState("https://bbgo.com/ad_id1234456");
  const inputRef = useRef(null);

  const handleCopyClick = () => {
    inputRef.current.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="text"
        value={inputValue}
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
