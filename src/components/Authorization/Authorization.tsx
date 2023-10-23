import { useState, useCallback, FC } from "react";
import styles from "./authorization.module.scss";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import ConfirmNumber from "./ConfirmNumber/ConfirmNumber";
import Profile from "./Profile/Profile";

import girl from "images/authorization/girl.png";
import bag from "images/authorization/bag.png";
import image1 from "images/authorization/image-1.png";
import image2 from "images/authorization/image-2.png";
import shadow from "images/authorization/login-shadow.png";
import LogoSvg from "images/main/logo.svg";

interface IProps {
  setIsNoLogin?: () => void;
}

const Authorization: FC<IProps> = ({ setIsNoLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isConfirmNumber, setIsConfirmNumber] = useState(false);
  const [isRegisterStep, setIsRegisterStep] = useState(false);

  const changeActiveAuth = useCallback(() => {
    if (isLogin) {
      setIsLogin(false);
      setIsSignUp(true);
    } else {
      setIsLogin(true);
      setIsSignUp(false);
    }
  }, [isLogin]);

  const handleForgotPasswordModal = useCallback(() => {
    if (isForgotPassword) {
      setIsLogin(true);
      setIsForgotPassword(false);
    } else {
      setIsLogin(false);
      setIsForgotPassword(true);
    }
  }, [isForgotPassword]);

  const openNextStepSignUp = useCallback(() => {
    if (isSignUp) {
      setIsSignUp(false);
      setIsConfirmNumber(true);
    } else {
      setIsConfirmNumber(false);
      setIsRegisterStep(true);
    }
  }, [isSignUp]);

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.logo} data-aos="fade" data-aos-delay="100">
          <LogoSvg />
        </div>
        <div className={styles.girl}>
          <img src={girl.src} alt="" />
        </div>
        <div className={styles.bag} data-aos="fade-up" data-aos-delay="400">
          <img src={bag.src} alt="" />
        </div>
        <div className={styles.card} data-aos="fade-up" data-aos-delay="300">
          <img src={image1.src} alt="" />
        </div>

        <div
          className={styles.shadow}
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <img src={shadow.src} alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.icons} data-aos="fade" data-aos-delay="300">
          <img src={image2.src} alt="" />
        </div>
        {isLogin && (
          <Login
            changeActiveAuth={changeActiveAuth}
            handleForgotPasswordModal={handleForgotPasswordModal}
            setIsNoLogin={setIsNoLogin}
          />
        )}
        {isSignUp && (
          <SignUp
            changeActiveAuth={changeActiveAuth}
            openNextStepSignUp={openNextStepSignUp}
          />
        )}
        {isForgotPassword && (
          <ForgotPassword
            handleForgotPasswordModal={handleForgotPasswordModal}
          />
        )}

        {isConfirmNumber && (
          <ConfirmNumber openNextStepSignUp={openNextStepSignUp} />
        )}
        {isRegisterStep && <Profile />}
      </div>
    </div>
  );
};

export default Authorization;
