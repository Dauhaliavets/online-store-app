import React from 'react';
import s from './Cart.module.css';
import cart from '../../assets/icons/cart.svg';

const Cart = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.cart}>
				<img src={cart} alt="cart" />
				<div className={s.counter}>0</div>
			</div>
			<p className={s.name}>Cart</p>
		</div>
	)
}

export default Cart;