/** @jsx jsx */
import { jsx } from "@emotion/core";
import shuffle from "knuth-shuffle-seeded";
import { Fragment, useEffect, useState } from "react";

import { QUIZ_SHOW_RESULTS } from "../../const";
import getRandomNumber from "../../utils/getRandomNumber";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import QuizResult from "../quizResult";
import styles from "./styles";

const QuizAnswers = ({ correct, others }) => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answeredOption, setAnsweredOption] = useState("");
  const [showScore, setShowScore] = useState(false);
  const { getLocalItem, updateStorageVariables } = useLocalStorage();

  useEffect(() => {
    const firstOption = others.splice(getRandomNumber(0, others.length - 1), 1);
    const secondOption = others.splice(
      getRandomNumber(0, others.length - 1),
      1
    );

    const { name: firstOptionName } = firstOption[0];
    const { name: secondOptionName } = secondOption[0];

    setAnswers(shuffle([firstOptionName, secondOptionName, correct]));
  }, [correct, others]);

  const onAnswerClick = (answer, isCorrectAnswer) => {
    setIsAnswered(true);
    setAnsweredOption(answer);
    updateStorageVariables(isCorrectAnswer);

    if (getLocalItem(QUIZ_SHOW_RESULTS)) {
      setShowScore(true);
    }
  };

  if (!!!answers.length) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      {answers.map((answer, index) => {
        const isCorrectAnswer = answer === correct;

        return (
          <div key={index}>
            <button
              disabled={!!answeredOption}
              css={styles.buttonCss({
                isAnswered,
                answeredCorrectly: answeredOption === correct,
                isCurrentAnswer: answeredOption === answer,
                highlightCorrectAnswer: isCorrectAnswer,
              })}
              onClick={() => onAnswerClick(answer, isCorrectAnswer)}
            >
              {answer}
            </button>
          </div>
        );
      })}
      {showScore && <QuizResult score={getLocalItem("quiz_result")} />}
    </Fragment>
  );
};

export default QuizAnswers;
