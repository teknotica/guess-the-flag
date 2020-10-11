/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { Link } from "@reach/router"
import shuffle from 'knuth-shuffle-seeded'
import { useCallback, useEffect, useState } from 'react';

import { API_URL, QUIZ_QUESTIONS_COUNT } from '../const';
import QuizAnswers from './quiz.answers';
import { 
    backLinkCss, 
    quizFlagCss, 
    quizItemCss, 
    quizWrapperCss} from './quiz.styles';

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
        sessionStorage.setItem('quiz_answered_counter', 0);
        sessionStorage.setItem('quiz_result', 0);
        
        // If region flags are not in the state fetch and save 
        if (!regionFlagsInStore) {
            fetchFlags();
        }
        return () => {
            sessionStorage.clear();
        }
    }, [fetchFlags, region, regionFlagsInStore]);

    if (loading && !regionFlagsInStore) {
        return <div>Loading flags...</div>;
    }

    const shuffleFlags = shuffle(regionFlags[region]);
    const slicedFlags = shuffleFlags.slice(0, QUIZ_QUESTIONS_COUNT);
    const otherFlags = shuffleFlags.slice(QUIZ_QUESTIONS_COUNT + 1);

    return (
        <div css={quizWrapperCss}>
            <Link to="/" css={backLinkCss}>{`<< Back to regions`}</Link>
            {slicedFlags.map(item => (
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