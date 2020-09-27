import React from 'react';
import { Container } from './header.styles';

import BrandBar from '../brandbar/brandbar.component';
import Legend from '../legend/legend.component';

const Header = () => {
	return (
		<Container>
			<BrandBar />
			<Legend />
		</Container>
	);
};

export default Header;
