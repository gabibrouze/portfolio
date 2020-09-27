import React from 'react';
import {
	Box,
	Header,
	Project,
	ImageBox,
	Image,
	Description,
	Name,
	Caption,
	Num,
	Site,
	Message,
	TechBlocks,
} from './projects.styles';

import { projects } from '../../data/projects';

const Projects = () => (
	<Box>
		<Header>Portfolio</Header>
		{projects.map(proj => {
			const { name, image, description, id, siteURL, technologies } = proj;
			return (
				<Project>
					<ImageBox>
						<Image src={require(`../../assets/images/${image}`)} />
					</ImageBox>
					<Description>
						<Name>{name}</Name>
						<Caption>{description}</Caption>
						<Num>{id}</Num>
						{siteURL ? (
							<Site href={siteURL}>Demo</Site>
						) : (
							<Message>Under Construction</Message>
						)}
						<TechBlocks>
							{technologies.map(tech => (
								<span className={`tech-block ${tech}`}>
									{tech.charAt(0).toUpperCase()}
								</span>
							))}
						</TechBlocks>
					</Description>
				</Project>
			);
		})}
	</Box>
);

export default Projects;
