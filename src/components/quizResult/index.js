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
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
        <h2>Woohoo!</h2>
        <img src={publicPath("/images/clap.gif")} alt="Clap" />
      </div>
      <p>
        {`You've answered correctly ${score} out of ${QUIZ_QUESTIONS_NUMBER} flags!`}
      </p>
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
