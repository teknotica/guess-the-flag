import { css } from "@emotion/core";

export default {
  overlay: css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 4rem 2rem 2rem;
    position: fixed;
    overflow: hidden;
    z-index: 10;
    background: rgb(238, 174, 202);
    background: radial-gradient(
      circle,
      rgba(238, 174, 202, 0.8) 0%,
      rgba(148, 187, 233, 0.8) 100%
    );
  `,
  modal: css`
    position: relative;
    padding: 0 1.2rem 2rem;
    background: rgb(198 208 230 / 55%);
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
  `,
  content: css`
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 70vh;
  `,
};
