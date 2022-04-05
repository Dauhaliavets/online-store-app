import React from 'react'
import { Routes, Route } from 'react-router-dom';
import s from './Main.module.css';
import ProductListing from './product_listing/ProductListing';
import CartContainer from '../cart/CartContainer/CartContainer';

const Main = () => {
	return (
		<div className={s.wrapper}>
			<Routes>
				<Route path="/products" element={<ProductListing />} />
				<Route path="/cart" element={<CartContainer />} />
			</Routes>
		</div>
	)
}

export default Main;