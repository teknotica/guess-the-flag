/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Link } from "react-router-dom";

import publicPath from "../../utils/publicPath";
import styles from "./styles";

export const BackLink = ({ id }) => (
  <Link id={id} to="/" css={styles.backLink}>
    <img
      src={publicPath("/images/back.gif")}
      alt="Back to regions"
      width="75"
      height="42"
    />
  </Link>
);

export default BackLink;
