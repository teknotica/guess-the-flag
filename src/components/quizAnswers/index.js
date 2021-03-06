/** @jsx jsx */
import { jsx } from "@emotion/core";
import shuffle from "knuth-shuffle-seeded";
import { useEffect, useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
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
  const [showScoreModal, setShowScoreModal] = useState(false);
  const {
    getLocalItem,
    getAnsweredCount,
    increaseResultVariables,
  } = useLocalStorage();

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
    increaseResultVariables(isCorrectAnswer);

    const answered = getAnsweredCount();

    if (answered === QUIZ_QUESTIONS_NUMBER) {
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
    <div css={styles.answerWrapper}>
      {answers.map((answer, index) => {
        const isCorrectAnswer = answer === correct;

        return (
          <button
            key={index}
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
        );
      })}
      {showScoreModal && (
        <Modal onClose={onCloseModal}>
          <QuizResult score={getLocalItem("quiz_result")} />
        </Modal>
      )}
    </div>
  );
};

export default QuizAnswers;
