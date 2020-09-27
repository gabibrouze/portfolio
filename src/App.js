import React, { Fragment } from 'react';

import { GlobalStyle } from './styles';

import Header from './components/header/header.component';
import BodyWrapper from './components/body-wrapper/body-wrapper.component';
import Footer from './components/footer/footer.component';

const App = () => {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<BodyWrapper />
			<Footer />
		</Fragment>
	);
};

export default App;
