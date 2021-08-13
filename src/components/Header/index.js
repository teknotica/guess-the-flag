/** @jsx jsx */
import { jsx } from "@emotion/core";

import styles from "./styles";

const Header = () => (
  <header css={styles.header}>
    <span>Powered by </span>
    <a href="https://restcountries.eu/" target="blank">
      REST Countries API
    </a>
    <span> / </span>
    <a href="https://twitter.com/teknotica" target="blank">
      @teknotica
    </a>
  </header>
);

export default Header;
