import React from 'react';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import RegistrationForm from './components/account/RegistrationForm';
import LoginForm from './components/account/LoginForm';

function App() {
	return (
		<div className={s.wrapper}>
			<Header />
			<Main />
			<Footer />
			<Routes>
				<Route exact path="/registration" element={<RegistrationForm />} />
				<Route path="/authorization" element={<LoginForm />} />
			</Routes>
		</div>
	);
}

export default App;
