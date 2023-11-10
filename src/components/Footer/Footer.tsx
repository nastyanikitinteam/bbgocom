import { footerArray } from "./config";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.scss";
import qrCode from "images/main/qr-code.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.container}>
      <div className="wrapper">
        <div className={styles.content}>
          {footerArray.map(({ id, title, list }) => {
            return (
              <div className={styles.block} key={id}>
                <h3 className={styles.title}>{t(title)}</h3>
                <ul className={styles.list}>
                  {list.map(({ id, name, link }) => {
                    return (
                      <li key={id} className={styles.item}>
                        <a href={link}>{t(name)}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className={styles.block}>
            <h3 className={styles.title}>{t("footer.app")}</h3>
            <p className={styles.text}>{t("footer.scanQRCodeToInstallApp")}</p>
            <div className={styles.qrcode}>
              <img src={qrCode.src} alt="" />
            </div>
          </div>
          <div className={styles.button}>
            <div className="default-button sm">{t("footer.reportBug")}</div>
          </div>
        </div>
        <p className={styles.copyright}>{t("footer.copyrightBBGO")}</p>
      </div>
    </footer>
  );
};

export default Footer;
