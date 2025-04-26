import { css } from "@emotion/core";

export default {
  base: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  buttons: css`
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  `,
  button: css`
    padding: 1em;
    width: 110px;
    cursor: pointer;
    vertical-align: middle;
    transform: perspective(1px) translateZ(0);
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    background: #e1e1e1;
    transition-property: color;
    transition-duration: 0.3s;
    color: black;

    &:visited,
    &:focus,
    &:active {
      color: black;
    }

    &:last-child {
      margin-right: 0;
    }

    &:before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #7ca4e5;
      transform: scaleX(0);
      transform-origin: 50%;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }

    &:hover:before,
    &:focus:before,
    &:active:before {
      transform: scaleX(1);
    }
  `,
};
