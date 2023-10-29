import { useState, FC, useEffect, memo } from "react";
import styles from "./radios.module.scss";
import Radio from "components/FormElements/Radio/Radio";
import cn from "classnames";

interface IProps {
  title: string;
  list: any;
  isColumn?: boolean;
  handleDataArray: (event: any, title: any) => void;
  keyName: string;
  informationArray?: any;
}

const Radios: FC<IProps> = ({
  title,
  list,
  isColumn,
  handleDataArray,
  keyName,
  informationArray,
}) => {
  const [isCheckedElement, setIsCheckeElement] = useState();

  const handleRadioChange = (val) => {
    handleDataArray(val, keyName);
  };

  useEffect(() => {
    if (keyName in informationArray) {
      const titleValue = informationArray[keyName];
      setIsCheckeElement(titleValue);
    }
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={cn(styles.list, { [styles.column]: isColumn })}>
        {list.length > 0 ? (
          list.map((item, id) => {
            return (
              <div className={styles.item} key={id}>
                <Radio
                  name={title}
                  value={item}
                  extClassName="filter"
                  onChange={handleRadioChange}
                  isCheked={isCheckedElement}
                >
                  {item}
                </Radio>
              </div>
            );
          })
        ) : (
          <p className={styles.noresult}>No result</p>
        )}
      </div>
    </div>
  );
};

export default memo(Radios);
