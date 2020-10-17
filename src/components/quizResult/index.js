/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import Modal from "../modal";
import styles from "./styles";

const QuizResult = ({ score }) => {
  const [showScoreModal, setShowScoreModal] = useState(false);
  const congratsResultMsg = `You've correctly answered ${score} out of ${QUIZ_QUESTIONS_NUMBER} flags!`;

  return (
    <div css={styles.resultContainerCss}>
      <h2>Quiz results</h2>
      <p>{congratsResultMsg}</p>
      <p>
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
      </p>
      <button
        css={styles.buttonBasicCss}
        onClick={() => setShowScoreModal(true)}
      >
        Click to receive congratulations!
      </button>
      {showScoreModal && (
        <Modal onClose={() => setShowScoreModal(false)}>
          <img
            width="400px"
            src="https://i.imgflip.com/40rmc6.jpg"
            alt="Hope you learned some new flags"
          />
        </Modal>
      )}
    </div>
  );
};

export default QuizResult;
