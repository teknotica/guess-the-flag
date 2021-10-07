/** @jsx jsx */
import { jsx } from "@emotion/core";
import shuffle from "knuth-shuffle-seeded";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { QUIZ_QUESTIONS_NUMBER } from "../../const";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getFlagsByRegion } from "../../services";
import { regionTitle } from "../../transformers/regionTitle";
import { focusOnQuestion } from "../../utils/focusOnQuestion";
import publicPath from "../../utils/publicPath";
import BackLink from "../BackLink";
import GotoTopLink from "../GotoTopLink";
import QuizAnswers from "../QuizAnswers";
import styles from "./styles";

const Quiz = () => {
  const { region } = useParams();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [regionFlags, setRegionFlags] = useState();
  const [errorFetching, setErrorFetching] = useState(false);
  const { setLocalItem } = useLocalStorage();

  const fetchFlags = useCallback(async () => {
    try {
      const data = await getFlagsByRegion(region);
      const { error } = data;

      if (error) {
        setErrorFetching(true);
      } else {
        setRegionFlags({ ...regionFlags, ...{ [region]: data } });
        setHasLoaded(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, [region, regionFlags]);

  useEffect(() => {
    setLocalItem("quiz_answered_counter", 0);
    setLocalItem("quiz_result", 0);

    if (!regionFlags) {
      fetchFlags();
    }
    return () => {
      sessionStorage.clear();
    };
  }, [fetchFlags, regionFlags, setLocalItem]);

  useEffect(() => {
    focusOnQuestion(0);
  }, []);

  if (errorFetching) {
    return <div>There was an error fetching the countries</div>;
  }

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
      <h1>Guessing {regionTitle(region)} flags</h1>
      <BackLink id="top-link" />
      <div id="questions-list">
        {slicedFlags.map((item, index) => (
          <div
            key={item.alpha2Code}
            css={styles.quizItem(calculateProgress(index))}
          >
            <div css={styles.quizFlag(item.alpha2Code.toLowerCase())} />
            {otherFlags && (
              <QuizAnswers
                correct={item.name}
                others={otherFlags}
                questionIndex={index}
              />
            )}
          </div>
        ))}
      </div>
      <BackLink id="bottom-link" />
      <GotoTopLink />
    </div>
  );
};

export default Quiz;
