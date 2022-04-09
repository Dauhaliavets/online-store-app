import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
				<Link to='/cart/order'>
					<div className={s.button}>{'Buy now'}</div>
				</Link>
			</form>
		</div>
	);
}
