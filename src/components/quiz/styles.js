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

  quizItem: css`
    margin-bottom: 3rem;
  `,

  quizFlag: (src) => css`
    width: 100%;
    padding-top: 56.25%;
    margin: auto 0 1rem 0;
    ${src && `background: url(${src}) 0 0 no-repeat`};
    background-size: cover;
    background-position: 50% 50%;
    text-indent: -9999px;
    border: 1px solid #f3f3f3;
  `,
};
