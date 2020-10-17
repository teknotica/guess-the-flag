import { css } from "@emotion/core";

export default {
  quizWrapperCss: css`
    max-width: 400px;
    margin: auto;
  `,

  backLinkCss: css`
    display: inline-block;
    margin-bottom: 2rem;
  `,

  quizItemCss: css`
    margin-bottom: 3rem;
  `,

  quizFlagCss: (src) => css`
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
