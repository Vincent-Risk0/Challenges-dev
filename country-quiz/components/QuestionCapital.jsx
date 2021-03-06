//DATE : 10/28/20

import React, { useState } from "react";
import capitalGame from "../lib/Games/capitalGame";
import Button from "./Button";
import styles from "./questionCapital.module.scss";

const QuestionCapital = ({ fourCountries, answer, state }) => {
  const [isStart, useIsStart] = useState(false);

  if (isStart) {
    const abcd = ["A", "B", "C", "D"];
    return fourCountries.map((country, index) => {
      return (
        <div
          className={styles.button}
          key={country.id}
          onClick={() =>
            country.disabled
              ? ""
              : capitalGame(country, fourCountries, answer, state)
          }
        >
          <Button
            question={true}
            isActive={country.isActive}
            isDisabled={country.disabled}
            style={country.country.countryName === answer.country.countryName}
          >
            <div className={styles.abcd}>{abcd[index]}</div>
            <div>{country.country.countryName}</div>
          </Button>
        </div>
      );
    });
  } else {
    return <button onClick={() => useIsStart(true)}>Start</button>;
  }
};

export default QuestionCapital;
