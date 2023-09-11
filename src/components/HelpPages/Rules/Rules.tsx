import styles from "./rules.module.scss";
import Terms from "./Terms";

const Rules = () => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.content}>
          <div className={styles.info}>
            <ul className={styles.list}>
              <li>Terms of Service</li>
              <li>Requirements for advertisements</li>
              <li>Your privacy</li>
              <li>Your BBGO account</li>
              <li>Your content</li>
              <li>Your use of our services</li>
              <li>Termination</li>
              <li>Warranties and Limitations of Liability</li>
              <li>Reimbursement of losses</li>
              <li>Disputes with other users</li>
              <li>Etsy disputes</li>
              <li>Changing conditions</li>
              <li>Additional general provisions</li>
              <li>Contact info</li>
            </ul>
          </div>
          <div className={styles.main}>
            <Terms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
