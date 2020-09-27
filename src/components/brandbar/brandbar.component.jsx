import React from 'react';

import { BrandBox, LogoBox, Title } from './brandbar.styles';

const BrandBar = () => {
	return (
		<BrandBox>
			<LogoBox>
				<span>G</span>
				<span>A</span>
				<span>B</span>
				<span>I</span>
			</LogoBox>
			<Title>Gabi Brouze &nbsp; - &nbsp; full stack web developer</Title>
		</BrandBox>
	);
};

export default BrandBar;
