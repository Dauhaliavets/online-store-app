import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux-store/thunk/asyncActions';
import ProductListing from '../src/components/main/product_listing/ProductListing';
import CartContainer from '../src/components/cart/CartContainer/CartContainer';

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	})

	return (
		<div className={s.wrapper}>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="products" element={<ProductListing />} />
				<Route path="cart" element={<CartContainer />} />
			</Routes>
			<Footer />
		</div>
	);
}

export { App };
