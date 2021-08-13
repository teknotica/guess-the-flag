/** @jsx jsx */
import { jsx } from "@emotion/core";

import publicPath from "../../utils/publicPath";
import styles from "./styles";

const GotoTopLink = () => (
  <button css={styles.topLink} onClick={() => window.scrollTo(0, 0)}>
    <img
      src={publicPath("/images/top.gif")}
      alt="Scroll to top"
      width="40"
      height="60"
    />
  </button>
);
export default GotoTopLink;
