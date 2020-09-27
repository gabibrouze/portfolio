import styled from 'styled-components';

import { mediaQuery, purples, grey } from '../../styles';

export const Box = styled.div`
	grid-column: 2 / 3;
	border: 6px solid ${grey};
	border-width: 0;

	${mediaQuery('LG')`
		border-width: 0 6px 0 0;
	`}
`;

export const Header = styled.h3``;

export const LogoBox = styled.div`
	display: flex;
	justify-content: center;
`;

export const Logo = styled.img`
	max-width: 10.2rem;

	&:hover {
		background: ${purples[200]};
		border-radius: 10%;
	}
`;

export const Link = styled.div`
	padding: 1rem 0;
	display: flex;
	justify-content: space-around;
`;
