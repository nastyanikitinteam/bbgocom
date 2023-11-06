import React, { useState, useEffect, ReactNode } from "react";
import styles from "./radio.module.scss";
import cn from "classnames";

type IRadioType = React.ComponentPropsWithoutRef<"input"> & {
  extClassName?: string;
  input;
};

const Radio: React.FC<IRadioType> = ({ extClassName, input, ...props }) => {
  return (
    <label
      className={cn(styles.container, extClassName && styles[extClassName])}
    >
      <input className={styles.input} type="radio" {...input} {...props} />
      <div className={styles.block}></div>
      {input.value && <p className={styles.text}>{input.value}</p>}
    </label>
  );
};

export default Radio;
