import React from 'react';
import { Panel } from './footer.styles';

import Contact from '../contact/contact.component';
import Social from '../social/social.component';
import ResumeDownload from '../resume-download/resume-download.component';

const Footer = () => (
	<Panel>
		<Contact />
		<Social />
		<ResumeDownload />
	</Panel>
);

export default Footer;
