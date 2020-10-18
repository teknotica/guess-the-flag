/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import styles from "./styles";

const QuizResult = ({ score }) => {
  const [showMeme, setShowMeme] = useState(false);

  return (
    <div css={styles.resultContainer}>
      <div css={styles.resultTitle}>
        <h2>Your result</h2>
      </div>
      <p>{`${score} out of ${QUIZ_QUESTIONS_NUMBER} correct flags`}</p>
      <button css={styles.buttonBasic} onClick={() => setShowMeme(true)}>
        DON'T CLICK HERE!!!
      </button>
      {showMeme && (
        <div css={styles.memeImage}>
          <img
            src={publicPath("/images/meme.png")}
            alt="Hope you learned some new flags"
          />
        </div>
      )}
    </div>
  );
};

export default QuizResult;
