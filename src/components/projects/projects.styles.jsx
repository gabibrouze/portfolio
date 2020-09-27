import styled from 'styled-components';

import { white, grey, black, mediaQuery, bodyFont } from '../../styles';

export const Header = styled.h3`
	${mediaQuery('SM')`
        grid-column: 1 / -1;
    `};
`;

export const Box = styled.div`
	${mediaQuery('MD')`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-flow: dense;
		align-items: flex-start;
		border-right: 6px solid #333;
    `};

	${mediaQuery('MD')`
        grid-column-gap: 1rem;
        grid-column: span 3;
		grid-row: 1 / 3;
    `};
`;

export const Project = styled.div`
	position: relative;
	padding: 2rem;

	${mediaQuery('LG')`
        display: flex;
        align-items: center;
        padding: 1rem;
    `};
`;

export const Image = styled.img`
	width: 100%;
`;

export const ImageBox = styled.div`
	position: relative;
	max-width: 200px;

	${mediaQuery('LG')`
        flex: 0 0 11.25rem;
    `};

	&:after {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		width: 50%;
		height: 100%;
		background: linear-gradient(to right, transparent, ${white});
	}
`;

export const Name = styled.div`
	text-transform: uppercase;
`;

export const Caption = styled.div`
	margin-bottom: 0.3rem;
	font-family: ${bodyFont};
	color: ${grey};
	font-size: 1.1rem;

	${mediaQuery('LG')`
        flex: 1;
        padding-left: 1;
    `};
`;

export const Num = styled.div`
	grid-row: 1;
	grid-column: 2;
`;

export const Site = styled.a`
	color: ${black};
	font-size: 1.2rem;
	padding: 0.5rem 0.7rem 0.5rem 0;
`;

export const Message = styled.div`
	color: ${grey};
	font-size: 1.2rem;
	padding: 0.5rem 0.7rem 0.5rem 0;
`;

export const TechBlocks = styled.div``;

export const Description = styled.div`
	display: grid;
	grid-template-columns: 1fr min-content;

	${Caption}, ${TechBlocks} {
		grid-column: 1 / -1;
	}

	${Name}, ${Num} {
		font-size: 1.2rem;
	}
`;
