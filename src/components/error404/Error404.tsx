import React from "react";
import styles from "./Error404.module.css";
import logo from "../../assets/404/Team_Rocket_trio_OS_1.png";
import background from "../../assets/404/background.png";
import { useNavigate } from "react-router-dom";

interface Props {}

function Error404(props: Props) {
  const {} = props;

  const onReturnBtnClick = () => {
    window.history.back();
  };

  return (
    <div className={styles.main}>
      <img src={background} className={styles.error__img} alt="" />
      <button className={styles.error__btn} onClick={onReturnBtnClick}>
        Return
      </button>
    </div>
  );
}

export default Error404;
