import React from 'react';

const iconStyle = (iconUrl) => <img src={iconUrl} alt="social-icon" />;

export const footerSocialData = [
	{
		name: 'Facebook',
		icon: iconStyle('/path/to/facebook-icon.png'),
	},
	{
		name: 'Instagram',
		icon: iconStyle('/path/to/instagram-icon.png'),
	},
	{
		name: 'YouTube',
		icon: iconStyle('/path/to/youtube-icon.png'),
	},
	{
		name: 'Twitter',
		icon: iconStyle('/path/to/twitter-icon.png'),
	},
	{
		name: 'LinkedIn',
		icon: iconStyle('/path/to/linkedin-icon.png'),
	},
];

export const footerData = [
	{
		title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
	},
	{
		title: 'Product',
		links: ['Login', 'Personal', 'Business', 'Team'],
	},
	{
		title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
	},
	{
		title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
	},
];