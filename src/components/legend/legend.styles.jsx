import styled from 'styled-components';

import { bodyFont, mediaQuery, purples, white, grey } from '../../styles';

export const LegendBox = styled.div`
	border: 6px solid ${grey};
	border-width: 0 6px 6px 0;

	background: repeating-linear-gradient(
		90deg,
		${purples[600]} 0px,
		${purples[650]} 32px,
		${purples[600]} 64px
	);

	${mediaQuery('MD')`
		border-width: 6px;
		display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
	`};
`;

export const Item = styled.div`
	display: block;
	background: ${white};
	font-family: ${bodyFont};

	span {
		color: ${({ colour }) => colour};
		display: inline-block;
		height: 2rem;
		text-transform: uppercase;
		font-weight: 700;
		flex: auto;
		padding: 0 1.25rem 0 0.75rem;
	}

	i {
		background: ${({ colour }) => colour};
		display: inline-block;
		width: 3.4375rem;
		height: 2.8125rem;
		font-size: 1.5rem;
		font-weight: 700;
		text-align: center;
		line-height: 1.5;
		color: ${white};
		border: 6px solid ${grey};
		border-width: 0 6px;
	}
`;
