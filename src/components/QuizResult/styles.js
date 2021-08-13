import { css } from "@emotion/core";

export default {
  buttonBasic: css`
    border: none;
    width: 280px;
    height: 50px;
    font-size: 18px;
    font-family: "Ropa Sans", sans-serif;
    cursor: pointer;
    margin-bottom: 10px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    background: rgb(225, 225, 225);
  `,
  memeImage: css`
    margin-top: 30px;
  `,
  resultContainer: css`
    margin-top: 30px;
  `,
  resultTitle: css`
    h2 {
      display: inline;
    }
  `,
};
