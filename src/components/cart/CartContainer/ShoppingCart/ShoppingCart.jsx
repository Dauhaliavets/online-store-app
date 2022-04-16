import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getItemCount from '../../../../js/getItemCount';
import getTotalPrice from '../../../../js/getTotalPrice';
import { setChosenProduct } from '../../../../redux-store/actions/productsActions';
import { SubTotal } from '../SubTotal/SubTotal';
import { Card } from './Card/Card';
import s from './ShoppingCart.module.css';

let title;

function ShoppingCart() {
	const [lastCard, setLastCard] = useState(null);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.user.cart);
	const totalPrice = getTotalPrice(cart);
	const countItems = getItemCount(cart);
	const isEmptyCart = !cart.length;

	useEffect(() => {
		if (cart.length === 1) {
			setLastCard(cart[0]);
		}
	}, [cart]);

	if (isEmptyCart) {
		title = <h3 className={s.title}>Your Marathon Cart is empty.</h3>;
	} else {
		title = <h3 className={s.title}>Shopping Cart</h3>;
	}

	const cards = cart.map((item) => <Card key={item.id} data={item} />);

	return (
		<div className={s.wrapper}>
			{title}
			<h4 className={s.sub_title}>Price</h4>
			<div className={s.cards_container}>
				{(isEmptyCart && lastCard) && (
					<h4 className={s.cards_container_subtitle}>
						<NavLink
							className={s.cards_container_subtitle_link}
							to='/products'
							onClick={() => {
								dispatch({type: 'SET_CHOSEN_PRODUCT', payload: lastCard});
							}}
						>
							{lastCard.title}
						</NavLink>
						<span> was removed from Shopping Cart.</span>
					</h4>
				)}
				{cards}
			</div>
			<div className={s.subtotal_wrapper}>
				<SubTotal totalPrice={totalPrice} countItems={countItems} />
			</div>
		</div>
	);
}

export { ShoppingCart };
