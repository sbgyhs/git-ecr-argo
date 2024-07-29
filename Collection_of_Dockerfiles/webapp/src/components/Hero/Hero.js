import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../global';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" autoPlay muted />
			<Container>
				<MainHeading>당신의 다음 책을 발견하세요</MainHeading>
				<HeroText>
                Skylo는 다양한 도서 컬렉션을 제공하며, 당신이 좋아할 새로운 책을 찾아드립니다.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>회원 가입</Button>
					</Link>
					<Link to="signin">
					<HeroButton>로그인</HeroButton>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
