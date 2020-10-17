/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import Modal from "../modal";
import styles from "./styles";

const QuizResult = ({ score }) => {
  const [showScoreModal, setShowScoreModal] = useState(false);

  return (
    <div css={styles.resultContainerCss}>
      <h2>Woohoo!</h2>
      <p>{`You've correctly answered ${score} out of ${QUIZ_QUESTIONS_NUMBER} flags!`}</p>
      <p>
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
      </p>
      <button
        css={styles.buttonBasicCss}
        onClick={() => setShowScoreModal(true)}
      >
        DON'T CLICK HERE!!!
      </button>
      {showScoreModal && (
        <Modal onClose={() => setShowScoreModal(false)}>
          <img
            src="https://i.imgflip.com/40rmc6.jpg"
            alt="Hope you learned some new flags"
          />
        </Modal>
      )}
    </div>
  );
};

export default QuizResult;
