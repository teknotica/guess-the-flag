/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { focusOnElement } from "../../utils/focusOnElement";
import publicPath from "../../utils/publicPath";
import styles from "./styles";

export const Regions = ({ list }) => {
  const location = useLocation();
  const firstRegionId = useMemo(() => {
    const region = list[0];
    return region.toLowerCase();
  }, [list]);

  useEffect(() => {
    const { hash } = location;
    // Skip to content has been clicked
    // Focus on first region option
    if (hash === "#main") {
      focusOnElement(firstRegionId);
    }
  }, [firstRegionId, location]);

  return (
    <div id="main" css={styles.base}>
      <img
        src={publicPath("/images/globe.gif")}
        alt="Globe"
        width="90"
        height="70"
      />
      <h1>Guess the flags of:</h1>
      <div css={styles.buttons}>
        {list.map((region, index) => {
          const regionLabel = region.toLowerCase();
          return (
            <Link
              id={regionLabel}
              key={index}
              to={`/quiz/${regionLabel}`}
              css={styles.button}
            >
              {region}
            </Link>
          );
        })}
      </div>
      <div>
        <p>Every time it's a different set of flags so keep guessing!</p>
      </div>
    </div>
  );
};

export default Regions;
