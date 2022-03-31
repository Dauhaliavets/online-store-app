import React from 'react';
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import Form from '../search/Form';



const Header = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.logo}><img src={logo} alt="logo" /></div>
			<Form />
		</div>
	)
}

export default Header;