import React from 'react';
import { LegendBox, Item } from './legend.styles';

import { technologies } from '../../data/technologies';

const Legend = () => {
	return (
		<LegendBox qty={technologies.length}>
			{technologies.map(tech => (
				<Item colour={tech.colour}>
					<i>{tech.name.charAt(0).toUpperCase()}</i>
					<span>{tech.name.toUpperCase()}</span>
				</Item>
			))}
		</LegendBox>
	);
};

export default Legend;
