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

  quizFlag: (countryCode) => css`
    width: 100%;
    padding-top: 56.25%;
    margin: auto;
    background: url("https://flagcdn.com/160x120/${countryCode}.png") 0 0
      no-repeat;
    background-position: center;
    text-indent: -9999px;
  `,
};
