import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getItemCount from '../../../../js/getItemCount';
import getTotalPrice from '../../../../js/getTotalPrice';
import SubTotal from '../SubTotal/SubTotal';
import Card from './Card/Card';
import s from './ShoppingCart.module.css';

export default function ShoppingCart() {
	const cart = useSelector(state => state.user.cart);
	const totalPrice = getTotalPrice(cart);
	const countItems = getItemCount(cart);

	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>ShoppingCart</h3>
			{
				cart.map((item, index) => <Card key={index} data={item} />)
			}
			<SubTotal totalPrice={totalPrice} countItems={countItems} />
		</div>
	);
}
