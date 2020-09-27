import styled from 'styled-components';

import { mediaQuery, grey } from '../../styles';

export const Box = styled.div`
	grid-column: 1 / 2;
	border: 6px solid ${grey};
	border-width: 0;

	${mediaQuery('LG')`
		border-width: 0 6px 0 0;
	`}

	p {
		font-size: 1.5rem;
		text-align: center;
		padding: 0.5rem 0;
	}
`;

export const Header = styled.h3``;
