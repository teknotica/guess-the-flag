import { css } from "@emotion/core";

export default {
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
};
