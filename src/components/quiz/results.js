/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import styles from "./styles";

const QuizResult = ({ score }) => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const congratsResultMsg = `You've correctly answered ${score} out of ${QUIZ_QUESTIONS_NUMBER} flags!`;

  return (
    <div css={styles.resultContainerCss}>
      <h2>Quiz results</h2>
      <p>{congratsResultMsg}</p>
      <p>
        <span role="img" aria-label="clap">
          👏🏻
        </span>
        <span role="img" aria-label="clap">
          👏🏻
        </span>
        <span role="img" aria-label="clap">
          👏🏻
        </span>
      </p>
      <button
        css={styles.buttonBasicCss}
        onClick={() => setShowScoreModal(true)}
      >
        Receive congratulations
      </button>
      {showScoreModal && (
        <div css={styles.resultsOverlayCss}>
          <div css={styles.resultsContentCss}>
            <img
              width="400px"
              src="https://i.imgflip.com/40rmc6.jpg"
              alt="Hope you learned some new flags"
            />
          </div>
          <Link to="/" css={styles.resultsCloseCss}>
            X
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuizResult;
