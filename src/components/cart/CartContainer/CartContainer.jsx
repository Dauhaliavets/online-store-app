import React from 'react';
import BuyBox from './BuyForm/BuyForm';
import ShoppingCart from '../CartContainer/ShoppingCart/ShoppingCart';
import s from './CartContainer.module.css';

export default function CartContainer() {
	return (
		<div className={s.wrapper}>
			<ShoppingCart />
			<BuyBox />
		</div>
	)
}
