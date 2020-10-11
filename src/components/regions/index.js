/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { Fragment } from "react";

import styles from "./styles";

const Regions = ({ list }) => (
  <Fragment>
    <p>Choose a region to start a quiz!</p>
    {list.map((region, index) => (
      <Link key={index} to={`quiz/${region.toLowerCase()}`}>
        <button css={styles.buttonCss}>{region}</button>
      </Link>
    ))}
  </Fragment>
);

export default Regions;
