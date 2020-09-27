import styled from 'styled-components';

import { grey, decoFont, purples, mediaQuery } from '../../styles';

export const BrandBox = styled.div`
	display: grid;
	grid-template-columns: min-content 1fr;
`;

export const LogoBox = styled.div`
	display: grid;
	grid: repeat(2, 3.75rem) / repeat(2, 3.75rem);
	font-family: ${decoFont};
	font-size: 2.5rem;
	font-weight: 700;
	border: 6px solid ${grey};
	border-width: 6px 6px 0;
	color: ${purples[350]};
	text-align: center;
	grid-column: 1 / 2;
	background: ${grey};
	border-top-left-radius: 10px;

	span {
		padding-top: 0.5rem;
		background: ${purples[350]};
		color: ${purples[550]};

		&:first-child,
		&:last-child {
			background: ${purples[550]};
			color: ${purples[350]};
		}
	}
`;

export const Title = styled.div`
	font-family: ${decoFont};
	font-size: 1rem;
	text-align: left;
	font-weight: 700;
	line-height: 1.1;
	border: 6px solid ${grey};
	border-width: 6px 6px 0 0;
	grid-column: 2 / 3;
	background: ${purples[550]};
	color: ${purples[100]};
	text-transform: uppercase;
	border-top-right-radius: 10px;
	padding: 0 1rem;

	display: flex;
	align-items: center;

	${mediaQuery('MD')`
		font-size: 2rem;
		padding: 0 4rem;
    `};
`;
