import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import Form from '../search/Form';
import Account from '../account/Account';
import Cart from '../cart/Cart';
import Menu from '../menu/Menu';

const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.main}>
				<NavLink to='/' className={s.logo}><img src={logo} alt="logo" /></NavLink>
				<Form />
				<Account />
				<Cart />
			</div>
			<Menu />
		</div>
	)
}

export default Header;