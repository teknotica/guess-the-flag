/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import shuffle from "knuth-shuffle-seeded";
import { useCallback, useEffect, useState } from "react";

import { API_URL, QUIZ_QUESTIONS_NUMBER } from "../../const";
import publicPath from "../../utils/publicPath";
import QuizAnswers from "../quizAnswers";
import styles from "./styles";

const Quiz = ({ region }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [regionFlags, setRegionFlags] = useState();
  const selectedRegionTitle = () => {
    const suffix = region.charAt(region.length - 1) === "s" ? "'" : "'s";
    return region.charAt(0).toUpperCase() + region.slice(1) + suffix;
  };

  const fetchFlags = useCallback(async () => {
    fetch(`${API_URL}/${region}`)
      .then((resp) => resp.json())
      .then((data) => {
        setRegionFlags({ ...regionFlags, ...{ [region]: data } });
        setHasLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [region, regionFlags, setRegionFlags]);

  useEffect(() => {
    sessionStorage.setItem("quiz_answered_counter", 0);
    sessionStorage.setItem("quiz_result", 0);

    if (!regionFlags) {
      fetchFlags();
    }
    return () => {
      sessionStorage.clear();
    };
  }, [fetchFlags, region, regionFlags]);

  if (!hasLoaded) {
    return <img src={publicPath("/images/loading.gif")} alt="Loading" />;
  }

  const shuffleFlags = shuffle(regionFlags[region]);
  const slicedFlags = shuffleFlags.slice(0, QUIZ_QUESTIONS_NUMBER);
  const otherFlags = shuffleFlags.slice(QUIZ_QUESTIONS_NUMBER + 1);

  const BackLink = () => (
    <Link to="/" css={styles.backLink}>
      <img src={publicPath("/images/back.gif")} alt="Back to regions" />
    </Link>
  );

  const GotoTopLink = () => (
    <button css={styles.topLink} onClick={() => window.scrollTo(0, 0)}>
      <img src={publicPath("/images/top.gif")} alt="Back to regions" />
    </button>
  );

  return (
    <div css={styles.quizWrapper}>
      <h1>Guessing {selectedRegionTitle()} flags</h1>
      <BackLink />
      {slicedFlags.map((item) => (
        <div key={item.alpha2Code} css={styles.quizItem}>
          <div css={styles.quizFlag(item.flag)}>{item.name}</div>
          {otherFlags && (
            <QuizAnswers correct={item.name} others={otherFlags} />
          )}
        </div>
      ))}
      <BackLink />
      <GotoTopLink />
    </div>
  );
};

export default Quiz;
