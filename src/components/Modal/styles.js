import { css } from "@emotion/core";

export default {
  overlay: css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    overflow: hidden;
    padding: 1rem;
    z-index: 10;
    background: #00f260;
    background: linear-gradient(to right, rgb(5 117 230 / 70%), #00f260);
    @media screen and (min-width: 740px) {
      padding-top: 2rem;
    }
  `,
  modal: css`
    position: relative;
    padding: 2rem;
    background: rgb(222 222 222 / 80%);
    border-radius: 5px;
    max-width: 700px;
    margin: auto;
    overflow-y: auto;
  `,
  header: css`
    display: flex;
    height: 40px;
    justify-content: flex-end;
    align-items: center;
  `,
  button: css`
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    font: inherit;
    font-size: inherit;
    font-weight: 500;
    cursor: pointer;
    display: inherit;
    letter-spacing: inherit;
    line-height: inherit;

    &:focus {
      border: 2px solid #1a76e5;
    }
  `,
  content: css`
    overflow-y: auto;
    overflow-x: hidden;

    img {
      max-width: 100%;
      height: auto;
    }
  `,
};
