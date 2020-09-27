import React from 'react';
import { Box } from './resume-download.styles';

const ResumeDownload = () => (
	<Box href={require('../../assets/docs/RESUME.pdf')} download>
		Download Resume
	</Box>
);

export default ResumeDownload;
