import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import styles from "./styles.module.scss";

function Score() {
  const { score } = useSelector((state: RootState) => state.game);

  return (
    <div className={styles.Score}>
      <span className={styles.Label}>
        Best: <span>0</span>
      </span>
      <span className={styles.Label}>
        Score: <span>{score}</span>
      </span>
    </div>
  );
}

export default Score;
