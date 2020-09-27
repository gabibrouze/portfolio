import styled from 'styled-components';

import { mint, grey, decoFont, mediaQuery } from '../../styles';

export const Box = styled.a`
	grid-column: 3 / 4;
	background: ${mint[100]};
	color: ${grey};
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	font-family: ${decoFont};
	font-size: 1.4rem;
	font-weight: 700;
	text-align: center;
	border: 6px solid ${grey};
	border-width: 6px 0 0 0;
	padding: 0.5rem;

	&:hover {
		background: ${mint[200]};
	}

	${mediaQuery('LG')`
        font-size: 2rem;
        border-top: none;
    `};
`;
