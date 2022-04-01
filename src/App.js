import React from 'react';
import s from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import BasketLayout from './components/basket/BasketLayout';

function App() {
	return (
		<div className={s.wrapper}>
			<Header />
			<Main />
			{/* <BasketLayout /> */}
			<Footer />
		</div>
	);
}

export default App;
