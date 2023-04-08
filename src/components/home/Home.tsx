import React from "react";
import styles from "./Home.module.css";
import background from "../../assets/Yoda.png";
import cloud from "../../assets/Vector.png";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

interface Props {}

function Home(props: Props) {
  const {} = props;

  const navigate = useNavigate();

  const onBtnClick = () => {
    navigate("/characters")
  }

  return (
    <div>
      <Header />
      <div className={styles.Home}>
        <div>
          <h1 className={styles.Home__h1}>Find all your favorite character</h1>
          <div>
            <h2 className={styles.Home__h2}>
              You can find out all the information about your favorite
              characters
            </h2>
          </div>
          <div>
            <button className={styles.Home__button} onClick={onBtnClick}>See more...</button>
          </div>
        </div>
        <div>
          <img src={background} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
