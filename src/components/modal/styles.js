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
    background: #00f260; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #0575e6,
      #00f260
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #0575e6,
      #00f260
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    @media screen and (min-width: 740px) {
      padding-top: 2rem;
    }
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

    img {
      max-width: 100%;
      height: auto;
    }
  `,
};
