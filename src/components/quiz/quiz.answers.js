/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { useEffect, useState, Fragment } from 'react';
import shuffle from 'knuth-shuffle-seeded'

import { getLocalItem, getRandom, updateStorageVariables } from './quiz.helpers';
import QuizResult from './quiz.results';
import { buttonCss } from './quiz.styles';

const QuizAnswers = ({ 
    correct, 
    others,
}) => {
    const [answers, setAnswers] = useState([]);
    const [isAnswered, setIsAnswered] = useState(false);
    const [answeredOption, setAnsweredOption] = useState('');
    const [showScore, setShowScore] = useState(false);
    
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
            {answers.map((answer, index) => {
                return (
                    <div key={index}>
                        <button
                            disabled={!!answeredOption}
                            css={buttonCss({ 
                                isAnswered,
                                answeredCorrectly: answeredOption === correct,
                                isCurrentAnswer: answeredOption === answer, 
                                highlightCorrectAnswer: answer === correct
                            })} 
                            onClick={() => {
                                setIsAnswered(true);
                                setAnsweredOption(answer);
                                updateStorageVariables({answer, correct, setShowScore});
                            }}>
                                {answer}
                            </button>
                    </div>
                )
            })}
            {showScore &&  <QuizResult score={getLocalItem('quiz_result')} />}
        </Fragment>
    )
}

export default QuizAnswers;