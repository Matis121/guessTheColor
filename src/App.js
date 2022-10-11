import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [color, setColor] = useState();
  const [answers, setAnswers] = useState([]);
  const [buttonTitle, setButtonTitle] = useState("");

  const generateColor = () => {
    const digits = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  const setColorAndAnswers = () => {
    const actualColor = generateColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, generateColor(), generateColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    setColorAndAnswers();
  }, []);

  const handleAnswerClicked = (answer) => {
    if (answer === color) {
      setColorAndAnswers();
      setButtonTitle("Correct Answer!");
    } else {
      setButtonTitle("Wrong Answer!");
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.app__title}>
        <h1>Guess the color</h1>
      </div>
      <div className={styles.app__guessBox} style={{ background: color }}></div>
      {buttonTitle === "Correct Answer!" ? (
        <div style={{ color: "green" }}>{buttonTitle}</div>
      ) : (
        <div style={{ color: "red" }}>{buttonTitle}</div>
      )}
      <div className={styles.app__guessButtons}>
        {answers.map((answer) => (
          <button key={answer} onClick={() => handleAnswerClicked(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
