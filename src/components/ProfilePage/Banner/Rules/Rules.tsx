import { FC } from "react";
import styles from "./rules.module.scss";

interface IProps {
  setIsOpenRules?: (bool: boolean) => void;
}

const Rules: FC<IProps> = ({ setIsOpenRules }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Rules and requirements for banner advertising
      </h3>
      <ol className={styles.list}>
        <li>Banners with any offensive or obscene content are not accepted</li>
        <li>
          The service, price or offer mentioned in the advertisement must
          correspond to reality without any additional conditions
        </li>
        <li>
          You should not use preferential expressions - The Best, The Most, The
          Leader, The Most Advantageous, etc.
        </li>
        <li>
          Ads from employment agencies and competing ad services are not
          accepted.
        </li>
        <li>
          Ads containing offers of easy earnings on the Internet, distribution
          of goods or services are not accepted
        </li>
        <li>Banners with any offensive or obscene content are not accepted</li>
        <li>
          The service, price or offer mentioned in the advertisement must
          correspond to reality without any additional conditions
        </li>
        <li>
          You should not use preferential expressions - The Best, The Most, The
          Leader, The Most Advantageous, etc.
        </li>
        <li>Advertising from employment agencies is not accepted</li>
      </ol>
    </div>
  );
};

export default Rules;
