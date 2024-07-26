import React from 'react';
import { Container, Section } from '../../global.js';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './ContentStyles.js';

export const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
}) => {
	return (
		<Section inverse={inverse}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine>
								{topLine.text}
							</TopLine>
							<Heading inverse={inverse}>
								{headline}
							</Heading>
							<Subtitle inverse={inverse}>
								{description}
							</Subtitle>
							<ContentButton inverse={inverse} primary={primary}>
								{buttonLabel}
							</ContentButton>
						</TextWrapper>
					</ContentColumn>
					<ContentColumn>
						<ImgWrapper>
							<Img src={img} alt={alt} />
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};