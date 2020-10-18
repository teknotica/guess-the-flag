/** @jsx jsx */
import { jsx } from "@emotion/core";
import shuffle from "knuth-shuffle-seeded";
import { Fragment, useEffect, useState } from "react";

import { QUIZ_SHOW_RESULTS } from "../../const";
import getRandomNumber from "../../utils/getRandomNumber";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import publicPath from "../../utils/publicPath";
import Modal from "../modal";
import QuizResult from "../quizResult";
import styles from "./styles";

const QuizAnswers = ({ correct, others }) => {
  const [answers, setAnswers] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answeredOption, setAnsweredOption] = useState("");
  const [finishedQuiz, setFinishedQuiz] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
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
      setFinishedQuiz(true);
      setTimeout(() => {
        setShowScoreModal(true);
      }, 1000);
    }
  };

  const onCloseModal = () => {
    setShowScoreModal(false);
    window.scrollTo(0, 0);
  };

  if (!!!answers.length) {
    return <img src={publicPath("/images/loading.gif")} alt="Loading" />;
  }

  return (
    <Fragment>
      {answers.map((answer, index) => {
        const isCorrectAnswer = answer === correct;

        return (
          <div key={index}>
            <button
              disabled={!!answeredOption}
              css={styles.button({
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
      {finishedQuiz && showScoreModal && (
        <Modal onClose={onCloseModal}>
          <QuizResult score={getLocalItem("quiz_result")} />
        </Modal>
      )}
    </Fragment>
  );
};

export default QuizAnswers;