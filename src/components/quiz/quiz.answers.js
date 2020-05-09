/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { useEffect, useState, Fragment } from 'react';
import shuffle from 'knuth-shuffle-seeded'

import { buttonCss } from './quiz.styles';

const getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

const FlagAnswers = ({ 
    correct, 
    others,
}) => {
    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answeredOption, setAnsweredOption] = useState('');
    
    useEffect(() => {
        const firstOption = others.splice(getRandom(0, others.length - 1), 1);
        const secondOption = others.splice(getRandom(0, others.length - 1), 1);

        const { name: firstOptionName } = firstOption[0];
        const { name: secondOptionName } = secondOption[0];

        setAnswers(shuffle([firstOptionName, secondOptionName, correct]));
    }, [correct, others]);

    if (!!!answers.length) {
        return <div>Loading...</div>
    }

    return (
        <Fragment>
            {answers.map((answer, index) => (
                <div key={index}>
                    <button
                        disabled={!!answeredOption}
                        css={buttonCss({ 
                            isAnswered,
                            isCurrentAnswer: answeredOption === answer, 
                            answeredCorrectly: answeredOption === correct,
                            highlightCorrectAnswer: answer === correct
                        })} 
                        onClick={() => {
                            setIsAnswered(true);
                            setAnsweredOption(answer);
                        }}>
                            {answer}
                        </button>
                </div>
            ))}
        </Fragment>
    )
}

export default FlagAnswers;