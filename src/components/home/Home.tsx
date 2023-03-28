import React from "react";
import styles from "./Home.module.css";
import background from "../../assets/Yoda.png";
import cloud from "../../assets/Vector.png";

interface Props {}

function Home(props: Props) {
  const {} = props;

  return (
    <div className={styles.Home}>
      <div>
        <h1 className={styles.Home__h1}>Find all your favorite character</h1>
        <div>
          <h2 className={styles.Home__h2}>
            You can find out all the information about your favorite characters
          </h2>
        </div>
        <div>
          <button className={styles.Home__button}>See more...</button>
        </div>
      </div>
      <div>
        <img src={background} alt=""/>
      </div>
    </div>
  );
}

export default Home;
