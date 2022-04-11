import React from 'react';
import s from './Cards.module.css';
import laptop from '../../../assets/images/cards/laptop.jpg';
import computer from '../../../assets/images/cards/computer.jpg';
import headphones from '../../../assets/images/cards/headphones.jpg';
import phone from '../../../assets/images/cards/phone.jpg';
import tablet from '../../../assets/images/cards/tablet.jpg';
import watch from '../../../assets/images/cards/watch.jpg';
import tv from '../../../assets/images/cards/tv.jpg';
import console from '../../../assets/images/cards/console.jpg';
import accessories from '../../../assets/images/cards/accessories.jpg';
import { Card } from '../Card';

const Cards = () => {
	return (
		<div className={s.wrapper}>
			<Card image={laptop} title='Laptops' />
			<Card image={computer} title='Computers' />
			<Card image={headphones} title='Headphones' />
			<Card image={phone} title='Smartphones' />
			<Card image={tablet} title='Tablets' />
			<Card image={watch} title='Smart watches' />
			<Card image={tv} title='Television' />
			<Card image={console} title='Video game consoles' />
			<Card image={accessories} title='Accessories' />
		</div>
	)
}

export { Cards };