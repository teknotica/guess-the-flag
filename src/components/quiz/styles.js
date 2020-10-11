import { css } from "@emotion/core";

export default {
  quizWrapperCss: css`
    max-width: 300px;
    margin: auto;
  `,

  backLinkCss: css`
    display: inline-block;
    margin-bottom: 2rem;
  `,

  buttonBasicCss: css`
    width: 300px;
    padding: 8px 0;
    font-size: 15px;
    cursor: pointer;
  `,

  quizItemCss: css`
    margin-bottom: 3rem;
  `,

  quizFlagCss: (src) => css`
    width: 100%;
    height: 160px;
    margin: auto 0 1rem 0;
    ${src && `background: url(${src}) 0 0 no-repeat`};
    background-size: contain;
    background-position: top center;
    text-indent: -9999px;
    border: 1px solid #f3f3f3;
  `,

  buttonCss: ({
    isAnswered,
    isCurrentAnswer,
    answeredCorrectly,
    highlightCorrectAnswer,
  }) => css`
    width: 300px;
    padding: 8px 0;
    font-size: 15px;
    cursor: pointer;
    margin-bottom: 10px;
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

  resultContainerCss: css`
    margin-top: 30px;
  `,

  resultsOverlayCss: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(250, 235, 215, 0.9);
  `,

  resultsContentCss: css`
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  `,

  resultsCloseCss: css`
    position: fixed;
    top: 0;
    right: 0;
    font-size: 25px;
    width: 50px;
    height: 50px;
  `,
};
