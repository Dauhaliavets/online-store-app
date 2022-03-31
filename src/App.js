import React from 'react';
import s from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main'
import Footer from './components/footer/Footer'



function App() {
	return (
		<div className={s.wrapper}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
