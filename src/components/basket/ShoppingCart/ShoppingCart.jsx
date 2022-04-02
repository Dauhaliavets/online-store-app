import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SubTotal from '../SubTotal/SubTotal';
import Card from './Card/Card';
import Preloader from './Preloader/Preloader';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
	const cart = useSelector(state => state.cart);

	const totalPrice = cart.reduce((acc, cur) => {
		if(cur.isChoise) {
			acc = acc + +cur.price
			return +(acc.toFixed(2))
		}
		return acc;
	}, 0)

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>ShoppingCart</h3>
			{
				cart.map((item, index) => <Card key={index} data={item}/>)
			}
			<SubTotal totalPrice={totalPrice} countItems={cart.length} />
		</div>
	);
}
