import React from 'react';
import { useSelector } from 'react-redux';
import SubTotal from '../SubTotal/SubTotal';
import styles from './BuyForm.module.css';

export default function BuyBox() {
	const cart = useSelector((state) => state.cart);

	const totalPrice = cart.reduce((acc, cur) => {
		if (cur.isChoise) {
			acc = acc + +cur.price;
			return +acc.toFixed(2);
		}
		return acc;
	}, 0);

	const countItems = cart.filter(card => card.isChoise).length;

	return (
		<div className={styles.wrapper}>
			<form>
				<SubTotal totalPrice={totalPrice} countItems={countItems} />
				<div className={styles.button}>{'Buy now'}</div>
			</form>
		</div>
	);
}
