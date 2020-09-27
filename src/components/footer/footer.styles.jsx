import styled from 'styled-components';

import { grey, mediaQuery } from '../../styles';

export const Panel = styled.div`
	border: 6px solid ${grey};
	border-width: 0 6px 6px;

	${mediaQuery('LG')`
        display: grid;
        grid-template-columns: 1.5fr 1.5fr 1fr;
        width: 100%;
        align-items: stretch;
    `};
`;
