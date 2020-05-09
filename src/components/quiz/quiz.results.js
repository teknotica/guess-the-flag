/** @jsx jsx */	
import { jsx } from '@emotion/core';
import { Link } from "@reach/router"

import { 
    resultsOverlayCss, 
    resultsContentCss, 
    resultsCloseCss 
} from './quiz.styles';

const QuizResult = ({ score }) =>  {
    return (
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
    );
}

export default QuizResult;
