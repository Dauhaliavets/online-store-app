import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Cart.module.css';
import cart from '../../assets/icons/cart.svg';

const Cart = () => {
	return (
		<NavLink to='/cart'>
			<div className={s.wrapper}>
				<div className={s.cart}>
					<img src={cart} alt="cart" />
					<div className={s.counter}>0</div>
				</div>
				<p className={s.name}>Cart</p>
			</div>
		</NavLink>
	)
}

export default Cart;