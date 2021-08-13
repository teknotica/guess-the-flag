import { css } from "@emotion/core";

export default {
  answerWrapper: css`
    padding: 30px 0;
  `,
  button: ({
    isAnswered,
    isCurrentAnswer,
    answeredCorrectly,
    highlightCorrectAnswer,
  }) => css`
    border: none;
    width: 300px;
    height: 50px;
    font-size: 18px;
    font-family: "Ropa Sans", sans-serif;
    cursor: pointer;
    margin-bottom: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    background: rgb(225, 225, 225);

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &:focus,
    &:active {
      border: 2px solid #1a76e5;
    }

    ${isAnswered &&
    isCurrentAnswer &&
    css`
      background: ${answeredCorrectly ? "#79c979" : "#d73b0a"};
      color: white;
    `};
    ${isAnswered &&
    highlightCorrectAnswer &&
    css`
      background: #79c979;
      color: white;
    `};
  `,
};
