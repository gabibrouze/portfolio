import styled from 'styled-components';

import { mediaQuery, grey } from '../../styles';

export const Container = styled.div`
	border: 6px solid ${grey};
	border-width: 0 6px 6px;

	${mediaQuery('LG')`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(4, 1fr);
        align-items: stretch;
    `}
`;
