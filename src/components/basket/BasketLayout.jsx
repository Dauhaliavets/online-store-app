import React from 'react'
import BuyBox from './BuyForm/BuyForm'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import styles from './BasketLayout.module.css';
import { useSelector } from 'react-redux';

export default function BasketLayout() {
	const cart = useSelector(state => state.cart);
	console.log(cart);

	return (
		<div className={styles.wrapper}>
			<ShoppingCart />
			<BuyBox />
		</div>
	)
}
