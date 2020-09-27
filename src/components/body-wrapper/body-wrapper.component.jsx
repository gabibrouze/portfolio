import React from 'react';
import { Container } from './body-wrapper.component.styles';

import Projects from '../projects/projects.component';
import About from '../about/about.component';

const BodyWrapper = () => (
	<Container>
		<Projects />
		<About />
	</Container>
);

export default BodyWrapper;
