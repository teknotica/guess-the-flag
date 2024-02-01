/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Fragment, useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import styles from "./styles";

export const QuizResult = ({ score }) => {
  const [showMeme, setShowMeme] = useState(false);
  const memeSrc = publicPath(`/images/meme${score <= 5 ? "1" : "2"}.png`);

  return (
    <Fragment>
      <h2 css={styles.resultTitle}>Your result</h2>
      <p>{`${score} out of ${QUIZ_QUESTIONS_NUMBER} correct flags`}</p>
      <button
        css={styles.buttonBasic}
        onClick={() => setShowMeme(true)}
        disabled={showMeme}
      >
        Don't click here...
      </button>
      {showMeme && (
        <div css={styles.memeImage}>
          <img src={memeSrc} alt="Hope you learned some new flags" />
        </div>
      )}
    </Fragment>
  );
};

export default QuizResult;
