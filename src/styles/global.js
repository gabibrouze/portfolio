import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

import { mediaQuery } from './breakpoints';
import { black, white, grey, purples, main } from './colour';
import { headFont, decoFont } from './fonts';

export const GlobalStyle = createGlobalStyle`
    ${normalize()};

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${white};
        font-family: ${headFont};
        font-weight: 300;
        line-height: 1.2;
        padding: 1rem;

        ${mediaQuery('MD')`
            padding: 3rem;
        `};
    }

    h3 {
        font-family: ${decoFont};
        font-weight: 700;
        font-size: 1.5rem;
        background: ${main};
        color: ${grey};
        letter-spacing: 0.2rem;
        padding: 1rem 2rem;
        text-transform: uppercase;
        box-shadow: 0 -6px 0 0 ${grey}, 0 6px ${grey};

        ${mediaQuery('SM')`
            font-size: 2.5rem;
        `};
    }

    span.tech-block {
        display: inline-block;
        width: 2rem;
        height: 2rem;
        text-align: center;
        font: 800 0.8rem ${decoFont};
        padding-top: 0.5rem;
        color: ${white};
        border: 2px solid ${black};
        margin-top: 0.25rem;
       
        &:not(:first-child) {
            margin-left: -0.125rem;
        }
       
        &.html { background: ${purples[100]}; }
        &.css { background: ${purples[200]}; }
        &.javascript  { background: ${purples[300]}; }
        &.node { background: ${purples[400]}; }    
        &.mongoDB  { background: ${purples[500]}; }
        &.react  { background: ${purples[600]}; }
        &.redux { background: ${purples[700]}; }
        &.firebase { background: ${purples[800]}; }
        &.sass  { background: ${purples[900]}; } 
        &.react-native { background: ${purples[950]}; }
    }
`;
