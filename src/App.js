import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import RegistrationForm from './components/account/RegistrationForm';
import LoginForm from './components/account/LoginForm';
import ProductListing from '../src/components/main/product_listing/ProductListing';
import CartContainer from '../src/components/cart/CartContainer/CartContainer';

function App() {
	return (
		<div className={s.wrapper}>
			<Header />
			<Routes>
				<Route path="/">
					<Route path="/" element={<Main />} />
					<Route path="products" element={<ProductListing />} />
					<Route path="cart" element={<CartContainer />} />
					<Route path="/registration" element={<RegistrationForm />} />
					<Route path="/authorization" element={<LoginForm />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
