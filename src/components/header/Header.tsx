import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/Rectangle48.png";
import { NavLink } from "react-router-dom";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/people">Characters</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
