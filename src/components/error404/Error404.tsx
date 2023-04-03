import React from "react";
import styles from "./Error404.module.css";
import logo from "../../assets/404/Team_Rocket_trio_OS_1.png";

interface Props {}

function Error404(props: Props) {
  const {} = props;

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.error__h1}>404</h1>
        <img src={logo} className={styles.error_img} />
      </div>
    </div>
  );
}

export default Error404;
