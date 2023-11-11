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
    outline: #1a76e5;
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

    &:not([disabled]):focus,
    &:not([disabled]):active {
      border: 2px solid #1a76e5;
      background-color: #d0cdcd;
    }

    &:not([disabled]):hover {
      background-color: #d0cdcd;
    }

    ${isAnswered &&
    isCurrentAnswer &&
    css`
      ${answeredCorrectly ? correctAnswer : incorrectAnswer};
    `};

    ${isAnswered &&
    highlightCorrectAnswer &&
    css`
      background: #57e157;
      color: black;
    `};
  `,
};

const correctAnswer = `
  background: #57e157;
  color: black;
`;

const incorrectAnswer = `
  background: #AE192D;
  color: white;
`;
