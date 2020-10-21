import { css } from "@emotion/core";

export default {
  quizWrapper: css`
    max-width: 400px;
    margin: auto;
    padding-top: 60px;

    @media screen and (min-width: 670px) {
      padding-top: 40px;
    }
  `,

  backLink: css`
    display: inline-block;
    margin-bottom: 1rem;
  `,

  topLink: css`
    display: none;
    position: fixed;
    right: 20px;
    bottom: 20px;
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    text-decoration: underline;
    font: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;

    @media screen and (min-width: 670px) {
      display: block;
    }
  `,

  quizItem: (progress) => css`
    position: relative;
    margin-bottom: 3rem;
    border-top: 8px solid #00f260;
    background-color: rgb(207 196 182 / 50%);

    &:before {
      content: "";
      position: absolute;
      top: -8px;
      left: 0;
      width: ${progress}%;
      height: 8px;
      background-color: #0575e6;
      z-index: 100;
    }
  `,

  quizFlag: (src) => css`
    width: 100%;
    padding-top: 56.25%;
    margin: auto;
    ${src && `background: url(${src}) 0 0 no-repeat`};
    background-size: cover;
    background-position: 0 0;
    text-indent: -9999px;
  `,
};
