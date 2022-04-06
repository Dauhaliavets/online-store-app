import React from 'react';
import { useSelector } from 'react-redux';
import getItemCount from '../../../../js/getItemCount.js';
import getTotalCount from '../../../../js/getTotalPrice.js';
import SubTotal from '../SubTotal/SubTotal';
import s from './BuyForm.module.css';

export default function BuyBox() {
	const cart = useSelector((state) => state.cart);
	const totalPrice = getTotalCount(cart);
	const countItems = getItemCount(cart);

	return (
		<div className={s.wrapper}>
			<form>
				<SubTotal totalPrice={totalPrice} countItems={countItems} />
				<div className={s.button}>{'Buy now'}</div>
			</form>
		</div>
	);
}
