import React from 'react';
import BuyBox from './BuyForm/BuyForm';
import ShoppingCart from '../CartContainer/ShoppingCart/ShoppingCart';
import styles from './CartContainer.module.css';

export default function CartContainer() {
	return (
		<div className={styles.wrapper}>
			<ShoppingCart />
			<BuyBox />
		</div>
	)
}
