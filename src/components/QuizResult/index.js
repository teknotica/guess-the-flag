/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import styles from "./styles";

const QuizResult = ({ score }) => {
  const [showMeme, setShowMeme] = useState(false);
  const memeSrc = publicPath(`/images/meme${score <= 5 ? "1" : "2"}.png`);

  return (
    <div css={styles.resultContainer}>
      <div css={styles.resultTitle}>
        <h2>Your result</h2>
      </div>
      <p>{`${score} out of ${QUIZ_QUESTIONS_NUMBER} correct flags`}</p>
      <button
        css={styles.buttonBasic}
        onClick={() => setShowMeme(true)}
        disabled={showMeme}
      >
        *DON'T* CLICK HERE
      </button>
      {showMeme && (
        <div css={styles.memeImage}>
          <img src={memeSrc} alt="Hope you learned some new flags" />
        </div>
      )}
    </div>
  );
};

export default QuizResult;
