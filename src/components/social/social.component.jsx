import React from 'react';
import { Box, Header, Link, LogoBox, Logo } from './social.styles';

import { links } from '../../data/links';

const Social = () => (
	<Box>
		<Header>Social</Header>
		<Link>
			{links.map(link => {
				return (
					<LogoBox href={link.url}>
						<Logo
							src={require(`../../assets/icons/${link.logo}`)}
							alt='social site logo'
						/>
					</LogoBox>
				);
			})}
		</Link>
	</Box>
);

export default Social;
