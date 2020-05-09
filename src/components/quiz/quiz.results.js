/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { Link } from "@reach/router"

import { buttonBasicCss, resultContainerCss } from './quiz.styles';

import { 
    resultsOverlayCss, 
    resultsContentCss, 
    resultsCloseCss 
} from './quiz.styles';

const QuizResult = ({ score }) =>  {
    const [showScoreModal, setShowScoreModal] = useState(false);

    return (
        <div css={resultContainerCss}>
            <h2>Quiz results</h2>
            <p>You've answered {score} correct flags!</p>
            <p>
                <span role="img" aria-label="clap">👏🏻</span>
                <span role="img" aria-label="clap">👏🏻</span>
                <span role="img" aria-label="clap">👏🏻</span>
            </p>
            <button
                css={buttonBasicCss}
                onClick={() => setShowScoreModal(true)}>
                Receive congratulations
            </button>
            {showScoreModal && (
                <div css={resultsOverlayCss}>
                    <div css={resultsContentCss}>
                        <h1>You answered {score} correct flags!</h1>
                        <img 
                            width="400px" 
                            src="https://i.imgflip.com/40rmc6.jpg" 
                            alt="Hope you learned some new flags" />
                        <div>
                            <Link to="/">{`<< Back to homepage`}</Link>
                        </div>
                    </div>
                    <Link to="/" css={resultsCloseCss}>X</Link>
                </div>
            )}
        </div>
    );
}

export default QuizResult;
