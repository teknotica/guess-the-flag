/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import publicPath from "../../utils/publicPath";
import styles from "./styles";

const Regions = ({ list }) => (
  <div css={styles.base}>
    <img src={publicPath("/images/globe.gif")} alt="Globe" />
    <h1>Guess the flags of:</h1>
    <div css={styles.buttons}>
      {list.map((region, index) => (
        <Link
          key={index}
          to={`quiz/${region.toLowerCase()}`}
          css={styles.button}
        >
          {region}
        </Link>
      ))}
    </div>
  </div>
);

export default Regions;
