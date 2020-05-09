import { css } from '@emotion/core';

export const quizWrapperCss = css`
    max-width: 300px;
    margin: auto;
`;

export const backLinkCss = css`
    display: inline-block;
    margin-bottom: 2rem;
`;

export const quizItemCss = css`
    margin-bottom: 3rem;
`;

export const quizFlagCss = src => css`
    width: 100%;
    height: 160px;
    margin: auto 0 1rem 0;
    ${src && `background: url(${src}) 0 0 no-repeat`};
    background-size: contain;
    background-position: top center;
    text-indent: -9999px;
    border: 1px solid #f3f3f3;
`;

export const buttonCss = ({ 
    isAnswered, 
    isCurrentAnswer, 
    answeredCorrectly, 
    highlightCorrectAnswer 
}) => css`
    width: 300px;
    height: 35px;
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    ${isAnswered && isCurrentAnswer && css`
        background: ${answeredCorrectly ? '#79c979' : '#d73b0a'};
        color: white;
    `};
    ${isAnswered && highlightCorrectAnswer && css`
        background: #79c979;
        color: white;
    `};
`;