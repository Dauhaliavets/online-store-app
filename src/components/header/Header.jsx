import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import Search from '../search/Search';
import Account from '../account/Account';
import Cart from '../cart/Cart';
import Menu from '../menu/Menu';

const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.main}>
				<NavLink to='/'><img className={s.logo} src={logo} alt="logo" /></NavLink>
				<Search />
				<Account />
				<NavLink to='/cart'><Cart /></NavLink>
			</div>
			<Menu />
		</div>
	)
}

export default Header;