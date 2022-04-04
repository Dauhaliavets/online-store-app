import React from 'react';
import { useSelector } from 'react-redux';
import SubTotal from '../SubTotal/SubTotal';
import s from './BuyForm.module.css';

export default function BuyBox() {
	const cart = useSelector((state) => state.cart);

	const totalPrice = cart.reduce((acc, cur) => {
		if (cur.isChoise) {
			acc = acc + +cur.price;
			return +acc.toFixed(2);
		}
		return acc;
	}, 0);

	return (
		<div className={s.wrapper}>
			<form>
				<SubTotal totalPrice={totalPrice} countItems={cart.length} />
				<button className={s.button}>{'Buy now'}</button>
			</form>
		</div>
	);
}
