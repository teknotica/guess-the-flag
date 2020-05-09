/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { useEffect, useCallback, useState } from 'react';
import { Link } from "@reach/router"
import shuffle from 'knuth-shuffle-seeded'

import QuizAnswers from './quiz.answers';
import { API_URL, QUIZ_QUESTIONS_COUNT } from '../const';

import { 
    quizWrapperCss, 
    quizItemCss, 
    quizFlagCss, 
    backLinkCss 
} from './quiz.styles';

export const Quiz = ({ region, regionFlags, setRegionFlags }) => {
    const [loading, setLoading] = useState(true);
    const regionFlagsInStore = !!regionFlags[region];

    // Fetch API for regions from the URL
    const fetchFlags = useCallback(async () => {
        fetch(`${API_URL}/${region}`)
            .then(resp => resp.json())
            .then(data => {
                // Add fetched region flags in state
                setRegionFlags({...regionFlags, ...{[region]: data}});
                setLoading(false);
            })
    }, [region, regionFlags, setRegionFlags]);
    
  
    useEffect(() => {
        // If region flags are not in the state
        // fetch and save 
        if (!regionFlagsInStore) {
            fetchFlags();
        }
    }, [fetchFlags, regionFlagsInStore])

    if (loading && !regionFlagsInStore) {
        return <div>Loading flags...</div>;
    }

    const shuffleFlags = shuffle(regionFlags[region]);
    const slicedFlags = shuffleFlags.slice(0, QUIZ_QUESTIONS_COUNT);
    const otherFlags = shuffleFlags.slice(QUIZ_QUESTIONS_COUNT + 1);

    return (
        <div css={quizWrapperCss}>
            <Link to="/" css={backLinkCss}>{`<< Back to regions`}</Link>
            {slicedFlags.map((item, index) => (
                <div key={item.alpha2Code} css={quizItemCss}>
                    <div css={quizFlagCss(item.flag)}>{item.name}</div>
                    {otherFlags && (
                        <QuizAnswers correct={item.name} others={otherFlags} />
                    )}
                </div>
            ))}
            <Link to="/" css={backLinkCss}>{`<< Back to regions`}</Link>
        </div>
    )
};