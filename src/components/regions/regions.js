/** @jsx jsx */	
import { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { Link } from "@reach/router";

import { buttonCss } from './regions.styles';

export const Regions = ({ list }) => (
    <Fragment>
        <p>Choose a region to start a quiz!</p>
        {list.map((region, index) => (
            <Link key={index} to={`quiz/${region.toLowerCase()}`}>
                <button css={buttonCss}>{region}</button>
            </Link>
        ))}
    </Fragment>
);