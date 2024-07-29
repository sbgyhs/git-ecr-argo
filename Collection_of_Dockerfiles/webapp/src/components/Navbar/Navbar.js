import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './NavbarStyles.js';
import { data } from '../../data/NavbarData';

const Navbar = () => {
	const [show, setShow] = useState(false);
	const location = useLocation();
	const navigate = useNavigate(); // useNavigate hook 사용

	const handleClick = () => {
		setShow(!show);
	};

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	const closeMobileMenu = (to, id) => {
		if (id && location.pathname === '/') {
			scrollTo(id);
		}

		navigate(to); // useNavigate를 이용한 페이지 이동
		setShow(false); // 페이지 이동 후 메뉴 닫기
	};

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/">
					<NavIcon src="./assets/logo.png" alt="logo" />
					Skylo
				</NavLogo>
				<MobileIcon onClick={handleClick}>
					{show ? 'X' : '☰'}
				</MobileIcon>
				<NavMenu show={show}>
					{data.map((el, index) => (
						<NavItem key={index}>
							{/* Link 컴포넌트를 사용하여 페이지 이동 처리 */}
							<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
								{el.text}
							</NavLinks>
						</NavItem>
					))}
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;