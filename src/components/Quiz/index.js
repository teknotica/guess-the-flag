/** @jsx jsx */
import { jsx } from "@emotion/core";
import shuffle from "knuth-shuffle-seeded";
import { useCallback, useEffect, useState } from "react";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import { getFlagsByRegion } from "../../services";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import publicPath from "../../utils/publicPath";
import BackLink from "../BackLink";
import GotoTopLink from "../GotoTopLink";
import QuizAnswers from "../QuizAnswers";
import styles from "./styles";

const Quiz = ({ region }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [regionFlags, setRegionFlags] = useState();
  const selectedRegionTitle = () => {
    const suffix = region.charAt(region.length - 1) === "s" ? "'" : "'s";
    return region.charAt(0).toUpperCase() + region.slice(1) + suffix;
  };
  const { setLocalItem } = useLocalStorage();

  const fetchFlags = useCallback(async () => {
    try {
      const data = await getFlagsByRegion(region);
      setRegionFlags({ ...regionFlags, ...{ [region]: data } });
      setHasLoaded(true);
    } catch (error) {
      console.log(error);
    }
  }, [region, regionFlags, setRegionFlags]);

  useEffect(() => {
    setLocalItem("quiz_answered_counter", 0);
    setLocalItem("quiz_result", 0);

    if (!regionFlags) {
      fetchFlags();
    }
    return () => {
      sessionStorage.clear();
    };
  }, [fetchFlags, region, regionFlags, setLocalItem]);

  if (!hasLoaded) {
    return <img src={publicPath("/images/loading.gif")} alt="Loading" />;
  }

  const shuffleFlags = shuffle(regionFlags[region]);
  const slicedFlags = shuffleFlags.slice(0, QUIZ_QUESTIONS_NUMBER);
  const otherFlags = shuffleFlags.slice(QUIZ_QUESTIONS_NUMBER + 1);

  const calculateProgress = (index) =>
    ((index + 1) * 100) / QUIZ_QUESTIONS_NUMBER;

  return (
    <div css={styles.quizWrapper}>
      <h1>Guessing {selectedRegionTitle()} flags</h1>
      <BackLink />
      {slicedFlags.map((item, index) => (
        <div
          key={item.alpha2Code}
          css={styles.quizItem(calculateProgress(index))}
        >
          <div css={styles.quizFlag(item.flag)} />
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