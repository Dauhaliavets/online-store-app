import React from 'react'
import BuyBox from './BuyForm/BuyForm'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import styles from './BasketLayout.module.css';

export default function BasketLayout() {
	return (
		<div className={styles.wrapper}>
			<ShoppingCart />
			<BuyBox />
		</div>
	)
}
